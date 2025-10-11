import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  // output: 'export',
  // trailingSlash: true,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // ESLint configuration
  eslint: {
    // Don't ignore during builds - let's fix the issues
    ignoreDuringBuilds: false,
  },
  
  // TypeScript configuration
  typescript: {
    // Don't ignore build errors - let's fix them
    ignoreBuildErrors: false,
  },
  
  // Image optimization for Vercel
  images: {
    // Enable image optimization
    unoptimized: false,
    // Configure domains if needed
    domains: [],
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Optimize for production
  compress: true,
  
  // Reduce memory usage
  poweredByHeader: false,
}

export default withNextIntl(nextConfig)
