<template>
    <PageTitle title="In Brooklyn" />

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
    name: "BrooklynPage",
    data() {
        return {
            postals: [11201, 11203, 11204, 11205, 11206, 11207, 11208, 11209, 11210, 11211, 11212, 11213, 11214, 11215, 11216, 11217, 11218, 11219, 11220, 11221, 11222, 11223, 11224, 11225, 11226, 11228, 11229, 11230, 11231, 11232, 11233, 11234, 11235, 11236, 11237, 11238, 11249],
            neighborhoods: ["Bedford Stuyvesant - Crown Heights", "Bensonhurst - Bay Ridge", "Borough Park", "Canarsie - Flatlands", "Coney Island - Sheepshead Bay", "Downtown - Heights - Park Slope", "East Flatbush - Flatbush", "East New York", "Greenpoint", "Sunset Park", "Williamsburg - Bushwick"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/brooklyn
        // Using remotely -> /brooklyn
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesBrooklyn")) {
            fetch("/bk")
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
                    localStorage.setItem("housesBrooklyn", housesString);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If localStorage is not empty, get data from there.
            const localHouses = localStorage.getItem("housesBrooklyn");
            const localHousesParse = JSON.parse(localHouses);
            this.houses = localHousesParse;
        }
    },
    methods: {
        filterByPostal(postalCode) {
            const localHouses = localStorage.getItem("housesBrooklyn");
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
            const localHouses = localStorage.getItem("housesBrooklyn");
            const localHousesParse = JSON.parse(localHouses);
            let filteredHouses = [];

            //const expr = neighborhoodName;
            let neighborHoodCodes = [];
            switch (neighborhoodName) {
            case "Greenpoint" :
                neighborHoodCodes = [11211, 11222]; // Greenpoint
                break;
            case "Downtown - Heights - Park Slope" :
                neighborHoodCodes = [11201, 11205, 11215, 11217, 11231]; // Downtown - Heights - Park Slope
                break;
            case "Bedford Stuyvesant - Crown Heights" :
                neighborHoodCodes = [11213, 11212, 11216, 11233, 11238]; // Bedford Stuyvesant - Crown Heights
                break;
            case "East New York" :
                neighborHoodCodes = [11207, 11208]; // East New York
                break;
            case "Sunset Park" :
                neighborHoodCodes = [11220, 11232]; // Sunset Park
                break;
            case "Borough Park" :
                neighborHoodCodes = [11204, 11218, 11219, 11230]; // Borough Park
                break;
            case "East Flatbush - Flatbush" :
                neighborHoodCodes = [11203, 11210, 11225, 11226]; // East Flatbush - Flatbush
                break;
            case "Canarsie - Flatlands" :
                neighborHoodCodes = [11234, 11236, 11239]; // Canarsie - Flatlands
                break;
            case "Bensonhurst - Bay Ridge" :
                neighborHoodCodes = [11209, 11214, 11228]; // Bensonhurst - Bay Ridge
                break;
            case "Coney Island - Sheepshead Bay" :
                neighborHoodCodes = [11223, 11224, 11229, 11235]; // Coney Island - Sheepshead Bay
                break;
            case "Williamsburg - Bushwick" :
                neighborHoodCodes = [11206, 11221, 11237]; // Williamsburg - Bushwick
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
