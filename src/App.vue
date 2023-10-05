<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import HouseMap from "./components/HouseMap.vue";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
</script>

<template>
    <div id="container">
        <HeaderPart headline="Where is the FDNY in your neighborhood?" />
        <HouseMap />
    </div>
</template>

<style>
    /* Map styles here. Mixed results placing in style.css */
    .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
        border-bottom-color: #ec1423;
    }

    .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
        border-top-color: #ec1423;
    }

    .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
        border-bottom-color: #ec1423;
    }

    .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
        border-bottom-color: #ec1423;
    }

    .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
        border-top-color: #ec1423;
    }

    .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
        border-top-color: #ec1423;
    }

    .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
        border-left-color: #ec1423;
    }

    .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
        border-right-color: #ec1423;
    }

    .mapboxgl-popup-content {
            border: 2px solid #0f86bd;
            border: 2px solid #71787e;
            background: #f6faff; /* darker */
    }
</style>
