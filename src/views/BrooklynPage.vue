<template>
    <PageTitle title="Firehouses in the Brooklyn" />

    <PostalCodes
        :postals="postals"
        @chosenPostalCode="(postalCode) => filterByPostal(postalCode)"
    />

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
import PostalCodes from "../components/PostalCodes.vue";

export default {
    name: "BrooklynPage",
    data() {
        return {
            postals: [11201, 11203, 11204, 11205, 11206, 11207, 11208, 11209, 11210, 11211, 11212, 11213, 11214, 11215, 11216, 11217, 11218, 11219, 11220, 11221, 11222, 11223, 11224, 11225, 11226, 11228, 11229, 11230, 11231, 11232, 11233, 11234, 11235, 11236, 11237, 11238, 11249],
            areas: ["areaBrooklyn1", "areaBrooklyn2", "areaBrooklyn3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/brooklyn
        // Using remotely -> /brooklyn
        // If localStorage is empty, fetch data.
        if (!localStorage.getItem("housesBrooklyn")) {
            fetch("http://localhost:4040/brooklyn")
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
        }
    },
    components: {
        PageTitle,
        PostalCodes
    }
};
</script>
