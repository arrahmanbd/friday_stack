<template>
  <div class="container py-5">
    <div class="card shadow-sm border-0 p-4 text-center" style="max-width: 400px; margin: auto;">
      <h3 class="mb-4 fw-semibold">Age Calculator</h3>

      <div class="mb-3">
        <label for="birthdate" class="form-label fw-medium">Select your birth date:</label>
        <input
          id="birthdate"
          type="date"
          v-model="birthdate"
          class="form-control text-center"
        />
      </div>

      <button
        class="btn btn-primary w-100 mt-2"
        @click="calculateAge"
        :disabled="!birthdate"
      >
        Calculate Age
      </button>

      <div v-if="age !== null" class="mt-4">
        <h5>Your age is:</h5>
        <p class="fs-4 fw-bold text-success">{{ age }} years old</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const birthdate = ref("");
const age = ref(null);

const calculateAge = () => {
  if (!birthdate.value) return;
  const today = new Date();
  const birth = new Date(birthdate.value);
  let years = today.getFullYear() - birth.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) years--;

  age.value = years >= 0 ? years : 0;
};
</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
