# FridayStack — Nuxt 4  Playground

My old full-stack playground, now evolved with **Nuxt 4**, **Vue 4**, and **modern developer tooling**.
FridayStack demonstrates clean architecture, state management with **Pinia**, and API integration with **Axios** — all wrapped in a fast, intuitive, and scalable Nuxt setup.

---

## ✨ **Features**

* ✅ Fetch todos from a remote API
* 🔁 “Load More” pagination support
* 🎯 Filter by completed or pending tasks
* ⚙️ Built-in loading and error states
* 🧩 Modular, maintainable structure for learning and extension

---

## ⚙️ **Project Setup**

### 1. Create a Nuxt 4 Project

```bash
npm create nuxt@latest
```


### 2. Install Dependencies

```bash
# Project dependencies
npm install

# Core packages
npm install pinia axios
```

---

##  **Nuxt Configuration**

Add **Pinia** to your Nuxt config (`nuxt.config.ts`):
```bash
npm i pinia @pinia/nuxt
```

Pinia configuration: 

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
})
```

---

## 🚀 **Development**

Start the dev server:

```bash
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 📦 **Build for Production**

Build and preview your app for production:

```bash
# Build
npm run build

# Preview locally
npm run preview
```

---

## 📚 **Further Resources**

* [Nuxt 4 Docs](https://nuxt.com/docs) — Official guide and references
* [Pinia Docs](https://pinia.vuejs.org/) — Modern store for Vue
* [Axios Docs](https://axios-http.com/docs/intro) — HTTP client


## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

## Bootstrap, Bootstrap Icons

```bash
npm install bootstrap bootstrap-icons 
```

## AOS 

```bash
npx nuxi@latest module add aos
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
