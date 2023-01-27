<template>

    <PageTitle title="Welcome" />

    <section>

        <p>The Fire Department of the City of New York (FDNY) is the largest Fire Department in the United States and universally is recognized as the world's busiest and most highly skilled emergency response agency. The Department's main goal is to provide fire protection, emergency medical care, and other critical public safety services to residents and visitors in the five boroughs.</p>

    </section>

    <figure class="portrait">
        <img src="../../public/laura-kavanagh-portrait.jpg">
        <figcaption>Laura Kavanagh, Fire Commissioner, FDNY</figcaption>
    </figure>

    <section>
        <p>Since its inception in 1865, FDNY has helped lead efforts to make New York the safest big city in the nation. This accomplishment requires a steadfast and daily commitment to maintaining the Department's core values. To that end, FDNY members are sworn to serve and protect life and property.</p>

        <p>FDNY not only responds to more than a million emergencies every year, its personnel also strive to prevent them by continually educating the public in fire, life safety and disaster preparedness, along with enforcing public safety codes.</p>

        <p><strong>Use this app to locate your local firehouse. Start by choosing a borough.</strong></p>
    </section>



</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
    name: "HomePage",
    components: {
        PageTitle
    }
};
</script>