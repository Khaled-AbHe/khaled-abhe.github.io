# Portfolio

React + Vite portfolio. **Everything you see is read from `src/data.js`.**
Edit that file, push to GitHub, and the site rebuilds itself.

## Edit your content
Open `src/data.js`. Add, remove or reorder projects, skills and text.
To use a project screenshot or GIF, put the file in `public/` and set
`image: "frog.gif"` on that project.

## Run it on your computer
    npm install
    npm run dev

## Publish on GitHub Pages
1. Create a repo named `Khaled-AbHe.github.io` and push this project to the `main` branch.
2. On GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` now builds and deploys the site automatically.

If you use a normal repo name instead, set `base: "/repo-name/"` in `vite.config.js`.
