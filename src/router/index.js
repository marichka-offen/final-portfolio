import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";
import Illustration from "../views/Illustration.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/work",
    name: "work",
    component: Work
  },
  {
    path: "/illustration",
    name: "illustration",
    component: Illustration
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  { path: "*", component: Home }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
