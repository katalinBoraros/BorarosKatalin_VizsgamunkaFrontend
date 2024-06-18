import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import LoginView from "../views/LoginView.vue";
import MyServicesView from "../views/MyServicesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "ServicesView",
      component: ServicesView,
    },
    {
      path: "/registration",
      name: "RegistrationView",
      component: RegistrationView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/myServices",
      name: "MyServicesView",
      component: MyServicesView,
    },
  ],
});

export default router;
