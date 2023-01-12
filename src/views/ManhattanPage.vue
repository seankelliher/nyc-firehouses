<template>
    <PageTitle title="Firehouses in the Manhattan" />

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
    name: "ManhattanPage",
    data() {
        return {
            postals: [10001, 10002, 10003, 10005, 10006, 10007, 10009, 10011, 10012, 10013, 10014, 10016, 10018, 10019, 10021, 10022, 10023, 10024, 10025, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10038, 10065],
            areas: ["areaManhattan1", "areaManhattan2", "areaManhattan3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/manhattan
        // Using remotely -> /manhattan
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesManhattan")) {
            fetch("http://localhost:4040/manhattan")
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
        }
    },
    components: {
        PageTitle,
        PostalCodes,
        FireHouses
    }
};
</script>
