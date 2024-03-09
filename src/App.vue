<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import RibbonPart from "./components/RibbonPart.vue";
import SectionPart from "./components/SectionPart.vue";
import HouseMap from "./components/HouseMap.vue";
import FooterPart from "./components/FooterPart.vue";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
</script>

<template>
    <div id="container">
        <HeaderPart headline="Fire Department" />
        <RibbonPart headline="Firehouses" />
        <SectionPart />
        <HouseMap />
        <FooterPart />
    </div>
</template>

<style>
    /* Map styles here. Mixed results placing in style.css */
    .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
        border-bottom-color: #004685;
    }

    .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
        border-top-color: #004685;
    }

    .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
        border-bottom-color: #004685;
    }

    .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
        border-bottom-color: #004685;
    }

    .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
        border-top-color: #004685;
    }

    .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
        border-top-color: #004685;
    }

    .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
        border-left-color: #004685;
    }

    .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
        border-right-color: #004685;
    }

    .mapboxgl-popup-content {
            border: 2px solid #656100;
            background: #fff63f; /* darker */
    }
</style>