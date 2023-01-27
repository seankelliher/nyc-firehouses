<template>
    <section class="filters">
        <p
            @click="showPostals = !showPostals"
            @keydown.enter="showPostals = !showPostals"
            class="common-link"
            tabindex="0"
        >
            Filter by postal code
        </p>
        <figure class="icon" v-if="showPostals">
            <img src="../../public/expand-less.svg" alt="expand less icon">
        </figure>
        <figure class="icon" v-if="!showPostals">
            <img src="../../public/expand-more.svg" alt="expand more icon">
        </figure>
    </section>
    <Transition name="toggle-fade">
        <section v-show="showPostals" class="filters">
            <button
                v-for="postal in postals"
                :key="postal"
                @click="$emit('chosenPostalCode', postal), highlightButton($event)"
            >
                {{ postal }}&nbsp;
            </button>
        </section>
    </Transition>
</template>

<script>

export default {
    name: "PostalCodes",
    data() {
        return {
            showPostals: false
        };
    },
    components: {},
    props: {
        postals: {
            type: Array,
            required: true
        }
    },
    methods: {
        highlightButton($event){
            const buttons = document.querySelectorAll("button");
            const buttonsArray = Array.from(buttons);
            buttonsArray.forEach(function(btn) {
                if (btn.classList.contains("selected") === true) {
                    btn.classList.remove("selected");
                }
            });
            $event.target.classList.add("selected");
        }
    },
    emits: [
        "chosenPostalCode"
    ]
};
</script>
