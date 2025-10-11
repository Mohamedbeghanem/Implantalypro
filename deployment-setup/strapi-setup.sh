#!/bin/bash

# Strapi CMS Setup Script for Hostinger
# This script helps you set up Strapi CMS for your subdomains

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="yourdomain.com"
STRAPI_SUBDOMAIN="api"
STRAPI_URL="https://${STRAPI_SUBDOMAIN}.${DOMAIN}"

echo -e "${BLUE}🚀 Strapi CMS Setup for Hostinger${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) is installed${NC}"

# Create Strapi project
echo ""
echo -e "${YELLOW}📦 Creating Strapi project...${NC}"
echo "This may take a few minutes..."

# Create Strapi project
npx create-strapi-app@latest my-strapi-cms --quickstart --no-run

cd my-strapi-cms

echo -e "${GREEN}✅ Strapi project created successfully${NC}"

# Create configuration files
echo ""
echo -e "${YELLOW}⚙️  Creating configuration files...${NC}"

# Create .env file
cat > .env << EOF
HOST=0.0.0.0
PORT=1337
APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)
API_TOKEN_SALT=$(openssl rand -base64 32)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
JWT_SECRET=$(openssl rand -base64 32)
PUBLIC_URL=${STRAPI_URL}
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
EOF

echo -e "${GREEN}✅ Environment file created${NC}"

# Create server configuration
mkdir -p config
cat > config/server.js << EOF
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', '${STRAPI_URL}'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
EOF

echo -e "${GREEN}✅ Server configuration created${NC}"

# Create CORS configuration
cat > config/middlewares.js << EOF
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://alta.${DOMAIN}', 'https://idesign.${DOMAIN}'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
EOF

echo -e "${GREEN}✅ CORS configuration created${NC}"

# Create database configuration
cat > config/database.js << EOF
module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});
EOF

echo -e "${GREEN}✅ Database configuration created${NC}"

# Build the project
echo ""
echo -e "${YELLOW}🔨 Building Strapi project...${NC}"
npm run build

echo -e "${GREEN}✅ Strapi project built successfully${NC}"

# Create deployment instructions
echo ""
echo -e "${YELLOW}📋 Creating deployment instructions...${NC}"

cat > DEPLOYMENT_INSTRUCTIONS.md << EOF
# Strapi CMS Deployment Instructions

## 🚀 Quick Deployment Steps

### 1. Create Subdomain in Hostinger
1. Login to Hostinger hPanel
2. Go to "Domains" → "Subdomains"
3. Create subdomain: \`${STRAPI_SUBDOMAIN}\`
4. Document Root: \`/public_html/${STRAPI_SUBDOMAIN}\`

### 2. Enable SSL
1. Go to "Security" → "SSL"
2. Install SSL for \`${STRAPI_URL}\`

### 3. Upload Files
1. Go to "Files" → "File Manager"
2. Navigate to \`public_html/${STRAPI_SUBDOMAIN}/\`
3. Upload all files from this folder

### 4. Start Strapi
1. Go to "Advanced" → "Node.js"
2. Set Node.js version to 18+
3. Set startup file to: \`server.js\`
4. Set Node.js app URL to: \`${STRAPI_URL}\`

### 5. Access Admin Panel
1. Visit: \`${STRAPI_URL}/admin\`
2. Create your admin account
3. Configure content types

## 📁 Content Types to Create

### For Alta Académie
- Courses (title, description, instructor, duration, price, image, category)
- Instructors (name, bio, specialty, image, experience)
- Testimonials (name, role, content, rating, image)

### For iDesign
- Projects (title, description, client, category, images, completion_date)
- Services (title, description, icon, features)
- Portfolio (title, description, images, category)

## 🔗 API Endpoints
- Courses: \`${STRAPI_URL}/api/courses\`
- Instructors: \`${STRAPI_URL}/api/instructors\`
- Projects: \`${STRAPI_URL}/api/projects\`
- Services: \`${STRAPI_URL}/api/services\`

## 🔧 Configuration Files
- Environment: \`.env\`
- Server: \`config/server.js\`
- CORS: \`config/middlewares.js\`
- Database: \`config/database.js\`

## 🆘 Troubleshooting
- Check Node.js version (18+ required)
- Verify SSL certificate is active
- Check CORS configuration
- Review error logs in Hostinger

## 📞 Support
- Strapi Docs: https://docs.strapi.io/
- Hostinger Support: Available 24/7 in hPanel
EOF

echo -e "${GREEN}✅ Deployment instructions created${NC}"

# Create package.json scripts
echo ""
echo -e "${YELLOW}📝 Adding deployment scripts...${NC}"

# Add deployment scripts to package.json
node -e "
const fs = require('fs');
const package = JSON.parse(fs.readFileSync('package.json', 'utf8'));
package.scripts = {
  ...package.scripts,
  'deploy:build': 'npm run build',
  'deploy:start': 'npm start',
  'deploy:dev': 'npm run develop'
};
fs.writeFileSync('package.json', JSON.stringify(package, null, 2));
"

echo -e "${GREEN}✅ Deployment scripts added${NC}"

# Create README
cat > README.md << EOF
# Strapi CMS for ${DOMAIN}

This Strapi CMS instance serves content for:
- **Alta Académie**: \`https://alta.${DOMAIN}\`
- **iDesign**: \`https://idesign.${DOMAIN}\`

## 🚀 Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the project:**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Start the server:**
   \`\`\`bash
   npm start
   \`\`\`

4. **Access admin panel:**
   Visit: \`${STRAPI_URL}/admin\`

## 📁 Project Structure

\`\`\`
my-strapi-cms/
├── config/                 # Configuration files
│   ├── server.js          # Server configuration
│   ├── database.js        # Database configuration
│   └── middlewares.js     # CORS and security
├── src/                   # Source code
│   ├── api/              # API endpoints
│   ├── components/       # Reusable components
│   └── extensions/       # Custom extensions
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
└── README.md            # This file
\`\`\`

## 🔧 Configuration

### Environment Variables
- \`HOST\`: Server host (0.0.0.0)
- \`PORT\`: Server port (1337)
- \`PUBLIC_URL\`: Public URL (${STRAPI_URL})
- \`APP_KEYS\`: Application keys
- \`API_TOKEN_SALT\`: API token salt
- \`ADMIN_JWT_SECRET\`: Admin JWT secret
- \`JWT_SECRET\`: JWT secret

### CORS Configuration
Configured to allow requests from:
- \`https://alta.${DOMAIN}\`
- \`https://idesign.${DOMAIN}\`

## 📊 Content Management

### Content Types
1. **Courses** - For Alta Académie
2. **Instructors** - For Alta Académie
3. **Testimonials** - For Alta Académie
4. **Projects** - For iDesign
5. **Services** - For iDesign
6. **Portfolio** - For iDesign

### API Endpoints
- \`GET /api/courses\` - Get all courses
- \`GET /api/instructors\` - Get all instructors
- \`GET /api/projects\` - Get all projects
- \`GET /api/services\` - Get all services

## 🔒 Security

- CORS enabled for specific domains
- JWT authentication
- API token authentication
- Content Security Policy
- Input validation

## 📈 Performance

- SQLite database (can be upgraded to MySQL/PostgreSQL)
- Image optimization
- Caching support
- CDN ready

## 🚨 Troubleshooting

### Common Issues
1. **CORS Errors**: Check CORS configuration in \`config/middlewares.js\`
2. **Database Issues**: Verify database configuration
3. **Port Issues**: Check if port 1337 is available
4. **SSL Issues**: Verify SSL certificate is active

### Debug Commands
\`\`\`bash
# Check Strapi status
curl ${STRAPI_URL}/admin

# Test API endpoints
curl ${STRAPI_URL}/api/courses

# Check logs
tail -f logs/error.log
\`\`\`

## 📞 Support

- **Strapi Documentation**: https://docs.strapi.io/
- **Strapi Community**: https://forum.strapi.io/
- **Hostinger Support**: Available 24/7 in hPanel

---

**🎉 Strapi CMS is ready for deployment!**
EOF

echo -e "${GREEN}✅ README created${NC}"

echo ""
echo -e "${GREEN}🎉 Strapi CMS setup completed successfully!${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Follow the instructions in DEPLOYMENT_INSTRUCTIONS.md"
echo "2. Upload files to Hostinger"
echo "3. Configure subdomain and SSL"
echo "4. Start Strapi server"
echo "5. Access admin panel at ${STRAPI_URL}/admin"
echo ""
echo -e "${BLUE}📁 Files created:${NC}"
echo "- Strapi project: my-strapi-cms/"
echo "- Configuration files: config/"
echo "- Environment file: .env"
echo "- Deployment guide: DEPLOYMENT_INSTRUCTIONS.md"
echo "- README: README.md"
echo ""
echo -e "${YELLOW}⚠️  Important:${NC}"
echo "- Keep your .env file secure"
echo "- Change default passwords"
echo "- Configure SSL certificates"
echo "- Set up regular backups"
echo ""
echo -e "${GREEN}🚀 Happy coding!${NC}"
