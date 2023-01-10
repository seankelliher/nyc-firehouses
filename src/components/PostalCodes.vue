<template>
    <section id="postals">
        <div
            class="link"
            v-for="postal in postals"
            :key="postal"
            @click="$emit('chosenPostalCode', postal)"
        >
            {{ postal }}
        </div>
    </section>
</template>

<script>

export default {
    name: "PostalCodes",
    components: {},
    props: {
        postals: {
            type: Array,
            required: true
        }
    },
    emits: [
        "chosenPostalCode"
    ]
};
</script>