import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    name: "Main",
    meta: { requiresAuth: false },
    component: () => import("../views/Main.vue"),
    children: [
      { path: "", redirect: "intro" },
      {
        path: "intro",
        name: "Intro",
        meta: { requiresAuth: true },
        component: () => import("../views/Intro.vue"),
      },
      {
        path: "review",
        name: "Review",
        meta: { requiresAuth: false },
        component: () => import("../views/Review"),
      },
      {
        path: "noplace",
        name: "Noplace",
        meta: { requiresAuth: false },
        component: () => import("../views/Noplace"),
      },
      {
        path: "menu",
        name: "Menu",
        meta: { requiresAuth: true },
        component: () => import("../views/Menu.vue"),
      },
      // {
      //   path: "cart",
      //   name: "Cart",
      //   meta: { requiresAuth: true },
      //   component: () => import("../views/Cart.vue"),
      // },
      // {
      //   path: "orders",
      //   name: "Orders",
      //   meta: { requiresAuth: true },
      //   component: () => import("../views/Orders.vue"),
      // },
      // {
      //   path: "waiter",
      //   name: "Waiter",
      //   meta: { requiresAuth: true },
      //   component: () => import("../views/Waiter.vue"),
      // },
      {
        path: "auth",
        name: "Auth",
        meta: { requiresAuth: false },
        component: () => import("../views/Auth.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    console.log("beforeEach to Auth");
    next({ name: "Auth" });
  } else {
    console.log("beforeEach to Next");
    next();
  }
});

router.beforeEach((to, from, next) => {
  const { id = null } = to.params;
  if (to.name === "Noplace") {
    next();
  } else {
    store
      .dispatch("places/find", { query: { id: id } })
      .then(() => {
        console.log("ids length", store.state.places.ids.length);
        store.state.places.ids.length ? next() : next({ name: "Noplace" });
      })
      .catch(() => {
        next({ name: "Noplace" });
      });
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
