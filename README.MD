

#  FridayStack — Nuxt 4  Playground

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
# Create new Nuxt 4 project
npm create nuxt@latest
```

*Or the old way:*

```bash
npx nuxi init my-nuxt-app
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
