<template>
    <PageTitle title="Firehouses in the Manhattan" />

    <FilterOptions />

    <AreaNames v-bind:areas = "this.areas" />

    <PostalCodes v-bind:postals = "this.postals" />

    <section
            class="fire-house"
            v-for="house in houses"
            :key="house.facilityname"
        >
            <dl>
                <dt>{{ house.facilityname }}</dt>
                <dd>{{ house.facilityaddress }}</dd>
                <dd>{{ house.borough }}, {{ house.postcode }}</dd>
                <dd>Latitude: {{ house.latitude }}</dd>
                <dd>Longitude: {{ house.longitude }}</dd>
            </dl>
    </section>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import FilterOptions from "../components/FilterOptions.vue";
import AreaNames from "../components/AreaNames.vue";
import PostalCodes from "../components/PostalCodes.vue";

export default {
    name: "ManhattanPage",
    data() {
        return {
            postals: [30022, 30023, 30024, 30025],
            areas: ["areaManhattan1", "areaManhattan2", "areaManhattan3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/manhattan
        // Using remotely -> /manhattan
        fetch("http://localhost:4040/manhattan")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response.status);
                }
            })
            .then((data) => {
                this.houses = data.houses;
                console.log(this.houses);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    components: {
        PageTitle,
        FilterOptions,
        AreaNames,
        PostalCodes
    }
};
</script>