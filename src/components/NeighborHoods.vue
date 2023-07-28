<template>
    <section class="filters">
        <p
            @click="showNeighborhoods = !showNeighborhoods"
            @keydown.enter="showNeighborhoods = !showNeighborhoods"
            class="filter-txt"
            tabindex="0"
        >
            Filter by neighborhood
        </p>
        <figure class="icon" v-if="showNeighborhoods">
            <img src="/expand-less.svg" alt="expand less icon">
        </figure>
        <figure class="icon" v-if="!showNeighborhoods">
            <img src="/expand-more.svg" alt="expand more icon">
        </figure>
    </section>
    <Transition name="toggle-fade">
        <section v-show="showNeighborhoods" class="filters">
            <button
                v-for="neighborhood in neighborhoods"
                :key="neighborhood.index"
                @click="$emit('chosenNeighborhood', neighborhood), highlightButton($event)"
            >
                {{ neighborhood }}&nbsp;
            </button>
        </section>
    </Transition>
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
