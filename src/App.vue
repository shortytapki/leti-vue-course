<script setup>
import Cards from './components/Cards.vue';
import Doge from './components/Doge.vue';

import { ref } from 'vue';

  const dogeInDaHouse = ref(false);
  
  const dogeShower = () => {
    dogeInDaHouse.value = true;
    setTimeout(() => dogeInDaHouse.value = false, 3000);
  }
</script>

<template>
  <Cards />
  <Doge :dogeInDaHouse="dogeInDaHouse"/>
  <button @click="dogeShower">Show Doge!!!</button>
</template>
