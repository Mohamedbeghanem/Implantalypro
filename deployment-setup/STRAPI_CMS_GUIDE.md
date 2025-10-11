# 🚀 Strapi CMS Integration Guide

Complete guide to integrate Strapi CMS with your Hostinger subdomains for dynamic content management.

## 📋 What is Strapi CMS?

Strapi is a **headless CMS** that provides:
- **Content Management**: Easy-to-use admin panel
- **API-First**: REST and GraphQL APIs out of the box
- **Customizable**: Build your own content types
- **Multi-language**: Built-in internationalization
- **User Management**: Role-based access control
- **Media Management**: File upload and organization

## 🎯 Integration Options

### Option 1: Separate Strapi Instance (Recommended)
- **Strapi**: `api.yourdomain.com` or `cms.yourdomain.com`
- **Alta Académie**: `alta.yourdomain.com` (consumes Strapi API)
- **iDesign**: `idesign.yourdomain.com` (consumes Strapi API)

### Option 2: Subdomain-Specific Strapi
- **Alta Strapi**: `alta-api.yourdomain.com`
- **iDesign Strapi**: `idesign-api.yourdomain.com`

### Option 3: Single Strapi with Multi-tenancy
- One Strapi instance serving both subdomains
- Content separated by collections/roles

## 🚀 Quick Setup: Option 1 (Recommended)

### Step 1: Create Strapi Subdomain

1. **In Hostinger hPanel:**
   - Go to "Domains" → "Subdomains"
   - Create subdomain: `api` (or `cms`)
   - Document Root: `/public_html/api`

2. **Enable SSL:**
   - Go to "Security" → "SSL"
   - Install SSL for `api.yourdomain.com`

### Step 2: Deploy Strapi

#### Method A: Using Hostinger's Node.js Support

1. **Check Node.js Support:**
   - In hPanel, go to "Advanced" → "Node.js"
   - Verify Node.js version (Strapi needs 18+)

2. **Upload Strapi Project:**
   ```bash
   # On your local machine
   npx create-strapi-app@latest my-strapi-cms --quickstart
   cd my-strapi-cms
   npm run build
   ```

3. **Upload to Hostinger:**
   - Use File Manager or FTP
   - Upload entire project to `/public_html/api/`

4. **Configure Strapi:**
   ```javascript
   // config/server.js
   module.exports = ({ env }) => ({
     host: env('HOST', '0.0.0.0'),
     port: env.int('PORT', 1337),
     url: env('PUBLIC_URL', 'https://api.yourdomain.com'),
     app: {
       keys: env.array('APP_KEYS'),
     },
   });
   ```

#### Method B: Using VPS/Cloud Hosting

1. **Deploy to VPS:**
   ```bash
   # SSH into your VPS
   git clone your-strapi-repo
   cd your-strapi-repo
   npm install
   npm run build
   npm start
   ```

2. **Configure Nginx Proxy:**
   ```nginx
   # Point api.yourdomain.com to your VPS
   server {
       listen 80;
       server_name api.yourdomain.com;
       location / {
           proxy_pass http://your-vps-ip:1337;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

### Step 3: Configure Strapi for Multi-Site

1. **Create Content Types:**

#### For Alta Académie
```javascript
// Content Types for Alta Académie
- Courses
  - title (Text)
  - description (Rich Text)
  - instructor (Text)
  - duration (Number)
  - price (Number)
  - image (Media)
  - category (Enumeration: ['Dental', 'Orthodontics', 'Surgery'])

- Instructors
  - name (Text)
  - bio (Rich Text)
  - specialty (Text)
  - image (Media)
  - experience (Number)

- Testimonials
  - name (Text)
  - role (Text)
  - content (Rich Text)
  - rating (Number)
  - image (Media)
```

#### For iDesign
```javascript
// Content Types for iDesign
- Projects
  - title (Text)
  - description (Rich Text)
  - client (Text)
  - category (Enumeration: ['Clinic Design', 'Digital Workflow', 'Patient Experience'])
  - images (Media - Multiple)
  - completion_date (Date)

- Services
  - title (Text)
  - description (Rich Text)
  - icon (Text)
  - features (JSON)

- Portfolio
  - title (Text)
  - description (Rich Text)
  - images (Media - Multiple)
  - category (Enumeration: ['Modern', 'Traditional', 'Luxury'])
```

2. **Set Up Permissions:**
   - Go to Settings → Users & Permissions Plugin → Roles
   - Create roles: `alta-public`, `idesign-public`
   - Configure public access to specific content types

3. **Configure API Endpoints:**
   ```javascript
   // Example API endpoints
   GET /api/courses?filters[category][$eq]=Dental
   GET /api/instructors
   GET /api/projects?filters[category][$eq]=Clinic Design
   GET /api/services
   ```

### Step 4: Update Frontend to Use Strapi

#### Update Alta Académie (`public_html/alta/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta Académie - Advanced Dental Education</title>
    <style>
        /* Your existing styles */
    </style>
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1 id="hero-title">Loading...</h1>
                <p id="hero-description">Loading...</p>
                <a href="#courses" class="cta-button">Explore Courses</a>
            </div>
        </section>

        <section class="courses" id="courses">
            <div class="container">
                <h2>Our Courses</h2>
                <div id="courses-grid" class="courses-grid">
                    <!-- Courses will be loaded here -->
                </div>
            </div>
        </section>

        <section class="instructors">
            <div class="container">
                <h2>Expert Instructors</h2>
                <div id="instructors-grid" class="instructors-grid">
                    <!-- Instructors will be loaded here -->
                </div>
            </div>
        </section>
    </main>

    <script>
        // Strapi API Configuration
        const STRAPI_URL = 'https://api.yourdomain.com';
        const STRAPI_TOKEN = 'your-public-api-token';

        // Fetch and display courses
        async function loadCourses() {
            try {
                const response = await fetch(`${STRAPI_URL}/api/courses?populate=*`);
                const data = await response.json();
                
                const coursesGrid = document.getElementById('courses-grid');
                coursesGrid.innerHTML = data.data.map(course => `
                    <div class="course-card">
                        <img src="${STRAPI_URL}${course.attributes.image.data.attributes.url}" alt="${course.attributes.title}">
                        <h3>${course.attributes.title}</h3>
                        <p>${course.attributes.description}</p>
                        <div class="course-meta">
                            <span>Instructor: ${course.attributes.instructor}</span>
                            <span>Duration: ${course.attributes.duration} hours</span>
                            <span>Price: $${course.attributes.price}</span>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading courses:', error);
            }
        }

        // Fetch and display instructors
        async function loadInstructors() {
            try {
                const response = await fetch(`${STRAPI_URL}/api/instructors?populate=*`);
                const data = await response.json();
                
                const instructorsGrid = document.getElementById('instructors-grid');
                instructorsGrid.innerHTML = data.data.map(instructor => `
                    <div class="instructor-card">
                        <img src="${STRAPI_URL}${instructor.attributes.image.data.attributes.url}" alt="${instructor.attributes.name}">
                        <h3>${instructor.attributes.name}</h3>
                        <p class="specialty">${instructor.attributes.specialty}</p>
                        <p>${instructor.attributes.bio}</p>
                        <span class="experience">${instructor.attributes.experience} years experience</span>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading instructors:', error);
            }
        }

        // Load content when page loads
        document.addEventListener('DOMContentLoaded', () => {
            loadCourses();
            loadInstructors();
        });
    </script>
</body>
</html>
```

#### Update iDesign (`public_html/idesign/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iDesign - Innovative Dental Design Solutions</title>
    <style>
        /* Your existing styles */
    </style>
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1 id="hero-title">Loading...</h1>
                <p id="hero-description">Loading...</p>
                <a href="#services" class="cta-button">Explore Services</a>
            </div>
        </section>

        <section class="services" id="services">
            <div class="container">
                <h2>Our Services</h2>
                <div id="services-grid" class="services-grid">
                    <!-- Services will be loaded here -->
                </div>
            </div>
        </section>

        <section class="portfolio">
            <div class="container">
                <h2>Recent Projects</h2>
                <div id="portfolio-grid" class="portfolio-grid">
                    <!-- Projects will be loaded here -->
                </div>
            </div>
        </section>
    </main>

    <script>
        // Strapi API Configuration
        const STRAPI_URL = 'https://api.yourdomain.com';
        const STRAPI_TOKEN = 'your-public-api-token';

        // Fetch and display services
        async function loadServices() {
            try {
                const response = await fetch(`${STRAPI_URL}/api/services?populate=*`);
                const data = await response.json();
                
                const servicesGrid = document.getElementById('services-grid');
                servicesGrid.innerHTML = data.data.map(service => `
                    <div class="service-card">
                        <div class="service-icon">${service.attributes.icon}</div>
                        <h3>${service.attributes.title}</h3>
                        <p>${service.attributes.description}</p>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading services:', error);
            }
        }

        // Fetch and display projects
        async function loadProjects() {
            try {
                const response = await fetch(`${STRAPI_URL}/api/projects?populate=*&sort=completion_date:desc`);
                const data = await response.json();
                
                const portfolioGrid = document.getElementById('portfolio-grid');
                portfolioGrid.innerHTML = data.data.map(project => `
                    <div class="portfolio-item">
                        <div class="portfolio-image">
                            <img src="${STRAPI_URL}${project.attributes.images.data[0].attributes.url}" alt="${project.attributes.title}">
                        </div>
                        <div class="portfolio-content">
                            <h3>${project.attributes.title}</h3>
                            <p>${project.attributes.description}</p>
                            <span class="client">Client: ${project.attributes.client}</span>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        }

        // Load content when page loads
        document.addEventListener('DOMContentLoaded', () => {
            loadServices();
            loadProjects();
        });
    </script>
</body>
</html>
```

## 🔧 Advanced Configuration

### Environment Variables

Create `.env` file in your Strapi project:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
PUBLIC_URL=https://api.yourdomain.com
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

### Database Configuration

#### SQLite (Development)
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});
```

#### MySQL (Production)
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

### CORS Configuration

```javascript
// config/middlewares.js
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
      origin: ['https://alta.yourdomain.com', 'https://idesign.yourdomain.com'],
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
```

## 📊 Content Management Workflow

### 1. Admin Panel Access
- Visit: `https://api.yourdomain.com/admin`
- Create admin account
- Configure content types

### 2. Content Creation
1. **Courses** (for Alta Académie)
   - Add course details
   - Upload course images
   - Set pricing and duration

2. **Projects** (for iDesign)
   - Add project details
   - Upload project images
   - Set categories and completion dates

### 3. Media Management
- Upload images through Strapi admin
- Organize media by categories
- Optimize images automatically

### 4. API Management
- Generate API tokens
- Configure permissions
- Monitor API usage

## 🔒 Security Best Practices

### 1. API Security
```javascript
// Generate secure API tokens
// Use environment variables
// Implement rate limiting
// Enable CORS properly
```

### 2. Content Security
```javascript
// Validate input data
// Sanitize content
// Use proper permissions
// Regular backups
```

### 3. Admin Security
```javascript
// Strong passwords
// Two-factor authentication
// Regular security updates
// Monitor access logs
```

## 📈 Performance Optimization

### 1. Caching
```javascript
// Implement Redis caching
// Use CDN for media files
// Cache API responses
// Optimize database queries
```

### 2. Image Optimization
```javascript
// Use WebP format
// Implement lazy loading
// Responsive images
// Compression
```

### 3. API Optimization
```javascript
// Pagination
// Filtering
// Sorting
// Field selection
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check CORS configuration
   - Verify origin URLs
   - Clear browser cache

2. **API Connection Issues**
   - Check Strapi server status
   - Verify API endpoints
   - Check network connectivity

3. **Content Not Loading**
   - Verify API permissions
   - Check content publication status
   - Review API responses

### Debug Commands

```bash
# Check Strapi status
curl https://api.yourdomain.com/admin

# Test API endpoints
curl https://api.yourdomain.com/api/courses

# Check logs
tail -f /path/to/strapi/logs/error.log
```

## 📞 Support Resources

### Strapi Documentation
- [Official Docs](https://docs.strapi.io/)
- [API Reference](https://docs.strapi.io/dev-docs/api/rest)
- [Admin Panel Guide](https://docs.strapi.io/user-docs/intro)

### Community
- [Strapi Forum](https://forum.strapi.io/)
- [GitHub Issues](https://github.com/strapi/strapi/issues)
- [Discord Community](https://discord.strapi.io/)

---

## 🎉 Success Checklist

- [ ] Strapi subdomain created (`api.yourdomain.com`)
- [ ] Strapi deployed and accessible
- [ ] Content types configured
- [ ] API permissions set up
- [ ] Frontend updated to use Strapi API
- [ ] Content added through admin panel
- [ ] SSL certificates installed
- [ ] CORS configured properly
- [ ] Performance optimizations applied
- [ ] Security measures implemented

**🎉 Your Strapi CMS integration is complete!**

Your websites now have:
- ✅ Dynamic content management
- ✅ Easy content updates
- ✅ Media management
- ✅ API-first architecture
- ✅ Multi-site support
- ✅ Professional admin interface
