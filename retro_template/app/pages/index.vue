<template>
  <div>
<!-- Hero Section -->
<section class="py-5 text-center bg-primary text-white" data-aos="fade-down">
  <div class="container">
    <h1 class="display-4 fw-bold mb-3" data-aos="zoom-in" data-aos-delay="200">
      Build Faster with ReTro
    </h1>
    <p class="lead mb-4" data-aos="fade-up" data-aos-delay="400">
      A powerful starter for modern web apps — simple, beautiful, and fast.
    </p>
    <div data-aos="fade-up" data-aos-delay="600">
      <a href="#cta" class="btn btn-light btn-lg me-2">Get Started</a>
      <a href="#features" class="btn btn-outline-light btn-lg">Learn More</a>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="features" class="py-5 bg-body-secondary">
  <div class="container">
    <h2 class="text-center fw-bold mb-5" data-aos="fade-up">Features</h2>
    <div class="row g-4 text-center">
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="p-4 border rounded-4 h-100">
          <i class="bi bi-lightning-charge display-5 text-primary"></i>
          <h5 class="mt-3 fw-semibold">Lightning Fast</h5>
          <p>Experience instant loading powered by modern technology.</p>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="p-4 border rounded-4 h-100">
          <i class="bi bi-shield-check display-5 text-success"></i>
          <h5 class="mt-3 fw-semibold">Secure by Default</h5>
          <p>Built with security and best practices from the start.</p>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div class="p-4 border rounded-4 h-100">
          <i class="bi bi-brush display-5 text-info"></i>
          <h5 class="mt-3 fw-semibold">Beautiful Design</h5>
          <p>Modern, clean, and responsive UI that adapts everywhere.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Blog Section -->
    <section id="blog" class="py-5 bg-body-secondary">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Latest Blog Posts</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="post in blogPosts" :key="post.title">
            <div class="card h-100 shadow-sm">
              <img :src="post.image" class="card-img-top" :alt="post.title">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.excerpt }}</p>
                <a :href="post.link" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action (CTA) -->
    <section id="cta" class="py-5 text-center bg-primary text-white">
      <div class="container">
        <h2 class="display-5 fw-bold mb-3">Ready to get started?</h2>
        <p class="lead mb-4">Join hundreds of developers building apps faster with Orkitt.</p>
        <a href="#" class="btn btn-light btn-lg">Get Started Now</a>
      </div>
    </section>
  </div>
</template>

<script setup>
const portfolioItems = [
  { title: 'Project Alpha', description: 'A modern web app built with Nuxt.', image: 'https://via.placeholder.com/400x250' },
  { title: 'Project Beta', description: 'A sleek portfolio template.', image: 'https://via.placeholder.com/400x250' },
  { title: 'Project Gamma', description: 'Custom admin dashboard.', image: 'https://via.placeholder.com/400x250' },
]

const blogPosts = [
  { title: 'Boost Your Nuxt Apps', excerpt: 'Tips and tricks to accelerate Nuxt development...', image: 'https://via.placeholder.com/400x250', link: '#' },
  { title: 'Bootstrap 5 Guide', excerpt: 'Everything you need to know about Bootstrap 5...', image: 'https://via.placeholder.com/400x250', link: '#' },
  { title: 'Dark Mode in Nuxt', excerpt: 'Implementing dark mode with ease...', image: 'https://via.placeholder.com/400x250', link: '#' },
]
</script>
