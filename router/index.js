import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/views/HomePage.vue";
import BronxPage from "../src/views/BronxPage.vue";
import BrooklynPage from "../src/views/BrooklynPage.vue";
import ManhattanPage from "../src/views/ManhattanPage.vue";
import QueensPage from "../src/views/QueensPage.vue";
import StatenPage from "../src/views/StatenPage.vue";
import NotFound from "../src/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/bronx",
        name: "Bronx",
        component: BronxPage
    },
    {
        path: "/brooklyn",
        name: "Brooklyn",
        component: BrooklynPage
    },
    {
        path: "/manhattan",
        name: "Manhattan",
        component: ManhattanPage
    },
    {
        path: "/queens",
        name: "Queens",
        component: QueensPage
    },
    {
        path: "/staten",
        name: "Staten",
        component: StatenPage
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;