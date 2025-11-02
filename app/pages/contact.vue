<template>
  <div class="container py-5">
    <!-- Page Header -->
    <div class="text-center mb-5">
      <h2 class="fw-bold">
        <i class="bi bi-envelope-fill me-2"></i> Contact Us
      </h2>
      <p class="text-muted">We’d love to hear from you! Fill out the form below or reach us through our contacts.</p>
    </div>

    <div class="row g-4">
      <!-- Contact Info Cards -->
      <div class="col-md-4">
        <div class="card shadow-sm border-0 text-center p-3">
          <i class="bi bi-geo-alt-fill fs-2 text-primary mb-2"></i>
          <h5 class="card-title mb-1">Address</h5>
          <p class="card-text text-muted">123 Main Street, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm border-0 text-center p-3">
          <i class="bi bi-telephone-fill fs-2 text-success mb-2"></i>
          <h5 class="card-title mb-1">Phone</h5>
          <p class="card-text text-muted">+880 1234 567 890</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm border-0 text-center p-3">
          <i class="bi bi-envelope-fill fs-2 text-warning mb-2"></i>
          <h5 class="card-title mb-1">Email</h5>
          <p class="card-text text-muted">contact@example.com</p>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="row mt-5">
      <div class="col-lg-8 mx-auto">
        <div class="card shadow-sm border-0 p-4">
          <h4 class="mb-4">Send us a message</h4>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Your Name" required>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input v-model="form.email" type="email" class="form-control" id="email" placeholder="name@example.com" required>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea v-model="form.message" class="form-control" id="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              <i class="bi bi-send me-1"></i> Send Message
            </button>
          </form>

          <div v-if="success" class="alert alert-success mt-3">
            Your message has been sent successfully!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const success = ref(false)

const handleSubmit = () => {
  // Simulate API call
  console.log('Form submitted', form.value)
  success.value = true
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
