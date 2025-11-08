<template>
  <div
    v-if="visible"
    :class="`alert alert-${variant} alert-dismissible fade show`"
    role="alert"
  >
    {{ message }}
    <button type="button" class="btn-close" @click="close"></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  message: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  duration?: number
}>()

const visible = ref(true)
const variant = props.variant ?? 'primary'

const close = () => {
  visible.value = false
}

// Optional: auto-close after duration
if (props.duration) {
  setTimeout(() => (visible.value = false), props.duration)
}
</script>
