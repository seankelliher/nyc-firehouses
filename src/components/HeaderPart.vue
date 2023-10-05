<script setup>
defineProps({
    headline: String,
    required: true
})
</script>

<template>
    <header>
        <h1>{{ headline }}</h1>
        <p>Since its inception in 1865, FDNY has helped lead efforts to make New York the safest big city in the nation. The Department operates 219 firehouses within its five boroughs, and responds to more than a million emergencies every year.</p>
    </header>
</template>

<style scoped>
</style>
