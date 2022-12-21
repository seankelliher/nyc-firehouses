<template>
    <header>
        <h1><a href="/">Firehouses in New York City</a></h1>
    </header>
    <FullNav />
  <!--<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>-->
<router-view></router-view>
</template>

<script>
import FullNav from "./components/FullNav.vue";

export default {
    name: "App",
    components: {
        FullNav
    }
};
</script>
