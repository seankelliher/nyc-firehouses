<template>
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

export default {
    name: "FireHouses",
    props: {
        houses: {
            type: Array,
            required: true
        }
    }
};
</script>