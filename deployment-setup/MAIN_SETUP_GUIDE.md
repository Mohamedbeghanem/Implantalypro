# 🚀 Complete Setup Guide: Hostinger 50-Website Plan

Complete guide to set up your subdomains using your friend's Hostinger 50-website subscription for testing and production preparation.

## 📋 What You Have

### Your Hostinger Plan
- **Plan Type**: Hostinger 50 Websites Plan
- **Capacity**: Up to 50 websites
- **Perfect for**: Testing multiple subdomains
- **Cost**: Free (using friend's subscription)

### What You Can Do
- ✅ Create multiple subdomains
- ✅ Test different configurations
- ✅ Deploy all three websites
- ✅ Experiment with different setups
- ✅ Learn the hosting environment

## 🎯 Perfect Setup for Testing

### Recommended Structure
```
Hostinger 50 Websites Plan:
├── Website 1: alta.yourdomain.com
├── Website 2: idesign.yourdomain.com
└── Website 3: api.yourdomain.com (or test-api.yourdomain.com)
```

### Benefits of This Setup
- ✅ **Free testing** environment
- ✅ **Real hosting** experience
- ✅ **Multiple websites** support
- ✅ **Professional tools** (cPanel, SSL, etc.)
- ✅ **Easy management** through Hostinger dashboard

## 🚀 Quick Setup (5 Minutes)

### Step 1: Access Hostinger (1 minute)
```bash
1. Get login credentials from your friend
2. Login to Hostinger hPanel
3. Go to "Websites" → "Manage"
```

### Step 2: Create 3 Websites (2 minutes)
```bash
# Create Alta Académie
1. Click "Create Website"
2. Domain: alta.yourdomain.com
3. Choose "Empty site"
4. Click "Create"

# Create iDesign
1. Click "Create Website"
2. Domain: idesign.yourdomain.com
3. Choose "Empty site"
4. Click "Create"

# Create API
1. Click "Create Website"
2. Domain: api.yourdomain.com
3. Choose "Empty site"
4. Click "Create"
```

### Step 3: Deploy Files (2 minutes)
```bash
# Option A: Using FileZilla (Recommended)
1. Get FTP credentials from cPanel
2. Connect with FileZilla
3. Upload files to public_html/
4. Set file permissions

# Option B: Using File Manager
1. Click "Manage" → "cPanel"
2. Go to "File Manager"
3. Navigate to public_html/
4. Upload the specific files
5. Set file permissions: 644 for files, 755 for folders
```

## 📁 Files to Upload

### Alta Académie (`alta.yourdomain.com`)
```
Upload to public_html/:
├── index.html (from deployment-setup/sample-files/alta/index.html)
└── .htaccess (from deployment-setup/hostinger-files/alta/.htaccess)
```

### iDesign (`idesign.yourdomain.com`)
```
Upload to public_html/:
├── index.html (from deployment-setup/sample-files/idesign/index.html)
└── .htaccess (from deployment-setup/hostinger-files/idesign/.htaccess)
```

### API (`api.yourdomain.com`)
```
Upload to public_html/:
├── index.html (create a simple test page)
└── .htaccess (from deployment-setup/hostinger-files/alta/.htaccess)
```

## 📋 Exact Upload Steps

### For Alta Académie:
1. **Upload `index.html`**: Copy `deployment-setup/sample-files/alta/index.html` to `public_html/index.html`
2. **Upload `.htaccess`**: Copy `deployment-setup/hostinger-files/alta/.htaccess` to `public_html/.htaccess`

### For iDesign:
1. **Upload `index.html`**: Copy `deployment-setup/sample-files/idesign/index.html` to `public_html/index.html`
2. **Upload `.htaccess`**: Copy `deployment-setup/hostinger-files/idesign/.htaccess` to `public_html/.htaccess`

### For API (Simple Test):
1. **Create `index.html`**: Create a simple test page or copy from Alta Académie
2. **Upload `.htaccess`**: Copy `deployment-setup/hostinger-files/alta/.htaccess` to `public_html/.htaccess`

## 🚀 FileZilla Upload Guide

### Step 1: Get FTP Credentials
```bash
# For each website:
1. Go to "Websites" → "Manage"
2. Click "Manage" → "cPanel"
3. Go to "Files" → "FTP Accounts"
4. Note down:
   - FTP Host: yourdomain.com
   - Username: (from FTP account)
   - Password: (from FTP account)
   - Port: 21
```

### Step 2: Connect with FileZilla
```bash
# In FileZilla:
1. Host: yourdomain.com
2. Username: (your FTP username)
3. Password: (your FTP password)
4. Port: 21
5. Click "Quickconnect"
```

### Step 3: Navigate to Website Directory
```bash
# In FileZilla right panel (Remote site):
1. Navigate to: /public_html/
2. This is where you'll upload your files
```

### Step 4: Upload Files
```bash
# For each website:
1. In left panel (Local site): Navigate to your local files
2. Select the files to upload:
   - index.html
   - .htaccess
3. Drag and drop to right panel (Remote site)
4. Wait for upload to complete
```

### Step 5: Set File Permissions
```bash
# In FileZilla:
1. Right-click on uploaded file
2. Select "File permissions"
3. Set permissions:
   - Files: 644
   - Folders: 755
4. Click "OK"
```

## 🔧 Configuration

### Enable SSL (1 minute)
```bash
# For each website:
1. Go to "Websites" → "Manage"
2. Select website
3. Click "Manage" → "SSL"
4. Click "Install SSL Certificate"
5. Choose "Let's Encrypt"
```

### Test Your Sites
```bash
# Visit your websites:
1. https://alta.yourdomain.com
2. https://idesign.yourdomain.com
3. https://api.yourdomain.com
```

## 🎯 What You'll Have

### After Setup
- ✅ **3 working websites** with SSL
- ✅ **Professional hosting** environment
- ✅ **Real domain names** for testing
- ✅ **cPanel access** for each site
- ✅ **Free testing** environment

### Testing Checklist
- [ ] All websites load
- [ ] SSL certificates working
- [ ] Files uploaded correctly
- [ ] No 404 errors
- [ ] Mobile responsive

## 🚨 Troubleshooting

### If Websites Don't Load
```bash
1. Check DNS propagation (wait 24 hours)
2. Verify domain names are correct
3. Check file permissions (644/755)
4. Clear browser cache
```

### If SSL Doesn't Work
```bash
1. Wait 5-10 minutes after installation
2. Clear browser cache
3. Try incognito mode
4. Check SSL status in hPanel
```

### If Files Don't Upload
```bash
1. Check file size limits
2. Verify file permissions
3. Try FTP instead of File Manager
4. Check disk space
```

## 📊 Management

### Monitor Your Sites
```bash
# In hPanel Dashboard:
1. Go to "Websites" → "Manage"
2. See all your sites listed
3. Click "Manage" for each site
4. Check resource usage
5. Monitor performance
```

### Backup Your Work
```bash
# Create backups:
1. Go to "Websites" → "Manage"
2. Select website
3. Click "Manage" → "Backups"
4. Create manual backup
5. Download backup file
```

## 🎉 Success!

### You Now Have:
- ✅ **3 professional websites** ready for testing
- ✅ **SSL certificates** for security
- ✅ **Real hosting environment** to learn from
- ✅ **Perfect foundation** for production

### Next Steps:
1. **Test everything** thoroughly
2. **Document** what works
3. **Plan** production deployment
4. **Optimize** performance
5. **Prepare** for scaling

---

**⚡ Your testing environment is ready in under 5 minutes!**

**Start testing and learning with your free Hostinger setup!** 🚀
