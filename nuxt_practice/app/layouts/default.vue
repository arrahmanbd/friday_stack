<template>
  <!--  Load Bootstrap & Icons via CDN -->
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

  <div class="d-flex flex-column min-vh-100 bg-light">
    <!--  Header -->
    <header class="border-bottom bg-white shadow-sm">
      <div class="container d-flex flex-wrap align-items-center justify-content-between py-3">
        <NuxtLink
          to="/"
          class="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <!-- Bootstrap Icon instead of SVG -->
          <i class="bi bi-bootstrap-fill fs-2 text-primary me-2"></i>
          <span class="fs-4 fw-semibold">Playground</span>
        </NuxtLink>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" active-class="active" exact>Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/lifecycle" class="nav-link">Lifecycle</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/admin" class="nav-link">Admin</NuxtLink>
          </li>
        </ul>
      </div>
    </header>

    <!--  Main Content -->
    <main class="flex-grow-1 d-flex justify-content-center align-items-center py-5">
      <slot />
    </main>

    <!-- ⚡ Footer -->
    <footer class="bg-dark text-light py-4 mt-auto">
      <div class="container text-center small">
        <p class="mb-0">
          &copy; 2025 MyWebsite. All rights reserved.
          <i class="bi bi-heart-fill text-danger ms-1"></i>
        </p>
      </div>
    </footer>
  </div>

  <!--  Bootstrap JS Bundle -->
  <Script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"
  />
</template>
