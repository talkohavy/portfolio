# Tal Kohavy — Portfolio

A heavily animated, single-page developer portfolio built with **Vite+ · React 19 · TypeScript · Tailwind CSS v4 · Motion**.
Scaffolded from the same toolchain and conventions as `vite-react-template`.

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:3005
```

## Scripts

```bash
pnpm dev          # Start the dev server (port 3005, override via VITE_PORT)
pnpm build        # Production build into ./dist
pnpm preview      # Serve the production build
pnpm test         # Vitest (jsdom)
pnpm tsc          # Type-check only
pnpm lint         # Oxlint (vp lint)
pnpm format:fix   # Oxfmt (vp fmt)
pnpm check        # lint + format + tsc + test
```

## Editing the content

All the text on the site comes from `src/common/constants/`:

| File            | What it holds                                     |
| --------------- | ------------------------------------------------- |
| `profile.ts`    | Name, title, contact details, about text, stats   |
| `skills.ts`     | Skill categories and the two scrolling marquees   |
| `experience.ts` | Work history (timeline)                           |
| `projects.ts`   | Featured project (LuckyLove) and the npm packages |
| `education.ts`  | Degrees                                           |
| `navigation.ts` | Navbar items                                      |

## Profile photo

Drop a photo at **`src/public/profile.jpg`** — it shows up in the hero automatically.
Until then, an animated "TK" monogram is shown in its place.
A portrait (4:5) image of at least 800×1000px works best. To use a different file name or format, change `photoPath` in `src/common/constants/profile.ts`.

## CV download

The "Download CV" / "Resume" buttons serve `src/public/Tal-Kohavy-CV.pdf`. Replace that file to update the CV.

## Project Structure

```
src/
├── sections/       # One folder per page section (Hero, About, Skills, Experience, Projects, Education, Contact, Footer)
│   └── <Section>/
│       ├── <Section>.tsx
│       ├── index.ts
│       └── content/    # Section-local subcomponents
├── components/     # Reusable animated building blocks (SplitText, TiltCard, MagneticButton, Marquee, ...)
├── hooks/          # useActiveSection (scroll-spy), useCopyToClipboard, useIsFinePointer
├── common/         # constants (site content + motion easings), types, utils
├── public/         # Static files: CV, favicon, profile photo
├── App.tsx         # Page composition + preloader
└── main.tsx        # Entry point (fonts, global CSS)
```

## Animation notes

- Powered by [Motion](https://motion.dev) (`motion/react`).
- The preloader plays once per browser session (tracked in `sessionStorage`).
- `MotionConfig reducedMotion='user'` respects the OS "Reduce motion" setting — transform animations are disabled for those users, and CSS animations are shortened.
- The custom cursor only renders on devices with a fine pointer (mouse / trackpad).
