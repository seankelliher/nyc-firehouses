<template>
    <h3 @click="showPostals = !showPostals">Postal Codes</h3>
    <section v-show="showPostals">
        <div
            class="postal"
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
    data() {
        return {
            showPostals: false
        };
    },
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