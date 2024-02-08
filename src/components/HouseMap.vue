<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";

// Read only, restricted to requests from single URL.
mapboxgl.accessToken = "pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xuN2w4aTh1MG1vYzJybDhpZHRsZHI4NyJ9.nVK4D7Ukw99Y89dpIKdKzg";

let map;
const mapContainer = ref(null);

// Style is nyc-firehouses-streets.
onMounted(() => {
    map = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/sk564673/clscekzo202ye01pbb4sp8um7",
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
    map.addControl(geolocate, "top-right");

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

        // Pop up settings and content.
        new mapboxgl.Popup({ offset: [0, -15] })
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
    <section>
        <p>The FDNY operates 219 firehouses within its five boroughs and responds to more than a million emergencies every year. Since its inception in 1865, the Department has helped lead efforts to make New York the safest big city in the nation.</p>
    </section>
</template>

<style scoped>
</style>