<script setup>
import Card from './Card.vue';
import { reactive, computed, watch, ref } from 'vue';
import { getLatestPosts } from '../apiService';

const data = reactive({
  cards: [],
  text: ''
});


const handler = async () => {
  data.cards = await getLatestPosts();
};

const filteredCards = computed(() => {
  return data.cards.filter((el) => (data.text ?
    el.title.toLowerCase().includes(data.text.toLowerCase()) :
    el
  ));
});

</script>
<template>
  <input type="text" v-model="data.text" />
  <button @click="handler">Load new posts</button>
  <Card v-for="card in filteredCards">
    <template #title>{{ card.title }}</template>
    <template #author>{{ card.by }}</template>
    <template #date>{{ new Date(card.time * 1000).toLocaleDateString() }}</template>
  </Card>
</template>
