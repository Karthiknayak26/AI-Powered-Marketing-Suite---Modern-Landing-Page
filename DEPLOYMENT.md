# 🚀 Deployment Guide - AI Marketing Suite

## Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Marketing Suite Landing Page"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-marketing-suite.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Project**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - No environment variables required for this project
   - Add any API keys or configuration if you extend the project

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your project
   - Your site will be live at: `https://your-project-name.vercel.app`

### Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Alternative Deployment Options

### Deploy to Netlify

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `.next` folder to deploy
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && gh-pages -d out"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Environment Setup

### Production Build
```bash
npm run build
npm start
```

### Static Export (for static hosting)
```bash
npm run build
npm run export
```

## Performance Optimization

### Before Deployment
1. **Optimize Images**
   - Use Next.js Image component
   - Compress images to WebP format
   - Implement lazy loading

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

3. **Lighthouse Audit**
   - Run Lighthouse audit locally
   - Optimize Core Web Vitals
   - Ensure accessibility compliance

### Post-Deployment
1. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Track user experience metrics

2. **SEO Optimization**
   - Add meta tags and Open Graph
   - Implement structured data
   - Optimize for search engines

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Clear `.next` cache: `rm -rf .next`
   - Verify all dependencies are installed

2. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for missing CSS imports
   - Verify dark mode classes are applied

3. **Animation Problems**
   - Ensure Framer Motion is installed
   - Check for hydration mismatches
   - Verify animation dependencies

### Performance Issues
1. **Large Bundle Size**
   - Use dynamic imports for heavy components
   - Implement code splitting
   - Optimize images and assets

2. **Slow Loading**
   - Enable Next.js optimizations
   - Implement proper caching
   - Use CDN for static assets

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update Next.js and React versions

### Monitoring
- Set up error tracking (Sentry)
- Monitor performance metrics
- Track user analytics

---

**Your AI Marketing Suite is now ready for production! 🎉**