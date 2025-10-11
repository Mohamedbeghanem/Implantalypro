# 🚀 Next.js Deployment Guide for Hostinger

Complete guide to deploy your Next.js medical website to Hostinger hosting.

## 📋 Current Issues Identified

1. **Build Error**: Event handlers cannot be passed to Client Component props during SSR
2. **Wrong Upload Method**: Trying to upload source code instead of built files
3. **Missing Build Process**: Next.js needs to be built before deployment
4. **Server Connection**: FTP connection issues

## 🔧 Fix the Build Error First

### Step 1: Fix the Button Component Issue

The error occurs because the `Button` component with `asChild` prop is trying to pass event handlers during server-side rendering. Let's fix this:

```typescript
// In components/hero-section.tsx, replace the Button components with:

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-up" style={{ animationDelay: '0.3s' }}>
  <Link 
    href={`/${currentLanguage}/appointment`}
    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md"
  >
    {t('hero.cta')}
  </Link>
  <Link 
    href={`/${currentLanguage}/services`}
    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 rounded-md"
  >
    {t('hero.learnMore')}
  </Link>
</div>
```

### Step 2: Alternative - Use Static Export

Since you're deploying to shared hosting, let's configure Next.js for static export:

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true
  }
}

export default nextConfig
```

## 🚀 Deployment Options

### Option 1: Static Export (Recommended for Shared Hosting)

1. **Update next.config.mjs**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

2. **Build the project**:
```bash
npm run build
```

3. **Upload the `out` folder** to your hosting's `public_html` directory

### Option 2: Vercel Deployment (Recommended for Next.js)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Fix build issues"
git push origin main
```

2. **Deploy to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repository
- Deploy automatically

### Option 3: Hostinger with Node.js Support

If your Hostinger plan supports Node.js:

1. **Build the project**:
```bash
npm run build
```

2. **Upload the entire project** to your hosting
3. **Install dependencies** on the server
4. **Start the production server**:
```bash
npm start
```

## 📁 Files to Upload (Static Export Method)

After running `npm run build`, upload these files to `public_html/`:

```
out/
├── _next/
├── en/
├── fr/
├── it/
├── about/
├── alta-academy/
├── appointment/
├── blog/
├── contact/
├── idesign/
├── patient-portal/
├── services/
├── teacher/
├── favicon.ico
├── index.html
└── ... (all other generated files)
```

## 🔧 Step-by-Step Deployment

### Step 1: Fix Build Issues

1. **Update next.config.mjs**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

2. **Build the project**:
```bash
npm run build
```

### Step 2: Prepare for Upload

1. **Check the `out` folder** - this contains your static files
2. **Test locally**:
```bash
npx serve out
```

### Step 3: Upload to Hostinger

1. **Connect to FTP**:
   - Host: `89.116.147.138`
   - Username: `u514882008.implantaly`
   - Password: (your password)
   - Port: `21`

2. **Navigate to the correct directory**:
   - Go to `/public_html/` (not `/my-medical-site/public`)

3. **Upload the `out` folder contents**:
   - Select all files from the `out` folder
   - Upload to `public_html/`

### Step 4: Configure Domain

1. **In Hostinger hPanel**:
   - Go to "Domains" → "Manage"
   - Point your domain to the correct directory
   - Enable SSL certificate

## 🚨 Troubleshooting

### If Build Still Fails

1. **Temporarily disable problematic components**:
```typescript
// Comment out components causing issues
// import { HeroSection } from "@/components/hero-section"
```

2. **Use a simpler page for testing**:
```typescript
// app/[locale]/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Medical Website</h1>
    </div>
  )
}
```

### If Upload Fails

1. **Check file permissions**: 644 for files, 755 for folders
2. **Check disk space** on hosting
3. **Try uploading in smaller batches**
4. **Use File Manager instead of FTP**

### If Website Doesn't Load

1. **Check DNS propagation** (wait 24 hours)
2. **Verify file paths** are correct
3. **Check for .htaccess conflicts**
4. **Clear browser cache**

## 📊 Alternative: Simple Static Site

If Next.js continues to cause issues, consider creating a simple static version:

1. **Create a simple HTML version** of your main pages
2. **Use vanilla JavaScript** for interactivity
3. **Upload directly** to hosting

## 🎯 Quick Fix Commands

```bash
# Fix build issues
npm run build

# Test locally
npx serve out

# Check build output
ls out/

# Upload to hosting (using FileZilla)
# Upload contents of 'out' folder to public_html/
```

## 📞 Next Steps

1. **Fix the build error** first
2. **Build the project** successfully
3. **Upload the `out` folder** contents
4. **Test the website** thoroughly
5. **Configure SSL** and domain settings

---

**🎉 Your Next.js medical website will be live once these steps are completed!**
