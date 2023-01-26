<template>
    <PageTitle title="404 - Not Found" />

    <p>The page you requested does not exist.</p>

</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
    name: "NotFound",
    components: {
        PageTitle
    }
};
</script>
