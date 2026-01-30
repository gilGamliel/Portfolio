# Git Commit Checklist

Before pushing to trigger Vercel deployment, verify:

## ✅ Pre-Commit Checklist

### Configuration Files
- [x] `next.config.ts` - Simplified (reactCompiler only)
- [x] `package.json` - GitHub Pages config removed
- [x] `package-lock.json` - Regenerated without gh-pages
- [x] `vercel.json` - Created (framework: nextjs)

### Build Status
- [x] `npm run build` - Passes without errors
- [x] TypeScript compilation - No errors
- [x] CSS generation - 39KB output
- [x] Routes manifest - basePath is empty
- [x] Dynamic routes - 6 pages generated

### Files to Commit
```bash
modified:   next.config.ts
modified:   package.json
modified:   package-lock.json
new file:   vercel.json
new file:   DEPLOYMENT.md
new file:   DEPLOYMENT_FIX.md
new file:   README_DEPLOYMENT.md
```

## Git Commands

### Check Status
```bash
git status
```

### Add Files
```bash
git add next.config.ts package.json package-lock.json vercel.json
git add DEPLOYMENT*.md README_DEPLOYMENT.md
```

### Commit
```bash
git commit -m "Fix Vercel deployment configuration

- Remove GitHub Pages config (gh-pages, static export)
- Simplify next.config.ts for native Vercel hosting
- Remove basePath/assetPrefix to fix asset 404s
- Add standard Next.js scripts
- Add deployment documentation"
```

### Push
```bash
git push origin main
```

## Post-Push Actions

1. **Monitor Vercel Deployment**
   - Go to Vercel Dashboard
   - Watch build logs
   - Check for errors

2. **Verify Vercel Settings** (if first deployment)
   - Settings → General → Root Directory: `.` (or empty)
   - Settings → General → Framework: Next.js

3. **Test Deployed Site**
   - Open your Vercel URL
   - Open browser DevTools (F12) → Network tab
   - Check for 404 errors
   - Verify CSS loads from `/_next/static/chunks/...`
   - Verify fonts load from `/_next/static/media/...`
   - Navigate to project pages

## Expected Results

### ✅ Browser Network Tab (Success)
```
/_next/static/chunks/ca1cde210097203e.css          200 OK
/_next/static/chunks/5079e61471129470.js            200 OK  
/_next/static/media/797e433ab948586e-s.p.*.woff2    200 OK
/_next/static/media/caa3a2e1cccd8315-s.p.*.woff2    200 OK
```

### ❌ Before (Failure)
```
/Portfolio/_next/static/chunks/...                  404 Not Found
```

## If Issues Occur

### Issue: Build fails on Vercel
**Action:** Check Vercel build logs for specific error message

### Issue: 404 errors on assets
**Action:** Verify Root Directory in Vercel settings is `.` or empty

### Issue: CSS missing
**Action:** Check Tailwind config and ensure `@tailwindcss/postcss` is installed

---

**Ready to commit?** Run the commands above! 🚀
