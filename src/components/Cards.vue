<script setup>
import { reactive, computed } from 'vue';

const data = reactive({
  cards: ['JS', 'C', 'Java', 'PHP', 'Python'],
  text: '',
});
const filteredCards = computed(() => {
  return data.cards.filter((el) => (data.text ? el.includes(data.text) : el));
});
</script>
<template>
  <input type="text" v-model="data.text" />
  <div v-for="card in filteredCards">
    {{ card }}
  </div>
</template>
