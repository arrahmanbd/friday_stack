<template>
  <div class="container mt-5">
    <h3>Reactive Example</h3>

    <div class="card p-3 mt-3">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>

      <input v-model="user.name" type="text" class="form-control mb-2" placeholder="Enter name" />
      <input v-model.number="user.age" type="number" class="form-control mb-2" placeholder="Enter age" />

      <button class="btn btn-primary" @click="increaseAge">Increase Age</button>
    </div>

    <!-- Alert -->
    <div
      v-if="showAlert"
      class="alert alert-success alert-dismissible fade show mt-3"
      role="alert"
    >
      <strong>Alert!</strong> Age is greater than 30.
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="showAlert = false"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'

const user = reactive({
  name: 'Rahman',
  age: 25
})

// Reactive alert visibility
const showAlert = ref(false)

// Computed to check if age > 30
const isOlderThan30 = computed(() => user.age > 30)

// Watch age changes to show alert when > 30
watch(
  () => user.age,
  (newVal, oldVal) => {
    if (isOlderThan30.value) {
      showAlert.value = true
      // Auto hide after 3 seconds
      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    }
  }
)

function increaseAge() {
  user.age++
}
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
