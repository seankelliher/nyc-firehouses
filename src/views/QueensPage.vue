<template>
    <PageTitle title="In Queens" />

    <PostalCodes
        :postals="postals"
        @chosenPostalCode="(postalCode) => filterByPostal(postalCode)"
    />

    <NeighborHoods
        :neighborhoods="neighborhoods"
        @chosenNeighborhood="(neighborhoodName) => filterByNeighborhood(neighborhoodName)"
    />

    <FireHouses
        :houses="houses"
    />

</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import PostalCodes from "../components/PostalCodes.vue";
import NeighborHoods from "../components/NeighborHoods.vue";
import FireHouses from "../components/FireHouses.vue";

export default {
    name: "QueensPage",
    data() {
        return {
            postals: [11004, 11101, 11102, 11103, 11105, 11354, 11355, 11356, 11357, 11358, 11359, 11361, 11363, 11364, 11365, 11366, 11368, 11369, 11372, 11373, 11375, 11377, 11378, 11379, 11385, 11412, 11413, 11414, 11417, 11418, 11419, 11421, 11422, 11423, 11429, 11432, 11433, 11435, 11436, 11691, 11693, 11694, 11695],
            neighborhoods: ["Bayside - Little Neck", "Flushing - Clearview", "Fresh Meadows", "Jamaica", "Long Island City - Astoria", "Ridgewood - Forest Hills", "Rockaway", "Southeast Queens", "Southwest Queens", "West Queens"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/qn
        // Using remotely -> /qn
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesQueens")) {
            fetch("/qn")
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(`Error: ${response.status}, ${response.statusText}. Please try again later.`);
                    }
                })
                .then((data) => {
                    // Add to houses array in data (above) AND localStorage.
                    this.houses = data.houses;
                    const housesString = JSON.stringify(data.houses);
                    localStorage.setItem("housesQueens", housesString);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesQueens");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    methods: {
        filterByPostal(postalCode) {
            const localHouses = localStorage.getItem("housesQueens");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];
            localHousesParse.map(function(lhp) {
                if (lhp.postcode === `${postalCode}`) {
                    filteredHouses.push(lhp);
                }
            });
            this.houses = filteredHouses;
        },
        filterByNeighborhood(neighborhoodName) {
            const localHouses = localStorage.getItem("housesQueens");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];

            //const expr = neighborhoodName;
            let neighborHoodCodes = [];
            switch (neighborhoodName) {
            case "Long Island City - Astoria" :
                neighborHoodCodes = [11101, 11102, 11103, 11104, 11105, 11106]; // Long Island City - Astoria
                break;
            case "West Queens" :
                neighborHoodCodes = [11368, 11369, 11370, 11372, 11373, 11377, 11378]; // West Queens
                break;
            case "Flushing - Clearview" :
                neighborHoodCodes = [11354, 11355, 11356, 11357, 11358, 11359, 11360]; // Flushing - Clearview
                break;
            case "Bayside - Little Neck" :
                neighborHoodCodes = [11361, 11362, 11363, 11364]; // Bayside - Little Neck
                break;
            case "Ridgewood - Forest Hills" :
                neighborHoodCodes = [11374, 11375, 11379, 11385]; // Ridgewood - Forest Hills
                break;
            case "Fresh Meadows" :
                neighborHoodCodes = [11365, 11366, 11367]; // Fresh Meadows
                break;
            case "Southwest Queens" :
                neighborHoodCodes = [11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421]; // Southwest Queens
                break;
            case "Jamaica" :
                neighborHoodCodes = [11412, 11423, 11432, 11433, 11434, 11435, 11436]; // Jamaica
                break;
            case "Southeast Queens" :
                neighborHoodCodes = [11004, 11005, 11411,  11413, 11422, 11426, 11427, 11428, 11429]; // Southeast Queens
                break;
            case "Rockaway" :
                neighborHoodCodes = [11691, 11692, 11693, 11694, 11695, 11697]; // Rockaway
                break;
            default:
                console.log("Something wrong here.");
            }

            localHousesParse.map(function(lhp) {
                if (neighborHoodCodes.includes(Number(`${lhp.postcode}`)) === true) {
                    filteredHouses.push(lhp);
                }
            });
            this.houses = filteredHouses;
        }
    },
    components: {
        PageTitle,
        PostalCodes,
        NeighborHoods,
        FireHouses
    }
};
</script>
