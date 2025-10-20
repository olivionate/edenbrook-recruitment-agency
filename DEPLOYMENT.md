# Deployment Guide - SPA Routing Configuration

This React application uses client-side routing (React Router). When deployed to production, you need to configure your hosting platform to handle SPA routing properly to avoid 404 errors on page refresh.

## The Problem

When you access `/terms-of-service` directly or refresh the page:
- **Development**: Vite dev server handles it correctly ✅
- **Production without config**: Server looks for `/terms-of-service/index.html` and returns 404 ❌
- **Production with config**: Server serves `index.html` for all routes, React Router handles routing ✅

## Platform-Specific Configurations

### Lovable Hosting (Default)
Already configured! The `public/_redirects` file handles this:
```
/* /index.html 200
```

### Netlify
Use the `public/netlify.toml` file (included):
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel
Use the `public/vercel.json` file (included):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Apache (Shared Hosting)
Use the `public/.htaccess` file (included):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

### Nginx
Add to your nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Firebase Hosting
Add to `firebase.json`:
```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### AWS S3 + CloudFront
1. In S3 bucket properties, set Error Document to `index.html`
2. In CloudFront, create custom error responses:
   - 403 → /index.html (200)
   - 404 → /index.html (200)

## Troubleshooting

### Still getting 404 errors?

1. **Check build output**: Ensure `index.html` is in the root of your build directory
2. **Verify config file location**: All config files should be in the `public/` folder
3. **Clear cache**: Clear browser cache and CDN cache
4. **Check base path**: Ensure `vite.config.ts` has `base: "/"` 
5. **Deployment platform**: Make sure you're using the correct config file for your platform

### Testing locally after build

```bash
# Build the app
npm run build

# Serve the build folder with SPA support
npx serve -s dist
```

## Current Setup

✅ `public/_redirects` - For Lovable/Netlify
✅ `public/netlify.toml` - Alternative Netlify config
✅ `public/vercel.json` - For Vercel
✅ `public/.htaccess` - For Apache servers
✅ `vite.config.ts` - Proper base path configuration

All routes in the application:
- `/` - Home
- `/about` - About Us
- `/global-reach` - Global Reach
- `/contact` - Contact
- `/services/local-recruitment` - Local Recruitment
- `/services/headhunting` - Headhunting
- `/services/training` - Training
- `/services/consultancy` - Consultancy
- `/services/expatriate` - Expatriate Services
- `/services/payroll` - Payroll
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/cookie-policy` - Cookie Policy

All these routes should work correctly on refresh after deployment with the proper configuration.
