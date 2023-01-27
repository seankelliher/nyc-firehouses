<template>
    <nav>
        <div class="nav-link"><router-link to="/bronx">Bronx</router-link></div>
        <div class="nav-link"><router-link to="/brooklyn">Brooklyn</router-link></div>
        <div class="nav-link"><router-link to="/manhattan">Manhattan</router-link></div>
        <div class="nav-link"><router-link to="/queens">Queens</router-link></div>
        <div class="nav-link"><router-link to="/staten">Staten Island</router-link></div>
    </nav>
</template>

<script>

export default {
    name: "FullNav",
    components: {},
    props: {}
};
</script>
