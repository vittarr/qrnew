import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

function logout(to, from, next) {
  store.dispatch("auth/logout");
  next({ name: "Auth" });
}

const routes = [
  { path: "", redirect: "places" },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "Login", requiresAuth: false, roles: [] },
    component: () => import("../views/Auth"),
  },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: logout,
  },
  {
    path: "/places",
    name: "Places",
    meta: { layout: "Main", requiresAuth: true, roles: ["owner"] },
    component: () => import("../views/Place"),
  },
  // {
  //   path: "/workers",
  //   name: "Workers",
  //   meta: { layout: "Main", requiresAuth: true, roles: ["owner"] },
  //   component: () => import("../views/Workers"),
  // },
  {
    path: "/menuitems",
    name: "Menu",
    meta: { layout: "Main", requiresAuth: true, roles: ["owner", "admin"] },
    component: () => import("../views/MenuItems"),
  },
  // {
  //   path: "/orders",
  //   name: "Orders",
  //   meta: { layout: "Main", requiresAuth: true, roles: ["owner", "admin", "waiter"] },
  //   component: () => import("../views/Orders"),
  // },
  // {
  //   path: "/waiters",
  //   name: "Waiters",
  //   meta: { layout: "Main", requiresAuth: true, roles: ["owner", "admin", "waiter"] },
  //   component: () => import("../views/Waiters"),
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   meta: { layout: "Main", requiresAuth: true, roles: ["owner"] },
  //   component: () => import("../views/Dashboard"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "is-active",
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

router.beforeEach(async (to, from, next) => {
  const placesInStore = store.getters["places/list"];
  console.log("placesInStore", placesInStore);
  if (placesInStore.length === 0) {
    store.dispatch("places/find", { query: {} }).then(() => next());
  } else {
    next();
  }
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const authenticated = store.getters["auth/isAuthenticated"];
  if (requiresAuth && !authenticated) {
    next({ path: "Auth", replace: true });
  } else {
    next();
  }
});

// https://stackoverflow.com/questions/45091380/vue-router-keep-query-parameter-and-use-same-view-for-children
router.beforeEach((to, from, next) => {
  function hasQueryParams(route) {
    return !!Object.keys(route.query).length;
  }
  const { params, query } = from;
  const { name } = to;
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name, params, query });
  } else {
    next();
  }
});

export default router;
