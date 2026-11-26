# Content & Animations

## Content

- Every piece of copy lives in `src/common/constants/*` — sections never hard-code CV data.
- Content must stay faithful to the CV (`src/public/Tal-Kohavy-CV.pdf`). Do not invent metrics or responsibilities.
- The profile photo is loaded from `PROFILE.photoPath` (`/profile.jpg`). `Portrait` falls back to a monogram when the file is missing.

## Animations

- Library: `motion/react`. Shared easings/springs are in `src/common/constants/motion.ts`.
- Scroll-in reveals use `whileInView` with `viewport={{ once: true }}`.
- The hero is gated by `isIntroDone` (set when the preloader finishes, or immediately if it already played this session).
- Reduced motion is honored globally through `<MotionConfig reducedMotion='user'>` and a CSS media query in `index.css`.
- jsdom lacks `IntersectionObserver` and `matchMedia`; both are stubbed in `src/tests/setup.ts`.
