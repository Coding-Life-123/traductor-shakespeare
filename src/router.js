import { createRouter, createWebHistory } from "vue-router";
import Bienvenida from "./components/Bienvenida.vue";
import Traductor from "./components/Traductor.vue";

const routes = [
  {
    path: "/",
    name: "Bienvenida",
    component: Bienvenida,
  },
  {
    path: "/traductor",
    name: "Traductor",
    component: Traductor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
