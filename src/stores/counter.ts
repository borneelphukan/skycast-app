import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore',{
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;  // Use this.count instead of this.$state.count
    },
    decrement() {
      this.count--;  // Use this.count instead of this.$state.count
    },
  },
});

// Export the store hook
export function useCounter() {
  return useCounterStore();
}
