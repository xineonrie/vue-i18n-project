# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
## Project Structure

vue-project/
├─ .vscode/                   — Workspace settings (formatting, extensions)
├─ android/                   — Capacitor Android native project (Gradle, Manifest)
├─ node_modules/              — Installed dependencies (managed by npm/pnpm/yarn)
├─ public/                    — Static assets copied as-is to the build (served from /)
│  └─ ...
├─ src/                       — Application source
│  ├─ assets/                 — Imported assets processed by Vite (hashing, bundling)
│  ├─ components/             — Reusable UI components (non-route)
│  ├─ router/                 — Vue Router setup (e.g., index.ts)
│  ├─ views/                  — Route-level pages
│  │  ├─ HomeView.vue
│  │  └─ AboutView.vue
│  ├─ App.vue                 — Root component (layout, <router-view/>)
│  └─ main.ts                 — App entry (createApp, use(router), mount)
├─ .prettierrc.json           — Prettier code-style config
├─ capacitor.config.ts        — Capacitor config
├─ env.d.ts                   — TypeScript shims 
├─ index.html                
├─ package.json               — Scripts + dependency manifest
├─ package-lock.json          — Lockfile (pins dependency versions)
├─ tsconfig.app.json          — TS options for app code
├─ tsconfig.json              — Base TS config shared by others
├─ tsconfig.node.json         — TS for Node-side files (e.g., vite.config.ts)
├─ tsconfig.vitest.json       — TS config for tests
├─ vite.config.ts             — Vite config (plugins, aliases, dev server/HMR, build)
└─ vitest.config.ts           — Vitest test runner config
