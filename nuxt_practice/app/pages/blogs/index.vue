<template>
  <div class="container py-4">
    <h2 class="mb-4">
      <i class="bi bi-journal-text me-2"></i> Blog Pages
    </h2>

    <div class="d-flex flex-wrap gap-2">
      <!-- Blog Chips -->
      <NuxtLink
        to="/blogs/flutter"
        class="badge bg-primary text-decoration-none p-2"
      >
        <i class="bi bi-braces me-1"></i> Flutter Blog
      </NuxtLink>

      <NuxtLink
        to="/blogs/vue"
        class="badge bg-success text-decoration-none p-2"
      >
        <i class="bi bi-vuejs me-1"></i> Vue Blog
      </NuxtLink>

      <NuxtLink
        to="/blogs/nuxt"
        class="badge bg-info text-dark text-decoration-none p-2"
      >
        <i class="bi bi-box-seam me-1"></i> Nuxt Blog
      </NuxtLink>

      <NuxtLink
        to="/blogs/javascript"
        class="badge bg-warning text-dark text-decoration-none p-2"
      >
        <i class="bi bi-code me-1"></i> JavaScript Blog
      </NuxtLink>

      <NuxtLink
        to="/blogs/css"
        class="badge bg-danger text-decoration-none p-2"
      >
        <i class="bi bi-paint-bucket me-1"></i> CSS Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No JS needed for demo
</script>

<style scoped>
.badge {
  font-size: 0.95rem;
  border-radius: 12px;
  transition: transform 0.2s;
}
.badge:hover {
  transform: scale(1.05);
}
</style>
