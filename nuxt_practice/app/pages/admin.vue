<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="text-primary">
        <i class="bi bi-speedometer2 me-2"></i> Admin Panel
      </h3>
      <span class="text-muted">Welcome, Admin!</span>
    </div>

    <!-- Dashboard Cards -->
    <div class="row g-3">
      <div class="col-md-3">
        <div class="card text-white bg-primary shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Users</h5>
            <p class="card-text">Manage all registered users</p>
            <NuxtLink to="/admin/users" class="btn btn-light btn-sm">View</NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-white bg-success shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Posts</h5>
            <p class="card-text">View and edit all posts</p>
            <NuxtLink to="/admin/posts" class="btn btn-light btn-sm">View</NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-white bg-warning shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Comments</h5>
            <p class="card-text">Moderate user comments</p>
            <NuxtLink to="/admin/comments" class="btn btn-light btn-sm">View</NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-white bg-danger shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Settings</h5>
            <p class="card-text">Adjust application settings</p>
            <NuxtLink to="/admin/settings" class="btn btn-light btn-sm">View</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Admin Dashboard',
  layout: 'admin'
})
</script>

<style scoped>
.card {
  border-radius: 12px;
}
.card-title {
  font-weight: 600;
}
</style>
