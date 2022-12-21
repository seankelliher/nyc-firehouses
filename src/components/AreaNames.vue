<template>
    <section id="areas">
        <div class="link" v-for="area in areas" :key="area">{{ area }}</div>
    </section>
</template>

<script>

export default {
    name: "AreaNames",
    components: {},
    props: {
        areas: {
            type: Array,
            required: true
        }
    }
};
</script>