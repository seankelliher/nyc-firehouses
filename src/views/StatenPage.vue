<template>
    <PageTitle title="Firehouses in the Staten Island" />

    <PostalCodes
        :postals="postals"
        @chosenPostalCode="(postalCode) => filterByPostal(postalCode)"
    />

    <FireHouses
        :houses="houses"
    />

</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import PostalCodes from "../components/PostalCodes.vue";
import FireHouses from "../components/FireHouses.vue";

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
    methods: {
        filterByPostal(postalCode) {
            const localHouses = localStorage.getItem("housesStaten");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];
            localHousesParse.map(function(lhp) {
                if (lhp.postcode === `${postalCode}`) {
                    filteredHouses.push(lhp);
                }
            });
            this.houses = filteredHouses;
        }
    },
    components: {
        PageTitle,
        PostalCodes,
        FireHouses
    }
};
</script>
