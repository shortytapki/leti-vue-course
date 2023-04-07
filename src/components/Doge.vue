<script setup>
import { Teleport, Transition } from 'vue'
import image from './doge.png'

defineProps(['dogeInDaHouse'])
</script>
    

<template>
    <Teleport to="#doge">
        <Transition>
            <div class="doge-container" v-if="dogeInDaHouse">
                <p>Sup King</p>
                <img :src="image" />
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.doge-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 10px;
    bottom: 0;
}

.v-enter-active,
.v-leave-active {
    transition: left 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    left: -300px;
}
</style>