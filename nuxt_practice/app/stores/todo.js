import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false,      // initial fetch
    loadingMore: false,  // for load more button
    error: null,
    limit: 10,
    page: 1,
    hasMore: true,
  }),

  getters: {
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    pendingTodos: (state) => state.todos.filter(todo => !todo.completed)
  },

  actions: {
    async fetchTodos(reset = false) {
      if (this.loading || this.loadingMore) return

      if (reset) {
        this.page = 1
        this.todos = []
        this.hasMore = true
        this.loading = true
      } else {
        this.loadingMore = true
      }

      this.error = null

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_limit=${this.limit}&_page=${this.page}`
        )
        const newTodos = response.data

        if (newTodos.length < this.limit) this.hasMore = false

        this.todos = [...this.todos, ...newTodos]
        this.page++
      } catch (err) {
        console.error(err)
        this.error = err.message || 'Failed to fetch todos'
      } finally {
        this.loading = false
        this.loadingMore = false
      }
    }
  }
})
