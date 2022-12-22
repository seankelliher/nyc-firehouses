<template>
    <PageTitle title="Firehouses in the Queens" />

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
    name: "QueensPage",
    data() {
        return {
            postals: [11004, 11101, 11102, 11103, 11105, 11354, 11355, 11356, 11357, 11358, 11359, 11361, 11363, 11364, 11365, 11366, 11368, 11369, 11372, 11373, 11375, 11377, 11378, 11379, 11385, 11412, 11413, 11414, 11417, 11418, 11419, 11421, 11422, 11423, 11429, 11432, 11433, 11435, 11436, 11691, 11693, 11694, 11695],
            areas: ["areaQueens1", "areaQueens2", "areaQueens3"],
            houses: []
        };
    },
    created() {
        // Using locally -> http://localhost:4040/queens
        // Using remotely -> /queens
        fetch("http://localhost:4040/queens")
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