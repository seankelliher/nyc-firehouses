<template>
    <section class="page-title">
        <h2>{{ title }}</h2>
    </section>
</template>

<script>

export default {
    name: "PageTitle",
    components: {},
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>
