<script setup>
defineProps({
    headline: {
        type: String,
        required: true
    }
});
</script>

<template>
    <header>
        <h1>{{ headline }}</h1>
    </header>
</template>

<style scoped>
</style>