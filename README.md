# Typewriter

This is special web-application to calculate user's typing speed.

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Architecture specification

    /public/
    /src/
    	assets
    	app
    	components
    	hooks
    	utils

1. `public` - for static files.
2. `src` - application related files.
3. `app` - main folder with in-built router. It also contains _modules_ (based
   on module architecture of
   [Tao of React](https://alexkondov.com/tao-of-react/)). Each module may have
   its own separate local _components_, _hooks_, _utils_ etc.
4. `assets` - folder for assets (eg. fonts, images, icons etc.).
5. `components` - global (common) folder with reusable components.
6. `hooks` - global (common) folder with reusable hooks.
7. `utils` - global (common) folder with reusable utilities.

## Brought with Next.js

Utilizes TypeScript, Tailwind CSS, i18n, GSAP
