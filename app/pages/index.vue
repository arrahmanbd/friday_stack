<template>
  <div class="container py-5 ">
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-3" v-for="item in menuItems" :key="item.title">
        <div class="card h-100 text-center shadow-sm border-0">
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <!-- Icon + Title -->
              <h5 class="card-title fw-semibold">
                <i :class="item.icon + ' me-2 fs-4'"></i>
                {{ item.title }}
              </h5>
              <p class="card-text text-muted">{{ item.description }}</p>
            </div>
            <NuxtLink :to="item.link" class="btn btn-primary mt-3">
              Go to {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { title: "Contact", description: "Get in touch with us.", link: "/contact", icon: "bi bi-envelope-fill" },
  { title: "Products", description: "Explore our products.", link: "/products", icon: "bi bi-box-seam" },
  { title: "Blogs", description: "Read latest articles.", link: "/blogs", icon: "bi bi-journal-text" },
  { title: "Todo", description: "Manage your tasks.", link: "/todo", icon: "bi bi-check2-square" },
  { title: "Calculator", description: "Use age calculator.", link: "/age", icon: "bi bi-calculator" },
  { title: "Reactive", description: "Manage reactive state.", link: "/reactive", icon: "bi bi-lightning-fill" },
  { title: "Pinia", description: "Manage Pinia state.", link: "/pinia", icon: "bi bi-stack" },
  { title: "API", description: "API management.", link: "/api", icon: "bi bi-cloud-arrow-up-fill" },
  { title: "Lifecycle", description: "Manage lifecycle.", link: "/lifecycle", icon: "bi bi-arrow-repeat" },
];
</script>

<style scoped>
.card {
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
</style>
