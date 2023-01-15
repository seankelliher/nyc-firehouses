<template>
    <section class="filters">
        <p
            @click="showPostals = !showPostals"
            class="common-link">
                Filter by postal code
        </p>
        <figure v-if="showPostals">
            <img src="../../public/expand-less.svg">
        </figure>
        <figure v-if="!showPostals">
            <img src="../../public/expand-more.svg">
        </figure>
    </section>
    <section v-show="showPostals" class="filters">
        <button
            v-for="postal in postals"
            :key="postal"
            @click="$emit('chosenPostalCode', postal), highlightButton($event)"
        >
            {{ postal }}&nbsp;
        </button>
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
    methods: {
        highlightButton($event){
            const buttons = document.querySelectorAll("button");
            const buttonsArray = Array.from(buttons);
            buttonsArray.forEach(function(btn) {
                if (btn.classList.contains("selected") === true) {
                    btn.classList.remove("selected");
                }
            });
            $event.target.classList.add("selected");
        }
    },
    emits: [
        "chosenPostalCode"
    ]
};
</script>