<template>
    <section>
        <p>Find your firehouse by <span @click="showNeighborhoods = !showNeighborhoods">neighborhood</span>.</p>
    </section>
    <section v-show="showNeighborhoods">
        <button
            v-for="neighborhood in neighborhoods"
            :key="neighborhood.index"
            @click="$emit('chosenNeighborhood', neighborhood), highlightButton($event)"
        >
            {{ neighborhood }}&nbsp;
        </button>
    </section>
</template>

<script>

export default {
    name: "NeighborHoods",
    data() {
        return {
            showNeighborhoods: false
        };
    },
    components: {},
    props: {
        neighborhoods: {
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
        "chosenNeighborhood"
    ]
};
</script>