<script setup>

import { watchEffect, ref} from 'vue';

const time = ref(new Date().toLocaleTimeString('ru-RU'));

watchEffect(() => {
    setInterval(() => {
        time.value = new Date().toLocaleTimeString('ru-RU');
    }, 1000)
})

const vTime = {

    bedoreMount: (el) => {
        const [secondArr, minuteArr, hourArr] = Array.from(el.querySelectorAll('.pt'));
        const now = new Date();
        secondArr.style.transform = `rotate(${now.getSeconds() * 6 - 90}deg)`
        minuteArr.style.transform = `rotate(${now.getMinutes() * 6 - 90}deg)`
        hourArr.style.transform = `rotate(${now.getHours() * 30 - 90}deg)`
    },

    mounted: (el) => {
        const [secondArr, minuteArr, hourArr] = Array.from(el.querySelectorAll('.pt'));
        setInterval(() => {
            const now = new Date();
            secondArr.style.transform = `rotate(${now.getSeconds() * 6 - 90}deg)`
            minuteArr.style.transform = `rotate(${now.getMinutes() * 6 - 90}deg)`
            hourArr.style.transform = `rotate(${now.getHours() * 30 - 90}deg)`
        }, 1000)
    },

}
</script>

<template>
    <span class="time">{{ time }}</span>
    <div class="container" v-time>
        <div class="second-pt pt" ref="secondArr"></div>
        <div class="minute-pt pt"></div>
        <div class="hour-pt pt"></div>
    </div>
</template>



<style scoped>
.time {
    display: block;
    font-size: 52px;
    margin-bottom: 30px;
}

.container {
    height: 400px;
    width: 400px;
    position: relative;
    border-radius: 50%;
    border: 3px solid #000;
    padding: 2rem;
}

.pt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
}

.minute-pt {
    width: 150px;
    background-color: #000;
    height: 4px;
}

.second-pt {
    width: 200px;
    height: 3px;
    background-color: red;
}

.hour-pt {
    width: 100px;
    height: 5px;
    background-color: #000;
}
</style>