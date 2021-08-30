<template>
  <div>
    <section class="columns is-gapless is-fullheight mb-0">
      <div class="column has-background-grey-lighter is-narrow">
        <aside class="menu">
          <div class="menu__header">
            <div class="menu__logo">
              <span class="icon is-large">
                <i class="far fa-2x fa-user"></i>
              </span>
            </div>
            <h1 class="title py-1 mb-4">
              {{ user && user.email.split("@")[0] }}
            </h1>
            <div class="tags has-addons">
              <span class="tag is-dark"> {{ $t("menu.userRole") }} </span>
              <span class="tag is-primary">
                <!-- {{ (claims && claims.role) || "not set" }} -->
              </span>
            </div>
            <div class="tags has-addons">
              <span class="tag is-dark"> {{ $t("menu.userPlace") }} </span>
              <span class="tag is-primary">
                <!-- {{ (claims && claims.place) || "not set" }} -->
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Places</label>
            <div class="select">
              <select v-model="mixinPlaceSelected">
                <option value="">Select place</option>
                <option
                  v-for="place in mixinPlaces"
                  :key="place.id"
                  :value="place.id"
                >
                  {{ place.name }}
                </option>
              </select>
            </div>
          </div>
          <ul class="menu-list">
            <li>
              <template v-for="link in links">
                <router-link
                  :to="link.to"
                  :key="link.to"
                  class="is-flex is-align-items-center active"
                >
                  <span class="icon pr-2">
                    <i :class="link.icon"></i>
                  </span>
                  {{ $t(link.name) }}
                </router-link>
              </template>
            </li>
          </ul>
        </aside>
      </div>

      <div class="column has-background-white-ter">
        <Loader v-if="false" />
        <router-view v-else />
      </div>
    </section>

    <Footer />
    <div
      class="content has-text-centered has-background-grey has-text-white-ter"
    >
      <strong class="has-text-white-ter">BestMenu</strong> by
      <a class="has-text-white-ter" href="">BestMenu inc.</a>. Created for your
      and your customers convinience
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mixinPlaceSelect } from "../mixins/mixins";

import Loader from "@/components/Loader";
import Footer from "./Footer";

export default {
  name: "Main",
  components: { Loader, Footer },
  mixins: [mixinPlaceSelect],
  data() {
    return {
      date: new Date(),
      links: [
        {
          name: "menu.menuPlace",
          to: "/places",
          icon: "fas fa-map-marked",
          roles: ["owner"],
        },
        {
          name: "menu.menuWorkers",
          to: "/workers",
          icon: "fas fa-users",
          roles: ["owner"],
        },
        {
          name: "menu.menuMenuItems",
          to: "/menuitems",
          icon: "fas fa-list-alt",
          roles: ["owner", "admin"],
        },
        {
          name: "menu.menuOrders",
          to: "/orders",
          icon: "fas fa-tasks",
          roles: ["owner", "admin", "waiter"],
        },
        {
          name: "menu.menuWaiters",
          to: "/waiters",
          icon: "fas fa-child",
          roles: ["owner", "admin", "waiter"],
        },
        {
          name: "menu.menuDashboard",
          to: "/dashboard",
          icon: "fas fa-chart-bar",
          roles: ["owner"],
        },
        {
          name: "menu.menuLogout",
          to: "/logout",
          icon: "fas fa-sign-out-alt",
          roles: ["owner"],
        },
      ],
    };
  },

  mounted() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  },

  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: sticky;
  overflow-y: auto;
  top: 0;
  bottom: 0;
}
.menu__header {
  text-align: center;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu__logo {
  margin: 0 auto;
  border: 1px solid gray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: wheat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>