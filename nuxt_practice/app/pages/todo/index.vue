<template>
  <div class="container py-4">
    <div class="card shadow-sm border-0 p-4">
      <h4 class="mb-3 fw-semibold text-dark">My Tasks</h4>

      <!-- Input Field -->
      <div class="input-group mb-3">
        <input
          v-model="newTask"
          type="text"
          class="form-control"
          placeholder="Enter a new task..."
          aria-label="New task"
          @keyup.enter="addTask"
        />
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!newTask.trim()"
          @click="addTask"
        >
          Add
        </button>
      </div>

      <!-- Task List -->
      <ul class="list-group">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
         <span>{{ index + 1 }}. {{ task }}</span>

          <button
            class="btn btn-sm btn-outline-danger"
            @click="removeTask(index)"
          >
            Remove
          </button>
        </li>

        <!-- Empty State -->
        <li
          v-if="tasks.length === 0"
          class="list-group-item text-muted text-center"
        >
          No tasks available
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  const trimmed = newTask.value.trim();
  if (!trimmed) return;
  tasks.value.push(trimmed);
  newTask.value = "";
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style scoped>
.container {
  max-width: 500px;
}
.list-group-item {
  transition: all 0.2s ease;
}
.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>
