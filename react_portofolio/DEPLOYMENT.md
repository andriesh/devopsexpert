# CV Landing Page - Automated GitHub Pages Deployment

This setup automatically builds and deploys your React portfolio to GitHub Pages whenever you push changes.

## How It Works

1. **React Build**: The React portfolio is built using Vite to generate optimized static files
2. **CV Integration**: Your CV PDFs from `andrei_cv_package/` are automatically copied into the build output
3. **GitHub Pages Deployment**: The built site is automatically deployed to GitHub Pages

## Local Development

### Prerequisites
- Node.js 20+ installed

### Setup
```bash
cd react_portofolio
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```
Output is generated in the `dist/` folder.

### Preview Build
```bash
npm run preview
```

## Deployment

### Automatic Deployment (GitHub Actions)
The site automatically deploys when:
- You push changes to `react_portofolio/` or `andrei_cv_package/` folders
- The "Generate CVs" workflow completes (if you have one)
- You manually trigger via "workflow_dispatch"

### GitHub Pages Configuration

Ensure your repository settings are configured:

1. Go to **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select branch: `gh-pages` (created automatically by the workflow)
4. Set custom domain if needed (currently configured for `andriesh.dev`)

### Custom Domain Setup (Optional)

If using a custom domain:
1. Update the `cname` field in [deploy.yaml](.github/workflows/deploy.yaml#L51) to your domain
2. Configure DNS records pointing to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## CV Files

The workflow automatically includes CV files from `andrei_cv_package/`:
- `CV_Andrei_Rusnac_Visual.pdf` - Visual/design-focused CV
- `CV_Andrei_Rusnac_ATS.pdf` - ATS-friendly plain text CV

These are copied into the build output, making them accessible via:
- `/CV_Andrei_Rusnac_Visual.pdf`
- `/CV_Andrei_Rusnac_ATS.pdf`

## File Structure

```
devopsexpert/
├── react_portofolio/          # React source code
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── andrei_cv_package/         # CV source files (PDFs)
│   ├── CV_Andrei_Rusnac_Visual.pdf
│   └── CV_Andrei_Rusnac_ATS.pdf
└── .github/workflows/
    └── deploy.yaml            # Deployment automation
```

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 20+)
- Clear cache: `rm -rf node_modules && npm install`
- Check for React plugin: Ensure `@vitejs/plugin-react` is in `package.json`

### PDFs Not Showing
- Verify PDFs exist in `andrei_cv_package/`
- Check workflow logs in **Actions** tab
- Ensure PDFs are being copied correctly (visible in "Copy CV files to dist" step)

### Domain Not Resolving
- Verify CNAME record in `public/CNAME` matches your domain
- Allow 5-10 minutes for DNS propagation
- Check GitHub Pages settings for custom domain

## Next Steps

1. **Enhance Portfolio**: Add more sections to `App.jsx` (projects, skills, experience)
2. **Styling**: Customize Tailwind configuration in `tailwind.config.js`
3. **Content**: Update text and links in React components
4. **Analytics**: Add Google Analytics or similar tracking (optional)
