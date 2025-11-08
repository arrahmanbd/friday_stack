<template>
  <div class="container py-5" style="max-width: 500px;">
    <h3 class="mb-4">Nuxt 3 Lifecycle Example</h3>

    <div class="card p-3 shadow-sm">
      <p><strong>Message:</strong> {{ message }}</p>
      <button class="btn btn-primary mt-2" @click="changeMessage">
        Change Message
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'

const message = ref('Hello! This is the initial message.')

// Called **before component is mounted**
onBeforeMount(() => {
  console.log('Component will mount soon...')
})

// Called **after component is mounted**
onMounted(() => {
  console.log('Component has been mounted!')
})

// Called **when component is about to be unmounted**
onUnmounted(() => {
  console.log('Component is being removed from DOM.')
})

function changeMessage() {
  message.value = 'The message has been updated!'
}
</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
