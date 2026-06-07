# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm serve      # dev server with hot-reload
pnpm build      # production build → dist/
pnpm lint       # ESLint with auto-fix
pnpm prettier   # format code
```

**Requirements:** Node >=21.0.0 <=24.13.0, pnpm >=8.10.0

## Architecture

Vue 3 SPA (Vue CLI, not Nuxt). Single route `/` in `src/route/routes.js` — all navigation is anchor-based smooth scroll.

```
src/
  main.js           # entry: Vue, router, vue-gtag-next, AOS, Swiper init
  App.vue           # root with <router-view>
  views/index.vue   # hero section + typing effect, imports Layout
  layout/index.vue  # master layout: scroll-spy, dark/RTL toggles, AOS.init()
  components/       # navbar, footer, service, skill, education, work
  assets/css/       # style.css, tailwind.css, typing-effect.css
```

Page sections rendered in order inside `layout/index.vue`: navbar → hero → service → skill → education → work → contact → footer.

## Key Patterns

**Styling:** Tailwind CSS (dark mode via `class` strategy) + SCSS. Custom theme colors defined in `tailwind.config.js`: `purple` (#994FF5), `warning` (#FFC41F), `dark` (#050C17), `light` (#F8F7F6). Font: Sora (Google Fonts).

**Dark/RTL:** Toggled in `layout/index.vue` via `document.documentElement.classList.toggle("dark")` and `document.documentElement.setAttribute("dir", ...)`.

**Animations:** AOS (data-aos attributes on elements), typing effect custom JS in `views/index.vue`, Swiper for carousels.

**Contact form:** POSTs to `https://api.web3forms.com/submit` using `VUE_APP_WEB3FORMS_ACCESS_KEY`.

**Analytics:** vue-gtag-next using `VUE_APP_GOOGLE_ANALYTICS_KEY`.

## Environment Variables

```
VUE_APP_WEB3FORMS_ACCESS_KEY=   # contact form submissions
VUE_APP_GOOGLE_ANALYTICS_KEY=   # Google Analytics property ID
```

## Deployment

Deployed on Netlify. Config in `netlify.toml` (build: `pnpm run build`, publish: `dist`). Security headers in `public/_headers`.
