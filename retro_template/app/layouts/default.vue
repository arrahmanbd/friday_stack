<template>
  <div :data-bs-theme="theme.isDark ? 'dark' : 'light'" class="bg-body min-vh-100">
    
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand fw-bold">ReTro</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item" v-for="page in pages" :key="page.name">
              <NuxtLink
                :to="page.route"
                class="nav-link"
                :class="{ 'text-primary fw-bold': currentRoute === page.route }"
              >
                {{ page.name }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-secondary ms-3"
                @click="theme.toggle"
              >
                <i :class="theme.isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page content -->
    <main class="min-vh-100">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-4 border-top text-center bg-dark">
       <p class="mb-0 text-white">© {{ new Date().getFullYear() }} AR Rahman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Pinia store for persisted dark mode
const theme = useThemeStore();

// Pages array
const pages = [
  { name: 'Home', route: '/' },
  { name: 'Features', route: '/features' },
  { name: 'Pricing', route: '/pricing' },
  { name: 'Contact', route: '/contact' }
]

// Track current route
const route = useRoute()
const currentRoute = computed(() => route.path)
</script>
