<template>
    <header>
        <h1><a href="/">Firehouses in New York City</a></h1>
    </header>

    <FullNav />

    <router-view></router-view>

    <UniFooter />
</template>

<script>
import FullNav from "./components/FullNav.vue";
import UniFooter from "./components/UniFooter.vue";

export default {
    name: "App",
    components: {
        FullNav,
        UniFooter
    }
};
</script>
