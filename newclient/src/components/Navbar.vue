<template>
  <nav
    v-show="getUserUid && place"
    class="navbar has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand is-flex is-justify-content-space-between">
        <router-link class="navbar-item" :to="{ name: 'Menu' }">
          <!-- <img v-if="place.logoImage" :src="place.logoImage" /> -->
          <img src="@/assets/logo.png" />
        </router-link>
        <router-link
          v-if="getOrderQty"
          class="navbar-item"
          :to="{ name: 'Cart' }"
        >
          <span class="icon"> <i class="fas fa-lg fa-shopping-cart"></i> </span>
          <div class="tag">
            {{ getOrderQty }}
          </div>
        </router-link>

        <a
          role="button"
          class="navbar-burger mx-0"
          :class="{ 'is-active': showMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <transition name="fade">
        <div
          class="navbar-menu"
          :class="{ 'is-active': showMenu }"
          @click="toggleMenu"
        >
          <div class="navbar-end has-text-weight-bold">
            <router-link
              class="navbar-item"
              v-if="getUserUid"
              :to="{ name: 'Menu' }"
            >
              Menu
            </router-link>
            <hr class="navbar-divider" />

            <router-link
              class="navbar-item"
              v-if="getUserUid"
              :to="{ name: 'Cart' }"
            >
              Cart
            </router-link>
            <hr class="navbar-divider" />

            <router-link
              class="navbar-item"
              v-if="getUserUid"
              :to="{ name: 'Orders' }"
            >
              Orders
            </router-link>
            <hr class="navbar-divider" />

            <router-link
              class="navbar-item"
              v-if="getUserUid"
              :to="{ name: 'Waiter' }"
            >
              Call waiter
            </router-link>
            <hr class="navbar-divider" />

            <div class="navbar-item">
              <figure class="image is-24x24">
                <img src="@/assets/icon-ua.png" />
              </figure>
            </div>

            <div class="navbar-item">
              <figure class="image is-24x24">
                <img src="@/assets/icon-us.png" />
              </figure>
            </div>

            <div class="navbar-item" v-if="getUserUid">
              <a class="button is-light" @click="logout">
                <span class="icon mr-2">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                Log-off
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: true,
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(["getOrderQty", "getUserUid"]),
    ...mapState(["place"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
    },
    console(value) {
      console.log(value);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
}
.icon {
  position: relative;
  .tag {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10000;
  }
}

// https://github.com/jgthms/bulma/issues/2474
.navbar-menu.is-active {
  position: absolute;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
