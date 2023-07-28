<template>
    <PageTitle title="In the Bronx" />

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
    name: "BronxPage",
    data() {
        return {
            postals: [10451, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10459, 10460, 10461, 10462, 10463, 10464, 10465, 10466, 10467, 10469, 10471, 10473, 10474, 10475],
            neighborhoods: ["Crotona - Tremont", "Fordham - Bronx Park", "High Bridge - Morrisania", "Hunts Point - Mott Haven", "Kingsbridge - Riverdale", "Northeast Bronx", "Pelham - Throgs Neck"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/bx
        // Using remotely -> /bx
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesBronx")) {
            fetch("/bx")
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
                    localStorage.setItem("housesBronx", housesString);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesBronx");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    methods: {
        filterByPostal(postalCode) {
            const localHouses = localStorage.getItem("housesBronx");
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
            const localHouses = localStorage.getItem("housesBronx");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];

            //const expr = neighborhoodName;
            let neighborHoodCodes = [];
            switch (neighborhoodName) {
            case "Kingsbridge - Riverdale" :
                neighborHoodCodes = [10463, 10471]; // Kingsbridge - Riverdale
                break;
            case "Northeast Bronx" :
                neighborHoodCodes = [10466, 10469, 10470, 10475]; // Northeast Bronx
                break;
            case "Fordham - Bronx Park" :
                neighborHoodCodes = [10458, 10467, 10468]; // Fordham - Bronx Park
                break;
            case "Pelham - Throgs Neck" :
                neighborHoodCodes = [10461, 10462, 10464, 10465, 10472, 10473]; // Pelham - Throgs Neck
                break;
            case "Crotona - Tremont" :
                neighborHoodCodes = [10453, 10457, 10460]; // Crotona - Tremont
                break;
            case "High Bridge - Morrisania" :
                neighborHoodCodes = [10451, 10452, 10456]; // High Bridge - Morrisania
                break;
            case "Hunts Point - Mott Haven" :
                neighborHoodCodes = [10454, 10455, 10459, 10474]; // Hunts Point - Mott Haven
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
