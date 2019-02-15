import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Business from "./views/Business.vue";
import Entertainment from "./views/Entertainment.vue";
import Health from "./views/Health.vue";
import Science from "./views/Science.vue";
import Sports from "./views/Sports.vue";
import Technology from "./views/Technology.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/business",
      name: "business",
      component: Business
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: Entertainment
    },
    {
      path: "/health",
      name: "health",
      component: Health
    },
    {
      path: "/science",
      name: "science",
      component: Science
    },
    {
      path: "/sports",
      name: "sports",
      component: Sports
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
