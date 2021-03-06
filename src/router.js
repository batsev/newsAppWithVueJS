import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Post from "@/views/Post";
import News from "@/views/News";

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
      component: News
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: News
    },
    {
      path: "/health",
      name: "health",
      component: News
    },
    {
      path: "/science",
      name: "science",
      component: News
    },
    {
      path: "/sports",
      name: "sports",
      component: News
    },
    {
      path: "/technology",
      name: "technology",
      component: News
    },
    {
      path: "/post",
      component: Post
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
