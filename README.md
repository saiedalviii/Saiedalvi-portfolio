# Saie Dalvi — UX & HMI Portfolio

A Vite + TypeScript rebuild of the supplied interaction prototype. It keeps the prototype's
water shader, fish loader, home bento board, and selected works list/grid interactions. The project
detail route is a placeholder until the case study layout is supplied.

## Run locally

```sh
pnpm install
pnpm dev
```

## Build and preview

```sh
pnpm build
pnpm preview
```

Routes use the hash router so they work on static hosting:

- `/#/` — home
- `/#/work` — selected works
- `/#/project/stroke` — case study placeholder

The repository is configured for GitHub Pages at `https://saiedalviii.github.io/Saiedalvi-portfolio/`.
The workflow in `.github/workflows/pages.yml` builds and publishes on pushes to `main`, once Pages
is enabled for the repository with GitHub Actions as the source.

## Structure

- `src/main.ts` — prototype interactions, routing, loader, water canvas, and view controls
- `src/data/projects.ts` — project content
- `src/data/media.ts` — references to extracted fish frames and tool icons
- `src/styles/` — global/home, footer, loader, work listing, and placeholder styles
- `public/assets/` — images extracted from the supplied HTML prototype

Social links are set in `src/main.ts`. Add the resume PDF at `public/assets/Saie_Dalvi_Resume.pdf`
to enable the resume download link.
