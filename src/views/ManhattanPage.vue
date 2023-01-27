<template>
    <PageTitle title="In Manhattan" />

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
    name: "ManhattanPage",
    data() {
        return {
            postals: [10001, 10002, 10003, 10005, 10006, 10007, 10009, 10011, 10012, 10013, 10014, 10016, 10018, 10019, 10021, 10022, 10023, 10024, 10025, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10038, 10065],
            neighborhoods: ["Central Harlem - Morningside Heights", "Chelsea - Clinton", "East Harlem", "Gramercy Park - Murray Hill", "Greenwich Village - SoHo", "Lower Manhattan", "Union Square - Lower East Side", "Upper East Side", "Upper West Side", "Washington Heights - Inwood"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/manhattan
        // Using remotely -> /manhattan
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesManhattan")) {
            fetch("/manhattan")
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
                    localStorage.setItem("housesManhattan", housesString);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesManhattan");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    methods: {
        filterByPostal(postalCode) {
            const localHouses = localStorage.getItem("housesManhattan");
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
            const localHouses = localStorage.getItem("housesManhattan");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];

            //const expr = neighborhoodName;
            let neighborHoodCodes = [];
            switch (neighborhoodName) {
            case "Washington Heights - Inwood" :
                neighborHoodCodes = [10031, 10032, 10033, 10034, 10040]; // Washington Heights - Inwood
                break;
            case "Central Harlem - Morningside Heights" :
                neighborHoodCodes = [10026, 10027, 10030, 10037, 10039]; // Central Harlem - Morningside Heights
                break;
            case "East Harlem" :
                neighborHoodCodes = [10029, 10035]; // East Harlem
                break;
            case "Upper West Side" :
                neighborHoodCodes = [10023, 10024, 10025]; // Upper West Side
                break;
            case "Upper East Side" :
                neighborHoodCodes = [10021, 10028, 10044, 10128]; // Upper East Side
                break;
            case "Chelsea - Clinton" :
                neighborHoodCodes = [10001, 10011, 10018, 10019, 10020, 10036]; // Chelsea - Clinton
                break;
            case "Gramercy Park - Murray Hill" :
                neighborHoodCodes = [10010, 10016, 10017, 10022]; // Gramercy Park - Murray Hill
                break;
            case "Greenwich Village - SoHo" :
                neighborHoodCodes = [10012, 10013, 10014]; // Greenwich Village - SoHo
                break;
            case "Union Square - Lower East Side" :
                neighborHoodCodes = [10002, 10003, 10009]; // Union Square - Lower East Side
                break;
            case "Lower Manhattan" :
                neighborHoodCodes = [10004, 10005, 10006, 10007, 10038, 10280]; // Lower Manhattan
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