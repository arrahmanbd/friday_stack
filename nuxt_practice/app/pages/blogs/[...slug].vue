<template>
  <div class="container py-5 text-center">
    <div class="card shadow-sm mx-auto" style="max-width: 500px;">
      <div class="card-body">
        <h1 class="display-4 text-danger mb-3">
          <i class="bi bi-exclamation-triangle-fill me-2"></i> 404
        </h1>
        <h5 class="card-title mb-3">Page Not Found</h5>
        <p class="card-text mb-3">
          Access failed for: <code class="text-muted">{{ route.params.slug.join('/') }}</code>
        </p>
        <NuxtLink to="/blogs" class="btn btn-primary">
          <i class="bi bi-arrow-left-circle me-1"></i> Go back to Blog Pages
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
