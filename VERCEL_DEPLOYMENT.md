# Deploy JashFlow to Vercel - Step by Step Guide

## About the Backend

**Important**: This project doesn't need a traditional backend server! Here's why:

- **EmailJS** handles email sending **client-side** (from the browser)
- No Node.js/Express server required
- No database needed
- Everything runs in the user's browser
- Emails are sent through EmailJS's service

**However**, EmailJS still needs to be configured with your credentials before emails will work. See `EMAILJS_SETUP.md` for details.

---

## Prerequisites

1. **GitHub Account** - Create one at [github.com](https://github.com)
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (use your GitHub account)
3. **Git Installed** - Download from [git-scm.com](https://git-scm.com/) if not installed

---

## Step 1: Push Your Code to GitHub

### 1.1 Initialize Git (if not done)

Open PowerShell in your project folder (`c:\AI\JashFlow`) and run:

```powershell
git init
git add .
git commit -m "Initial commit - JashFlow landing page"
```

### 1.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `jashflow-landing`
3. Description: "AI Solutions Landing Page for JashFlow"
4. Keep it **Public** (or Private if you have a paid account)
5. **Don't** initialize with README
6. Click "Create repository"

### 1.3 Push to GitHub

GitHub will show you commands. Run these in PowerShell:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/jashflow-landing.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Project

1. Click "Add New..." → "Project"
2. Find your `jashflow-landing` repository
3. Click "Import"

### 2.3 Configure Project Settings

Vite  is auto-detected! Settings should be:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

**Don't change these** - they're correct!

### 2.4 Deploy!

1. Click "Deploy"
2. Wait 1-2 minutes for build to complete
3. You'll see "Congratulations!" when done
4. Click "Visit" to see your live site!

Your site will be live at: `https://jashflow-landing.vercel.app` (or similar)

---

## Step 3: Configure Custom Domain (Optional)

### Option A: Buy Domain from Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Click "Buy a domain"
4. Search for `jashflow.com` or similar
5. Purchase and it's automatically configured!

### Option B: Use Your Own Domain

If you already own `jashflow.com`:

1. Go to "Settings" → "Domains"
2. Enter your domain (e.g., `jashflow.com`)
3. Click "Add"
4. Vercel will show DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records shown by Vercel
7. Wait 24-48 hours for DNS propagation

---

## Step 4: Configure EmailJS for Production

Now that your site is live, configure email sending:

### 4.1 Setup EmailJS

Follow the detailed guide in `EMAILJS_SETUP.md`:

1. Create EmailJS account
2. Add email service (Gmail/Outlook)
3. Create email templates
4. Get Service ID and Public Key

### 4.2 Update Production Code

1. Open `src/services/emailService.js`
2. Replace placeholders with your EmailJS credentials:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',      // Your actual Service ID
  publicKey: 'user_xyz789',          // Your actual Public  Key
  templates: {
    booking: 'template_booking123',
    contact: 'template_contact456',
    newsletter: 'template_news789',
  },
};
```

### 4.3 Commit and Push Changes

```powershell
git add src/services/emailService.js
git commit -m "Configure EmailJS for production"
git push
```

Vercel will **automatically redeploy** your site with the new changes!

---

## Step 5: Test Your Live Site

1. Visit your Vercel URL
2. Scroll to "Schedule Demo" section
3. Click "Schedule Demo" button
4. Fill out the booking form
5. Use your real email address
6. Submit the form
7. Check your inbox for confirmation email!

---

## Automatic Deployments

🎉 **Good news**: Every time you push to GitHub, Vercel automatically redeploys!

To update your site:

```powershell
# Make your changes
git add .
git commit -m "Description of changes"
git push
```

Vercel will:
- Detect the push
- Build your site
- Deploy automatically
- Send you an email when done

---

## Common Issues & Solutions

### Issue 1: Build Fails

**Error**: "Module not found" or dependency errors

**Solution**:
```powershell
# Delete node_modules and package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstall
npm install

# Commit and push
git add package-lock.json
git commit -m "Fix dependencies"
git push
```

### Issue 2: Emails Not Sending on Production

**Causes**:
- EmailJS not configured
- Wrong Service ID/Public Key
- Email service not connected

**Solution**:
1. Double-check `src/services/emailService.js`
2. Verify credentials in EmailJS dashboard
3. Test email templates in EmailJS
4. Check browser console for errors

### Issue 3: Site Shows 404

**Solution**:
- Wait a few minutes after deployment
- Check Vercel deployment logs for errors
- Ensure build completed successfully

### Issue 4: Particles/Animations Not Working

**Cause**: Dependencies not installed properly

**Solution**:
```powershell
npm install react-tsparticles tsparticles
git add package-lock.json
git commit -m "Fix tsparticles"
git push
```

---

## Monitoring Your Site

### Vercel Dashboard

View analytics:
1. Go to Vercel dashboard
2. Click your project
3. See:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Add Google Analytics (Optional)

1. Create Google Analytics account  
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Commit and push

---

## Performance Optimization

Vercel automatically optimizes your site:

- ✅ CDN globally distributed
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Compression (gzip/brotli)
- ✅ Edge caching

No additional configuration needed!

---

## Summary

1. ✅ **Push code to GitHub** - Version control  
2. ✅ **Deploy to Vercel** - Automatic hosting
3. ✅ **Configure custom domain** - Professional URL (optional)
4. ✅ **Setup EmailJS** - Enable email functionality
5. ✅ **Test live site** - Verify everything works
6. ✅ **Automatic updates** - Push to deploy

Your JashFlow landing page is now live and professional! 🚀

---

## Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev/)
- **EmailJS Docs**: [emailjs.com/docs](https://www.emailjs.com/docs/)
- **GitHub Docs**: [docs.github.com](https://docs.github.com/)

Good luck with your AI IT company! 🎉
