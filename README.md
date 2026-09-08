# Xi Emmett Peng

This is the active Next.js website for `www.emmettnotebook.com`.

## Local editing

All commands must be run from this directory:

```bash
cd /Users/emmett/myblog/newblog
npm run dev
```

Edit homepage and CV data in `content/home.json` and `content/cv.json`. Edit long-form pages and notes in `content/pages/` and `content/notes/`.

## Pre-deployment check

```bash
cd /Users/emmett/myblog/newblog
npm ci
npm run build
```

The static export is written to `.next-build/`. The custom domain is preserved by `public/CNAME`.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` builds and publishes the static export whenever `master` or `main` is pushed. Before the first deployment, set the repository's Pages source to **GitHub Actions** under **Settings > Pages**.

Publishing the new site will replace the files currently served from the repository. Keep `legacy-hexo/` and `archive/` outside the new website repository.
