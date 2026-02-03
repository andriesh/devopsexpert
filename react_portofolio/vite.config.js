import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repo name for GitHub Pages deployment
// If deploying to a subdirectory like github.com/username/repo, set base to '/repo/'
// If deploying to a custom domain, set base to '/'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const base = isGitHubPages ? '/andriesh/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
