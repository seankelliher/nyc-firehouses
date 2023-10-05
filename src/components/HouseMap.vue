<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";

// Read only, restricted to single URL.
mapboxgl.accessToken = `${process.env.MAPBOX_FIREHOUSES_TOKEN}`;

let map = ref(null);
const mapContainer = ref(null);


onMounted(() => {
    map = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/sk564673/cln7v3co0076701nsagzl3il6",
        center: [-73.840, 40.702],
        zoom: 10.0
    });

    // Adds + and - controls to top right.
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    // Adds geolocate symbol to top right.
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });
    map.addControl(geolocate, "top-right")

    // Display pop-up when user clicks on marker.
    map.on("click", (event) => {
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(event.point, {
            layers: ["nyc-firehouses-6g84b2"] // Layer with markers.
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
                `<h2>${feature.properties.facilityname}</h2>
                <p>${feature.properties.facilityaddress}<br />
                ${feature.properties.borough}, ${feature.properties.postcode}</p>
                <p>Community Board: ${feature.properties.community_board}<br />
                City Council District: ${feature.properties.community_council}<br />
                Neighborhood: ${feature.properties.nta}</p>`
            )
            .addTo(map);
    });
});

onUnmounted(() => {
    map.remove();
    map = null;
});
</script>

<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
</style>
