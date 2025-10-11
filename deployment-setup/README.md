# Subdomain Deployment Setup

This setup provides two independent websites under subdomains:
- `alta.mymaindomain.com` → Alta Académie website
- `idesign.mymaindomain.com` → iDesign website

## 📁 Folder Structure

```
/var/www/
├── alta/                    # Alta Académie website
│   ├── public/             # Public web files
│   ├── logs/               # Access and error logs
│   ├── ssl/                # SSL certificates
│   └── config/             # Website-specific config
├── idesign/                # iDesign website
│   ├── public/             # Public web files
│   ├── logs/               # Access and error logs
│   ├── ssl/                # SSL certificates
│   └── config/             # Website-specific config
└── shared/                 # Shared resources (optional)
    ├── nginx/
    └── ssl/
```

## 🚀 Quick Setup

### 1. Create Directory Structure
```bash
# Create main directories
sudo mkdir -p /var/www/alta/public
sudo mkdir -p /var/www/alta/logs
sudo mkdir -p /var/www/alta/ssl
sudo mkdir -p /var/www/alta/config

sudo mkdir -p /var/www/idesign/public
sudo mkdir -p /var/www/idesign/logs
sudo mkdir -p /var/www/idesign/ssl
sudo mkdir -p /var/www/idesign/config

# Set proper permissions
sudo chown -R www-data:www-data /var/www/alta
sudo chown -R www-data:www-data /var/www/idesign
sudo chmod -R 755 /var/www/alta
sudo chmod -R 755 /var/www/idesign
```

### 2. DNS Configuration (Cloudflare)
Add these records in your Cloudflare DNS:

```
Type: A
Name: alta
Content: YOUR_SERVER_IP
Proxy: DNS only (gray cloud)

Type: A  
Name: idesign
Content: YOUR_SERVER_IP
Proxy: DNS only (gray cloud)
```

### 3. Install and Configure Nginx
```bash
# Install Nginx
sudo apt update
sudo apt install nginx

# Copy configuration files
sudo cp nginx/alta.mymaindomain.com /etc/nginx/sites-available/
sudo cp nginx/idesign.mymaindomain.com /etc/nginx/sites-available/

# Enable sites
sudo ln -s /etc/nginx/sites-available/alta.mymaindomain.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/idesign.mymaindomain.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 4. SSL Setup with Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificates
sudo certbot --nginx -d alta.mymaindomain.com
sudo certbot --nginx -d idesign.mymaindomain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📝 Deployment Notes

### Adding Content
- **Alta Académie**: Place files in `/var/www/alta/public/`
- **iDesign**: Place files in `/var/www/idesign/public/`

### Restarting Services
```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (no downtime)
sudo systemctl reload nginx

# Check status
sudo systemctl status nginx
```

### Logs
- **Alta Académie**: `/var/www/alta/logs/`
- **iDesign**: `/var/www/idesign/logs/`
- **Nginx logs**: `/var/log/nginx/`

### SSL Renewal
```bash
# Manual renewal
sudo certbot renew

# Check renewal status
sudo certbot certificates
```

## 🔧 Configuration Files

### Nginx Configs
- `nginx/alta.mymaindomain.com` - Alta Académie configuration
- `nginx/idesign.mymaindomain.com` - iDesign configuration

### Features
- ✅ Automatic SSL redirect
- ✅ Gzip compression
- ✅ Security headers
- ✅ Log rotation
- ✅ Error pages
- ✅ Static file caching

## 🛠️ Customization

### For WordPress
1. Install WordPress in respective `/public/` directories
2. Update Nginx configs to include PHP-FPM
3. Configure database connections

### For React/Next.js
1. Build static files: `npm run build`
2. Copy `out/` or `dist/` contents to `/public/`
3. Update Nginx configs for SPA routing

### For Custom Frontend
1. Place HTML/CSS/JS files in `/public/`
2. Ensure `index.html` is in root of `/public/`

## 🔒 Security

### Firewall Setup
```bash
# Allow HTTP/HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Enable firewall
sudo ufw enable
```

### Security Headers
Already configured in Nginx configs:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security

## 📊 Monitoring

### Check Status
```bash
# Nginx status
sudo systemctl status nginx

# SSL certificate status
sudo certbot certificates

# Disk usage
df -h /var/www/

# Log monitoring
tail -f /var/www/alta/logs/access.log
tail -f /var/www/idesign/logs/access.log
```

## 🚨 Troubleshooting

### Common Issues
1. **403 Forbidden**: Check file permissions
2. **502 Bad Gateway**: Check if services are running
3. **SSL errors**: Verify certificate renewal
4. **DNS not resolving**: Check Cloudflare settings

### Debug Commands
```bash
# Test Nginx config
sudo nginx -t

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test SSL certificate
openssl s_client -connect alta.mymaindomain.com:443
```
