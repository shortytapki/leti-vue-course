<script setup>
const props = defineProps(["title", "author", "date"]);
</script>

<template>
    <div class="card">
        <h2>
            <slot name="title">{{ title }}</slot>
        </h2>
        <p>Posted by
            <strong>
                <slot name="author">{{ author }}</slot>
            </strong>
            at <slot name="date">{{ date }}</slot>
        </p>
    </div>
</template>
<style>
.card {
    width: auto;
    padding: 30px;
    border: 3px solid black;
    border-radius: 5px;
    margin-bottom: 20px;
}

h2 {
    font-size: 30px;
    font-weight: bold;
}</style>