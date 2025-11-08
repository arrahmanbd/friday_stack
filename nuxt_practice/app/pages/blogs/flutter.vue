<template>
  <div class="container py-4">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>
        <i class="bi bi-braces me-2"></i> Flutter Blog
      </h2>
      <NuxtLink to="/blogs" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left-circle me-1"></i> Back to Blogs
      </NuxtLink>
    </div>

    <!-- Sample Blog Post Card -->
    <div class="card shadow-sm mb-4">
      <img
        src="https://picsum.photos/seed/picsum/300/200"
        class="card-img-top"
        alt="Flutter Post"
        style="height:300px"
      />
      <div class="card-body">
        <h5 class="card-title">Getting Started with Flutter</h5>
        <p class="card-text text-muted">
          Published on: <b>November 3, 2025</b> by <b>AR Rahman</b>
        </p>
        <p class="card-text">
          Flutter is Google’s UI toolkit for building beautiful, natively compiled
          applications for mobile, web, and desktop from a single codebase. It
          allows developers to create fast, expressive, and flexible UIs with
          a rich set of pre-built widgets.
        </p>
        <p class="card-text">
          In this post, we’ll explore how to set up Flutter, create your first
          app, and understand the basics of widgets, state management, and
          navigation.
        </p>
        <NuxtLink to="/blogs/flutter/details" class="btn btn-primary">
          <i class="bi bi-eye me-1"></i> Read More
        </NuxtLink>
      </div>
    </div>

    <!-- Optional Additional Posts -->
    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <h6 class="card-title">Flutter vs React Native</h6>
        <p class="card-text text-muted small">
          Published on: <b>October 28, 2025</b>
        </p>
        <p class="card-text small">
          Comparing Flutter and React Native in terms of performance, ease of
          development, and community support.
        </p>
        <NuxtLink to="/blogs/flutter/react-native" class="btn btn-sm btn-outline-primary">
          <i class="bi bi-eye me-1"></i> Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// No JS logic needed for this demo
</script>

<style scoped>
.card {
  border-radius: 12px;
}
.card-title {
  font-weight: 600;
}
</style>
