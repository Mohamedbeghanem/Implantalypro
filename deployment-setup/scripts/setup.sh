#!/bin/bash

# Subdomain Deployment Setup Script
# This script sets up two independent websites under subdomains

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="mymaindomain.com"
ALTA_SUBDOMAIN="alta.${DOMAIN}"
IDESIGN_SUBDOMAIN="idesign.${DOMAIN}"

echo -e "${BLUE}🚀 Starting Subdomain Deployment Setup${NC}"
echo "=================================="

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   print_error "This script must be run as root (use sudo)"
   exit 1
fi

# Update system
print_status "Updating system packages..."
apt update && apt upgrade -y

# Install required packages
print_status "Installing required packages..."
apt install -y nginx certbot python3-certbot-nginx ufw

# Create directory structure
print_status "Creating directory structure..."
mkdir -p /var/www/alta/public
mkdir -p /var/www/alta/logs
mkdir -p /var/www/alta/ssl
mkdir -p /var/www/alta/config

mkdir -p /var/www/idesign/public
mkdir -p /var/www/idesign/logs
mkdir -p /var/www/idesign/ssl
mkdir -p /var/www/idesign/config

# Set proper permissions
print_status "Setting permissions..."
chown -R www-data:www-data /var/www/alta
chown -R www-data:www-data /var/www/idesign
chmod -R 755 /var/www/alta
chmod -R 755 /var/www/idesign

# Copy Nginx configurations
print_status "Configuring Nginx..."
cp nginx/alta.${DOMAIN} /etc/nginx/sites-available/
cp nginx/idesign.${DOMAIN} /etc/nginx/sites-available/

# Enable sites
ln -sf /etc/nginx/sites-available/alta.${DOMAIN} /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/idesign.${DOMAIN} /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "Testing Nginx configuration..."
if nginx -t; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Copy sample files
print_status "Copying sample files..."
cp -r sample-files/alta/* /var/www/alta/public/
cp -r sample-files/idesign/* /var/www/idesign/public/

# Set proper ownership for sample files
chown -R www-data:www-data /var/www/alta/public
chown -R www-data:www-data /var/www/idesign/public

# Configure firewall
print_status "Configuring firewall..."
ufw allow 80
ufw allow 443
ufw allow 22
ufw --force enable

# Start and enable Nginx
print_status "Starting Nginx..."
systemctl start nginx
systemctl enable nginx

# Create logrotate configuration
print_status "Configuring log rotation..."
cat > /etc/logrotate.d/alta-idesign << EOF
/var/www/alta/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        systemctl reload nginx
    endscript
}

/var/www/idesign/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        systemctl reload nginx
    endscript
}
EOF

# Create SSL setup script
print_status "Creating SSL setup script..."
cat > /usr/local/bin/setup-ssl.sh << 'EOF'
#!/bin/bash

# SSL Setup Script for Subdomains

DOMAIN="mymaindomain.com"
ALTA_SUBDOMAIN="alta.${DOMAIN}"
IDESIGN_SUBDOMAIN="idesign.${DOMAIN}"

echo "🔒 Setting up SSL certificates..."

# Get SSL certificates
certbot --nginx -d ${ALTA_SUBDOMAIN} --non-interactive --agree-tos --email admin@${DOMAIN}
certbot --nginx -d ${IDESIGN_SUBDOMAIN} --non-interactive --agree-tos --email admin@${DOMAIN}

# Set up auto-renewal
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

echo "✅ SSL setup complete!"
echo "📅 Certificates will auto-renew daily at 12:00 PM"
EOF

chmod +x /usr/local/bin/setup-ssl.sh

# Create deployment script
print_status "Creating deployment script..."
cat > /usr/local/bin/deploy.sh << 'EOF'
#!/bin/bash

# Deployment Script for Subdomains

set -e

SITE=$1
ACTION=$2

if [[ -z "$SITE" || -z "$ACTION" ]]; then
    echo "Usage: $0 <alta|idesign> <deploy|restart|logs>"
    exit 1
fi

case $SITE in
    alta)
        SITE_PATH="/var/www/alta"
        ;;
    idesign)
        SITE_PATH="/var/www/idesign"
        ;;
    *)
        echo "Invalid site. Use 'alta' or 'idesign'"
        exit 1
        ;;
esac

case $ACTION in
    deploy)
        echo "🚀 Deploying $SITE..."
        # Add your deployment logic here
        # Example: rsync, git pull, npm build, etc.
        echo "✅ $SITE deployment complete"
        ;;
    restart)
        echo "🔄 Restarting Nginx..."
        systemctl restart nginx
        echo "✅ Nginx restarted"
        ;;
    reload)
        echo "🔄 Reloading Nginx..."
        systemctl reload nginx
        echo "✅ Nginx reloaded"
        ;;
    logs)
        echo "📋 Showing logs for $SITE..."
        tail -f $SITE_PATH/logs/access.log
        ;;
    *)
        echo "Invalid action. Use 'deploy', 'restart', 'reload', or 'logs'"
        exit 1
        ;;
esac
EOF

chmod +x /usr/local/bin/deploy.sh

# Create monitoring script
print_status "Creating monitoring script..."
cat > /usr/local/bin/monitor.sh << 'EOF'
#!/bin/bash

# Monitoring Script for Subdomains

echo "📊 Subdomain Status Report"
echo "=========================="

# Check Nginx status
echo "🌐 Nginx Status:"
systemctl is-active nginx > /dev/null && echo "✅ Active" || echo "❌ Inactive"

# Check SSL certificates
echo ""
echo "🔒 SSL Certificate Status:"
certbot certificates

# Check disk usage
echo ""
echo "💾 Disk Usage:"
df -h /var/www/

# Check recent logs
echo ""
echo "📋 Recent Access Logs (last 10 lines):"
echo "Alta Académie:"
tail -n 10 /var/www/alta/logs/access.log 2>/dev/null || echo "No logs yet"
echo ""
echo "iDesign:"
tail -n 10 /var/www/idesign/logs/access.log 2>/dev/null || echo "No logs yet"

# Check memory usage
echo ""
echo "🧠 Memory Usage:"
free -h

# Check uptime
echo ""
echo "⏰ System Uptime:"
uptime
EOF

chmod +x /usr/local/bin/monitor.sh

print_status "Setup complete!"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Configure DNS in Cloudflare:"
echo "   - Add A record: alta → YOUR_SERVER_IP"
echo "   - Add A record: idesign → YOUR_SERVER_IP"
echo ""
echo "2. Set up SSL certificates:"
echo "   sudo /usr/local/bin/setup-ssl.sh"
echo ""
echo "3. Test your websites:"
echo "   - https://alta.${DOMAIN}"
echo "   - https://idesign.${DOMAIN}"
echo ""
echo -e "${BLUE}🛠️  Available Commands:${NC}"
echo "• Deploy: sudo /usr/local/bin/deploy.sh <site> deploy"
echo "• Restart: sudo /usr/local/bin/deploy.sh <site> restart"
echo "• Monitor: sudo /usr/local/bin/monitor.sh"
echo "• View logs: sudo /usr/local/bin/deploy.sh <site> logs"
echo ""
echo -e "${GREEN}🎉 Your subdomain setup is ready!${NC}"
