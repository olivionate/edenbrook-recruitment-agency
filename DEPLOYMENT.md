# Deployment Guide - Custom Domain SPA Routing Fix

## ⚠️ CRITICAL: Why You're Getting 404 Errors

This React application uses **client-side routing** (React Router). This means:

1. **In Development (Lovable)**: The dev server automatically handles all routes ✅
2. **On Custom Domain WITHOUT proper config**: Your web server looks for actual files at `/about`, `/services/training`, etc., can't find them, and returns 404 ❌
3. **On Custom Domain WITH proper config**: Your web server serves `index.html` for ALL routes, React Router takes over and displays the correct page ✅

**Your custom domain deployment REQUIRES web server configuration. The files are ready - you just need to apply them.**

## 🚨 You're Seeing 404s Because...

Your web server doesn't know about React Router. When someone visits `yourdomain.com/about`:
- ✅ **React Router knows this route** (it's defined in the app)
- ❌ **Your web server doesn't** (it's looking for a file called `/about/index.html` that doesn't exist)

**Solution**: Configure your web server to serve `index.html` for all routes, letting React Router handle the routing.

---

## 🔍 STEP 1: Identify Your Web Server

First, find out what web server your domain is using. Run this command in your terminal:

```bash
curl -I https://yourdomain.com
```

Look for the `Server:` header in the response. Common results:
- `nginx` → Use nginx.conf
- `Apache` → Use .htaccess  
- `Microsoft-IIS` → Use web.config
- `cloudflare` → Likely Apache or Nginx behind Cloudflare
- `LiteSpeed` → Use .htaccess (compatible with Apache)

**Can't run curl?** Check your hosting provider's dashboard or documentation - they'll tell you which web server they use.

---

## 📋 STEP 2: Apply the Configuration

### 🟢 For cPanel / Shared Hosting (Most Common)

**Your host probably uses Apache.** This is the most common setup for shared hosting.

1. **Build your app locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web root:
   - Usually `public_html/` or `www/` or `htdocs/`
   - **Upload everything INSIDE the `dist` folder**, not the dist folder itself
   - Your files should be at: `public_html/index.html`, `public_html/assets/`, etc.

3. **The `.htaccess` file is already in `dist`** after building (from `public/.htaccess`)
   - Verify it's uploaded to your web root: `public_html/.htaccess`
   - If you can't see it, show hidden files in your FTP client

4. **If you still get 404s**, verify mod_rewrite is enabled:
   - Contact your hosting support and ask: "Is mod_rewrite enabled for my account?"
   - Most shared hosts have it enabled by default

**✅ Test**: Visit `yourdomain.com/about` - should show your About page, not 404

---

### 🟦 For VPS / Cloud Server with Nginx

If you're using DigitalOcean, Linode, AWS EC2, or any VPS with Nginx:

1. **Build your app**:
   ```bash
   npm run build
   ```

2. **Upload `dist` contents** to your web root (usually `/var/www/html/` or `/usr/share/nginx/html/`)

3. **Configure Nginx**:
   ```bash
   # Edit your site config (replace yourdomain.com with your actual domain)
   sudo nano /etc/nginx/sites-available/yourdomain.com
   ```

4. **Add this location block** (or modify existing one):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       root /var/www/html;
       index index.html;

       # SPA routing - THIS IS THE CRITICAL PART
       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

5. **Test and reload Nginx**:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

**✅ Test**: Visit `yourdomain.com/services/training` - should work without 404

---

### 🟨 For VPS / Cloud Server with Apache

If you're using Apache on a VPS:

1. **Build your app**:
   ```bash
   npm run build
   ```

2. **Upload `dist` contents** to `/var/www/html/` (or your configured web root)

3. **The `.htaccess` file is included** in the build (from `public/.htaccess`)

4. **Enable mod_rewrite** (if not already enabled):
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

5. **Ensure Apache allows .htaccess overrides**. Edit your site config:
   ```bash
   sudo nano /etc/apache2/sites-available/000-default.conf
   ```
   
   Make sure you have:
   ```apache
   <Directory /var/www/html>
       Options Indexes FollowSymLinks
       AllowOverride All
       Require all granted
   </Directory>
   ```

6. **Restart Apache**:
   ```bash
   sudo systemctl restart apache2
   ```

**✅ Test**: Visit `yourdomain.com/contact` - should display properly

---

### 🟣 For Windows IIS

1. **Build your app**: `npm run build`

2. **Copy `dist` contents** to your IIS web root (usually `C:\inetpub\wwwroot\`)

3. **The `web.config` file is included** in the build (from `public/web.config`)

4. **Install URL Rewrite module** if not installed:
   - Download from: https://www.iis.net/downloads/microsoft/url-rewrite
   - Install it on your server

5. **Restart IIS**:
   - Open IIS Manager → Select your site → Restart

**✅ Test**: Navigate to any route and refresh

---

### 🎯 For Netlify / Vercel (Easy Auto-Config)

**Good news**: These platforms auto-detect the config files!

**Netlify**:
- Deploy via Git or drag-and-drop
- The `_redirects` or `netlify.toml` file is automatically detected
- No additional configuration needed ✅

**Vercel**:
- Deploy via Git or Vercel CLI
- The `vercel.json` file is automatically detected  
- No additional configuration needed ✅

---

### ☁️ For Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. The `_redirects` file will be automatically used ✅

---

### 🔥 For Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`

2. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```

3. When prompted:
   - Public directory: `dist`
   - Configure as single-page app: **YES**
   - Set up automatic builds: (your choice)

4. This creates `firebase.json` with:
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

5. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### ☁️ For AWS S3 + CloudFront

1. **Build**: `npm run build`

2. **Upload to S3**: Upload `dist` contents to your S3 bucket

3. **S3 Bucket Settings**:
   - Properties → Static website hosting → Enable
   - Index document: `index.html`
   - Error document: `index.html` ⚠️ (Critical for SPA routing)

4. **CloudFront Settings** (if using):
   - Create custom error responses:
     - 403 error → Response page: `/index.html`, HTTP code: 200
     - 404 error → Response page: `/index.html`, HTTP code: 200

5. **Invalidate CloudFront cache** after deployment:
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
   ```

---

## 🔧 STEP 3: Troubleshooting - Still Getting 404s?

### Quick Diagnostic Checklist

Run through this checklist if routes still return 404 after deployment:

#### ✅ 1. Verify Build Output
```bash
# After building, check that index.html exists
ls dist/index.html

# Check that config file exists
ls dist/.htaccess  # or dist/web.config, etc.
```

#### ✅ 2. Verify File Upload
- **cPanel**: Go to File Manager → `public_html/` → Check for `index.html` and `.htaccess`
- **FTP**: Show hidden files to see `.htaccess`
- **VPS**: SSH in and run `ls -la /var/www/html/` (or your web root)

#### ✅ 3. Test Specific Routes
Open your browser and try these URLs directly (don't click links, type the URL):
- `https://yourdomain.com/` ✅ (should work)
- `https://yourdomain.com/about` ❌ (does this 404?)
- `https://yourdomain.com/services/training` ❌ (does this 404?)
- `https://yourdomain.com/contact` ❌ (does this 404?)

If the home page works but other routes 404, your **web server config is missing or not working**.

#### ✅ 4. Check Web Server Configuration

**For Apache (.htaccess)**:
1. Verify `.htaccess` is in your web root (same folder as `index.html`)
2. Check if mod_rewrite is enabled:
   ```bash
   # On VPS
   apache2ctl -M | grep rewrite
   
   # Should show: rewrite_module (shared)
   ```
3. If not enabled:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
4. Verify Apache allows `.htaccess`:
   ```bash
   # Check your Apache config
   sudo nano /etc/apache2/sites-available/000-default.conf
   
   # Must have AllowOverride All
   <Directory /var/www/html>
       AllowOverride All
   </Directory>
   ```

**For Nginx**:
1. Check if your site config exists:
   ```bash
   ls /etc/nginx/sites-available/yourdomain.com
   ```
2. Verify the `try_files` directive is present:
   ```bash
   grep -r "try_files" /etc/nginx/sites-available/
   ```
3. Should see: `try_files $uri $uri/ /index.html;`
4. Test and reload:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

**For IIS (web.config)**:
1. Verify `web.config` is in the root of your IIS site
2. Check URL Rewrite module is installed:
   - IIS Manager → Server → Modules → Look for "URL Rewrite Module"
3. If missing, install from: https://www.iis.net/downloads/microsoft/url-rewrite
4. Restart IIS after installation

#### ✅ 5. Clear ALL Caches

**Browser Cache**:
- Chrome/Edge: `Ctrl + Shift + Delete` → Clear browsing data
- Or try incognito/private mode

**CDN Cache** (if using Cloudflare):
1. Login to Cloudflare Dashboard
2. Go to Caching → Configuration → Purge Everything
3. Wait 30 seconds, then test again

**Server Cache**:
```bash
# Apache
sudo systemctl restart apache2

# Nginx  
sudo systemctl restart nginx
```

#### ✅ 6. Check Server Error Logs

**Apache**:
```bash
sudo tail -f /var/log/apache2/error.log
```

**Nginx**:
```bash
sudo tail -f /var/log/nginx/error.log
```

Visit your 404'ing route while watching the logs. Look for errors like:
- "File not found" → Config not applied
- "Rewrite rule not matching" → Config issue

---

### 🚨 Common Issues & Fixes

#### Issue: ".htaccess file not being read"

**Symptoms**: Routes still 404, `.htaccess` is uploaded correctly

**Solutions**:
1. Enable mod_rewrite: `sudo a2enmod rewrite && sudo systemctl restart apache2`
2. Set `AllowOverride All` in your Apache virtual host config
3. Check `.htaccess` file permissions: `chmod 644 .htaccess`

**Contact your hosting support** and ask:
> "Can you verify that mod_rewrite is enabled and AllowOverride is set to All for my domain?"

---

#### Issue: "Nginx not applying configuration"

**Symptoms**: Added try_files to nginx.conf but still getting 404

**Solutions**:
1. Check syntax: `sudo nginx -t`
2. Verify you edited the correct site config file
3. Check if there's a symlink in `/etc/nginx/sites-enabled/`
4. Reload nginx: `sudo systemctl reload nginx`
5. Check for conflicting location blocks

---

#### Issue: "Works on Lovable, 404 on custom domain"

**Why**: Lovable hosting auto-configures SPA routing. Your custom domain doesn't.

**Solution**: Follow Step 2 above for your specific web server setup.

---

#### Issue: "Home page works, all other pages 404"

**Why**: This is the classic SPA routing issue. Your server is not serving index.html for non-root routes.

**Solution**: Your web server config is either:
- Not uploaded (check for `.htaccess`, `web.config`, etc.)
- Not being read (permissions, mod_rewrite disabled)
- In the wrong location (must be in web root with index.html)

---

#### Issue: "Getting 404 only after refresh"

**Why**: Clicking links works (React Router handles it), but refresh asks the server for the file.

**Solution**: This confirms you need the web server configuration. See Step 2.

---

#### Issue: "Cloudflare + Custom Domain = 404"

**Symptoms**: Works without Cloudflare, fails with Cloudflare

**Solutions**:
1. Set SSL/TLS mode to "Full" (not "Flexible")
2. Purge Cloudflare cache: Caching → Purge Everything  
3. Check Page Rules aren't interfering
4. Disable "Always Use HTTPS" temporarily to test
5. Make sure your origin server (Apache/Nginx) is properly configured first

---

### 📞 Still Stuck? Contact Your Hosting Support

If you've tried everything above, contact your hosting provider with this message:

> Hi, I've deployed a React single-page application to my domain. I need to configure my web server to serve index.html for all routes (SPA routing).
> 
> - I have uploaded a `.htaccess` file (for Apache) / `web.config` (for IIS) to my web root.
> - Can you verify that:
>   1. mod_rewrite is enabled (Apache)
>   2. URL Rewrite module is installed (IIS)  
>   3. My config file has permission to override server settings
> 
> When I visit `https://mydomain.com/about`, I get a 404 error, but the route exists in my React app.

---

### 🧪 Test Your Deployment Locally

Before deploying, test that your build works with SPA routing:

```bash
# Build the app
npm run build

# Serve with SPA support (installs globally)
npm install -g serve
serve -s dist

# Or use npx (no install needed)
npx serve -s dist
```

Visit http://localhost:3000/about and refresh. If it works locally with `serve -s`, your build is fine - the issue is server configuration.

---

## ✅ Quick Deployment Checklist

Use this checklist every time you deploy:

### Before Deploying:
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` successfully (no errors)
- [ ] Verify `dist/index.html` exists
- [ ] Verify config file exists in `dist/` (`.htaccess`, `web.config`, etc.)

### During Deployment:
- [ ] Identify your web server type (Apache, Nginx, IIS, etc.)
- [ ] Upload ALL contents of `dist/` folder to web root
- [ ] Verify config file is uploaded (`.htaccess` may be hidden)
- [ ] Check file permissions (644 for files, 755 for directories)

### After Deployment:
- [ ] Test home page: `https://yourdomain.com/` 
- [ ] Test non-root route: `https://yourdomain.com/about`
- [ ] Test nested route: `https://yourdomain.com/services/training`
- [ ] Refresh on a non-root page (should not 404)
- [ ] Test all navigation menu links
- [ ] Clear browser cache and test again
- [ ] Test in incognito/private mode

### If Getting 404s:
- [ ] Verify web server config is uploaded and in correct location
- [ ] Check server logs for errors
- [ ] Verify mod_rewrite (Apache) or URL Rewrite (IIS) is enabled
- [ ] Clear CDN cache (if using Cloudflare)
- [ ] Contact hosting support if needed

---

## 📦 What's Included in This Project

All necessary configuration files are already in the `public/` folder and will be included in your build:

✅ **`public/_redirects`** - For Lovable hosting & Netlify (auto-configured)
✅ **`public/netlify.toml`** - Alternative Netlify config (auto-configured)
✅ **`public/vercel.json`** - For Vercel (auto-configured)
✅ **`public/.htaccess`** - For Apache/cPanel/shared hosting servers
✅ **`public/nginx.conf`** - For Nginx servers (VPS/cloud)
✅ **`public/web.config`** - For Windows IIS servers

These files are automatically copied to the `dist/` folder when you run `npm run build`.

---

## 🗺️ All Routes in This Application

The following routes are configured in React Router (`src/App.tsx`):

**Main Pages:**
- `/` - Home
- `/about` - About Us  
- `/global-reach` - Global Reach
- `/contact` - Contact

**Service Pages:**
- `/services/local-recruitment` - Local & Overseas Recruitment
- `/services/headhunting` - Executive Headhunting
- `/services/training` - Training & Capacity Building
- `/services/consultancy` - HR Consultancy
- `/services/expatriate` - Expatriate Services
- `/services/payroll` - Payroll & Outsourcing

**Legal Pages:**
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/cookie-policy` - Cookie Policy

**All of these routes must work when:**
1. Clicking navigation links ✅ (React Router handles this)
2. Typing the URL directly ⚠️ (Requires server config)
3. Refreshing the page ⚠️ (Requires server config)

---

## 🎯 Summary

**The core issue**: When you deploy to a custom domain, your web server doesn't know about React Router's client-side routes. You must configure your server to always serve `index.html`, which then loads React Router to handle the routing.

**The solution**: Use the appropriate config file for your web server (all included in `public/` folder):
- **Shared hosting / cPanel**: Use `.htaccess` (Apache)
- **VPS / Cloud with Nginx**: Configure nginx with `try_files`
- **Windows Server**: Use `web.config` (IIS)
- **Netlify / Vercel**: Auto-configured ✅

**Files are ready** - you just need to ensure your web server applies them correctly.

If you're still experiencing issues after following this guide, the problem is likely:
1. Config file not in the right location
2. Web server module not enabled (mod_rewrite for Apache, URL Rewrite for IIS)
3. Server permissions preventing config file from being read
4. Cache (browser, CDN, or server) serving old content

Contact your hosting provider for assistance with server-specific configuration.
