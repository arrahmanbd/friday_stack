<template>
  <div class="container py-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="card-title mb-3">
          <i class="bi bi-box-seam me-2"></i> Product Dynamic Home
        </h4>

        <div class="list-group">
          <NuxtLink
            to="/products/1"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bi bi-info-circle me-2 text-primary"></i>
            Product About 1
          </NuxtLink>

          <NuxtLink
            to="/products/2"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bi bi-info-circle me-2 text-success"></i>
            Product About 2
          </NuxtLink>

          <NuxtLink
            to="/products/review"
            class="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="bi bi-chat-left-text me-2 text-warning"></i>
            Product Review
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for this example
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
