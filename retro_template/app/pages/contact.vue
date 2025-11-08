

<template>
    <section id="contact" class="py-5 bg-body-secondary">
        <div class="container">
            <h2 class="text-center fw-bold mb-5">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input v-model="form.name" type="text" id="name" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input v-model="form.email" type="email" id="email" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea v-model="form.message" id="message" class="form-control" rows="5"
                                required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                    <p v-if="status" class="mt-3">{{ status }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Backend Free -->
     <!-- Contact Form Section -->
<section id="contact" class="py-5 bg-body-secondary">
  <div class="container">
    <h2 class="text-center fw-bold mb-5">Contact Us</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <!-- Formspree Form -->
        <form action="https://formspree.io/f/yourFormId" method="POST" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>


</template>


<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
  provider: 'gmail'
})

const status = ref('')

const submitForm = async () => {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    status.value = `Message sent via ${form.value.provider}!`
    form.value = { name: '', email: '', message: '', provider: 'gmail' }
  } catch (err) {
    console.error(err)
    status.value = 'Error sending message. Check credentials or provider.'
  }
}
  </script>
