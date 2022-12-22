<template>
    <PageTitle title="Firehouses in the Staten Island" />

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
    name: "StatenPage",
    data() {
        return {
            postals: [10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10310, 10312, 10314],
            areas: ["areaStaten1", "areaStaten2", "areaStaten3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/staten
        // Using remotely -> /staten
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesStaten")) {
            fetch("http://localhost:4040/staten")
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(response.status);
                    }
                })
                .then((data) => {
                    // Add to houses array in data (above) AND localStorage.
                    this.houses = data.houses;
                    const housesString = JSON.stringify(data.houses);
                    localStorage.setItem("housesStaten", housesString);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesStaten");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    components: {
        PageTitle,
        FilterOptions,
        AreaNames,
        PostalCodes
    }
};
</script>