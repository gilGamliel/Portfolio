# Vercel Deployment Configuration

## ✅ Current Status: Ready for Vercel Deployment

### Configuration Summary

This Next.js project is configured for **native Vercel deployment** (not static export).

#### Key Configuration Decisions:

1. **No Static Export** - Using Vercel's built-in Next.js hosting
   - Enables server-side features when needed
   - Automatic image optimization
   - Better build performance

2. **No basePath/assetPrefix** - Deploying to root domain
   - Assets load from `/_next/static/...` (correct)
   - No `/Portfolio/` prefix issues

3. **React Compiler Enabled** - React 19 optimizations

4. **Removed GitHub Pages Config** - Cleaned up `gh-pages` package and scripts

### Vercel Project Settings

**CRITICAL**: In your Vercel project dashboard, ensure:

```
Root Directory: . (or leave empty)
Framework Preset: Next.js
Build Command: npm run build (default)
Output Directory: .next (default)
Install Command: npm install (default)
Node Version: 20.x or higher
```

### Build Output Structure

The build generates the following (Vercel-compatible):
```
.next/
├── routes-manifest.json       ✓ Route definitions
├── static/
│   ├── chunks/*.css          ✓ Tailwind CSS
│   ├── chunks/*.js           ✓ JavaScript bundles  
│   └── media/*.woff2         ✓ Font files
├── server/                    ✓ Server components
└── ... other Next.js files
```

### Dynamic Routes (SSG)

The following routes use `generateStaticParams` and are pre-rendered:
- `/projects/[category]/[slug]` → 6 project pages

### Deployment Checklist

Before pushing to Vercel:

- [x] `npm run build` succeeds locally
- [x] No `output: 'export'` in next.config.ts
- [x] No `basePath` or `assetPrefix` configured
- [x] CSS files generated in `.next/static/chunks/`
- [x] Fonts generated in `.next/static/media/`
- [x] Dynamic routes working with `generateStaticParams`
- [x] `routes-manifest.json` present in `.next/`
- [x] GitHub Pages dependencies removed

### Deployment Process

1. **Commit and push** changes to GitHub:
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **Verify Vercel settings**:
   - Go to Vercel Dashboard → Your Project → Settings → General
   - Confirm Root Directory is `.` or empty
   - Confirm Build Command is `npm run build`

3. **Trigger deployment**:
   - Vercel will auto-deploy on push
   - Or manually: Deployments → Redeploy

4. **Verify deployment**:
   - Check that CSS loads: `/_next/static/chunks/*.css`
   - Check that fonts load: `/_next/static/media/*.woff2`
   - Navigate to `/projects/[category]/[slug]` routes
   - No 404 errors in browser console

### Troubleshooting

#### If you see `/Portfolio/` in asset URLs:
- Check Vercel Root Directory setting (should be empty or `.`)
- Verify you're deploying the correct Git repository
- Clear Vercel cache and redeploy

#### If CSS doesn't load:
- Run `npm run build` locally and verify `.next/static/chunks/*.css` exists
- Check Tailwind config and globals.css imports
- Verify `@tailwindcss/postcss` is in devDependencies

#### If fonts don't load:
- Check that `next/font/google` imports are correct
- Verify fonts are listed in `.next/static/media/`
- Check Network tab for font loading errors

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run build && npm start
```

### Environment Variables

Currently no environment variables configured. Add via:
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Or `.env.local` for local development (gitignored)

### Analytics

This project uses Plausible Analytics (privacy-friendly, no cookies):
- Domain: `gilgamliel.dev`
- Script: Loaded from `plausible.io/js/script.js`
- Events: Portfolio opened, project viewed, link clicked

---

**Last Updated**: January 30, 2026
**Next.js Version**: 16.1.6 (Turbopack)
**Deployment Platform**: Vercel
