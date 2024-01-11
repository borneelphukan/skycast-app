<template>
  <div id="app">
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from './stores/counter';

export default defineComponent({
  setup() {
    // Use the counter store
    const counterStore = useCounterStore();

    const increment = () => counterStore.increment();
    const decrement = () => counterStore.decrement();

    return {
      counterStore,
      increment,
      decrement,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
}
</style>
