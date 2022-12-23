<template>
    <PageTitle title="Firehouses in the Bronx" />

    <FilterOptions />

    <AreaNames v-bind:areas = "this.areas" />

    <section id="postals">
        <div
            class="link"
            v-for="postal in postals"
            :key="postal"
            @click="filterByPostal(postal)"
        >
            {{ postal }}
        </div>
    </section>

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

export default {
    name: "BronxPage",
    data() {
        return {
            postals: [10451, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10459, 10460, 10461, 10462, 10463, 10464, 10465, 10466, 10467, 10469, 10471, 10473, 10474, 10475],
            areas: ["areaBronx1", "areaBronx2", "areaBronx3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/bronx
        // Using remotely -> /bronx
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesBronx")) {
            fetch("http://localhost:4040/bronx")
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
                    localStorage.setItem("housesBronx", housesString);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesBronx");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    methods: {
        filterByPostal(postal) {
            const localHouses = localStorage.getItem("housesBronx");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];
            localHousesParse.map(function(lhp) {
                if (lhp.postcode === `${postal}`) {
                    filteredHouses.push(lhp);
                }
            });
            this.houses = filteredHouses;
        }
    },
    components: {
        PageTitle,
        FilterOptions,
        AreaNames
    }
};
</script>
