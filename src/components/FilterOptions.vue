<template>
    <section>
        <div class="link" id="filter-areas" @click="monitor">Filter by Area</div>
        <div class="link" id="filter-postals" @click="monitor">Filter by Postal Code</div>
    </section>
</template>

<script>

export default {
    name: "FilterOptions",
    components: {},
    props: {},
    mounted() {
        this.reset();
    },
    methods: {
        reset: function() {
            const areas = document.getElementById("areas");
            const postals = document.getElementById("postals");
            areas.style.display = "none";
            postals.style.display = "none";
        },
        monitor: function(event) {
            const etid = event.target.id;
            const areas = document.getElementById("areas");
            const postals = document.getElementById("postals");
            const filterAreas = document.getElementById("filter-areas");
            const filterPostals = document.getElementById("filter-postals");
            if (etid === "filter-areas") {
                areas.style.display = "block";
                postals.style.display = "none";
                filterAreas.style.color = "#c62828"; // red 800.
                filterPostals.style.color = "#000";
            }
            if (etid === "filter-postals") {
                areas.style.display = "none";
                postals.style.display = "block";
                filterAreas.style.color = "#000";
                filterPostals.style.color = "#c62828"; // red 800.
            }
        }
    }
};
</script>