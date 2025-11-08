// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-aos', 'pinia-plugin-persistedstate/nuxt',],
   aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'aos/dist/aos.css',
    '~/assets/css/main.css', // your own styles (optional)
  ], 
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My Awesome App',
      meta: [
        { name: 'description', content: 'This is a global default description for my app' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#CC342D' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },

      ],
      script: [

      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})