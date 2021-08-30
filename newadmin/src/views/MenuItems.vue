<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-list-alt"></i>
      </span>
      {{ $t("menuItems.pagename") }}
    </h2>

    <div class="columns">
      <div class="column is-4">
        <MenuGroups :menuGroups="menuGroups" />
      </div>
      <div class="column is-8">
        <MenuItems :menuGroups="menuGroups" :menuItems="menuItems" />
      </div>
    </div>
  </section>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";

import MenuGroups from "@/components/MenuGroups/MenuGroups";
import MenuItems from "@/components/MenuItems/MenuItems";

export default {
  name: "Menu",
  mixins: [
    makeFindMixin({ service: "menu-groups" }),
    makeFindMixin({ service: "menu-items" }),
  ],
  components: {
    MenuGroups,
    MenuItems,
  },

  computed: {
    menuGroupsParams() {
      return {};
    },
    menuItemsParams() {
      return {};
    },
  },

  methods: {
    handleSelect(value) {
      console.log(value);
      // this.$router.push({ query: { place: value } });
    },
  },
};
</script>
