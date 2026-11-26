# CLAUDE.md

Guidance for Claude Code (and other AI agents) when working in this repository.

## 1. What this project is

Explained at the [README.md](./README.md) file.

## 2. Code Quality Standards

Code quality standard are found under: [code-quality-standards.md](./ai-docs/code-quality-standards.md)

## 3. Project Knowledge Base

Project knowledge base is found in all the md files under: `./ai-docs/knowledge/`

## 4. Commands

```bash
pnpm dev # vite dev server (--host), port 3005 (override via VITE_PORT)
pnpm build # vite build
pnpm preview # serve the production build
pnpm test # vitest via `vp test run` (jsdom)
pnpm test path/to/file.test.tsx # run a single test file
pnpm tsc # tsc -p tsconfig.json (no emit)
pnpm lint # oxlint via `vp lint` (config in vite.config.ts `lint` block)
pnpm format:fix # oxfmt via `vp fmt`
pnpm check # lint + format + tsc check + test (run before considering work done)
```
