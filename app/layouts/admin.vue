<template>
     <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
  <div class="d-flex vh-100 bg-light">
    <!-- Sidebar -->
    <aside class="bg-dark text-white p-3" style="width: 220px;">
      <h4 class="mb-4">
        <i class="bi bi-speedometer2 me-2"></i> Admin
      </h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <NuxtLink to="/home" class="nav-link text-white">
            <i class="bi bi-house-door me-2"></i> Home
          </NuxtLink>
        </li>
        <li class="nav-item mb-2">
          <NuxtLink to="/admin/users" class="nav-link text-white">
            <i class="bi bi-people me-2"></i> Users
          </NuxtLink>
        </li>
        <li class="nav-item mb-2">
          <NuxtLink to="/admin/posts" class="nav-link text-white">
            <i class="bi bi-file-text me-2"></i> Posts
          </NuxtLink>
        </li>
        <li class="nav-item mb-2">
          <NuxtLink to="/" class="nav-link text-white">
            <i class="bi bi-gear me-2"></i> Logout
          </NuxtLink>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow-1 p-4 bg-light overflow-auto">
      <h2 class="mb-4">Admin Dashboard</h2>
      <slot></slot>
    </main>
  </div>
    <!--  Bootstrap JS Bundle -->
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    />
</template>

<script setup>

// No JS logic needed for layout
</script>

<style scoped>
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
aside {
  min-width: 220px;
}
main {
  min-height: 100vh;
}
</style>
