<template>
  <div class="d-flex gap-2 justify-content-center">
    <!-- Basic button -->
    <BaseButton icon="bi bi-gem" variant="secondary" label="Click Me" @click="doSomething" />

    <!-- Secondary button -->
    <BaseButton label="Cancel" variant="secondary" @click="cancelAction" />

    <!-- Button with icon -->
    <BaseButton label="Save" variant="success" icon="bi bi-check-lg" @click="saveData" />

    <!-- Large button -->
    <BaseButton label="Delete" variant="danger" size="lg" @click="deleteItem" />


   


  </div>
</template>

<script setup lang="ts">
const doSomething = () => alert('Button clicked!')
const cancelAction = () => alert('Cancelled')
const saveData = () => alert('Saved!')
const deleteItem = () => alert('Deleted!')
</script>
