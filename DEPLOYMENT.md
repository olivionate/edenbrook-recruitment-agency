# Deployment Guide - SPA Routing Configuration

This React application uses client-side routing (React Router). When deployed to production, you need to configure your hosting platform to handle SPA routing properly to avoid 404 errors on page refresh.

## ⚠️ CRITICAL: The Problem

When you access `/terms-of-service` directly or refresh the page:
- **Development**: Vite dev server handles it correctly ✅
- **Production without config**: Server looks for `/terms-of-service/index.html` and returns 404 ❌
- **Production with config**: Server serves `index.html` for all routes, React Router handles routing ✅

**This is THE most common deployment issue for React SPAs. You MUST configure your web server correctly.**

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

### Nginx (Custom Servers, VPS, DigitalOcean, Linode, etc.)
Use the `public/nginx.conf` file (included) or add to your existing nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Full nginx.conf example** (see `public/nginx.conf` for complete configuration with security headers and caching)

### Windows IIS
Use the `public/web.config` file (included):
```xml
<rewrite>
  <rules>
    <rule name="React Routes" stopProcessing="true">
      <match url=".*" />
      <conditions logicalGrouping="MatchAll">
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
      </conditions>
      <action type="Rewrite" url="/" />
    </rule>
  </rules>
</rewrite>
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

## 🔧 Troubleshooting Custom Domain Deployments

### Still getting 404 errors on your custom domain?

**Step 1: Identify Your Web Server**
Run this command to find out what web server you're using:
```bash
curl -I https://yourdomain.com
```
Look for the `Server:` header (e.g., `nginx`, `Apache`, `Microsoft-IIS`, `cloudflare`)

**Step 2: Apply the Correct Configuration**

| Web Server | Config File to Use | Location |
|------------|-------------------|----------|
| **Nginx** | `nginx.conf` | `/etc/nginx/sites-available/` |
| **Apache** | `.htaccess` | Root of your web directory |
| **IIS (Windows)** | `web.config` | Root of your web directory |
| **cPanel** | `.htaccess` | public_html directory |
| **Netlify** | `netlify.toml` or `_redirects` | Auto-detected from `public/` |
| **Vercel** | `vercel.json` | Auto-detected from `public/` |

**Step 3: Verify Configuration is Active**

1. **Check build output**: Ensure `index.html` is in the root of your build directory (`dist/`)
2. **Verify config file deployed**: Check if your config file (`.htaccess`, `web.config`, etc.) is in the deployed directory
3. **Test specific routes**: Try accessing `https://yourdomain.com/about` directly
4. **Check server logs**: Look for 404 errors in your web server error logs
5. **Clear all caches**: 
   - Browser cache (Ctrl+Shift+Delete)
   - CDN cache (if using Cloudflare, purge cache)
   - Server cache (restart web server)

**Step 4: Common Platform-Specific Issues**

**cPanel/Shared Hosting:**
- Ensure `.htaccess` is in your `public_html` folder
- Check if mod_rewrite is enabled (contact hosting support if not)
- Build command: `npm run build`
- Upload contents of `dist/` folder to `public_html`

**VPS/Dedicated Server (Nginx):**
```bash
# Copy nginx.conf to sites-available
sudo cp public/nginx.conf /etc/nginx/sites-available/yourdomain.com

# Create symlink to sites-enabled
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

**VPS/Dedicated Server (Apache):**
```bash
# Enable mod_rewrite
sudo a2enmod rewrite

# Restart Apache
sudo systemctl restart apache2
```

**Cloudflare:**
- If using Cloudflare, ensure SSL/TLS mode is set to "Full" or "Full (strict)"
- Purge Cloudflare cache after deployment
- Check Page Rules don't interfere with routing

### Testing locally after build

```bash
# Build the app
npm run build

# Serve the build folder with SPA support
npx serve -s dist
```

## 📋 Quick Deployment Checklist

Before deploying to your custom domain:

- [ ] Build the app: `npm run build`
- [ ] Verify `dist/index.html` exists
- [ ] Identify your web server type
- [ ] Copy the appropriate config file to your server
- [ ] Upload `dist/` contents to your web root
- [ ] Test a non-root URL (e.g., `/about`)
- [ ] Test page refresh on a non-root URL
- [ ] Clear all caches if issues persist

## 📦 Current Setup

✅ `public/_redirects` - For Lovable/Netlify
✅ `public/netlify.toml` - Alternative Netlify config
✅ `public/vercel.json` - For Vercel
✅ `public/.htaccess` - For Apache/cPanel servers
✅ `public/nginx.conf` - For Nginx servers
✅ `public/web.config` - For Windows IIS servers
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
