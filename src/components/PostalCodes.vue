<template>
    <section>
        <p>Find your firehouse by <span @click="showPostals = !showPostals">postal code</span>.</p>
    </section>
    <section v-show="showPostals">
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