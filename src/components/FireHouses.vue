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
            <dd>
                <figure class="icon">
                    <a :href="`https://www.google.com/maps/@${house.latitude},${house.longitude},18z/`" target="_blank"><img src="../../public/map.svg" alt="map icon"></a>
                </figure>
            </dd>
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
