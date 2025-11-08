<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <i v-if="icon" :class="icon"></i>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label?: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  icon?: string
  disabled?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['click'])

// Compute button classes dynamically
const buttonClasses = computed(() => {
  const classes = ['btn']

  // Variant
  classes.push(`btn-${props.variant ?? 'primary'}`)

  // Size
  if (props.size === 'sm') classes.push('btn-sm')
  if (props.size === 'lg') classes.push('btn-lg')

  return classes.join(' ')
})
</script>

<style scoped>
button {
  display: inline-block;
  background: #CC342D url(https://www.ruby-lang.org/en/images/download-ruby-arrow@2x.png) no-repeat 8px center;
  background-size: 30px 25px;
  color: white;
  padding: 8px 20px 8px 20px;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin: 0 3px 0 0;
  text-shadow: none;
  border: 2px solid #9b1c16;
  font-weight: normal;
  border-radius: 6px;
  box-shadow: 0 2px 0 #9b1c16;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #b32a23;
  border-color: #861411;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Optional: spacing for the icon */
i {
  margin-right: 0.5rem;
  font-size: 20px;
}
</style>
