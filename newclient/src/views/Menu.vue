<template>
  <div>
    <section class="section has-background-white-ter px-1 py-2">
      <div class="container">
        <!-- <div v-for="group in Object.keys(getMenuItemsGroupped)" :key="group"> -->
        <h2 class="title is-uppercase has-text-centered my-2">{{ group }}</h2>
        <div class="columns is-mobile is-multiline">
          {{ menuItemsGrouped }}
          <!-- <div
              class="
                column
                is-half-mobile is-one-third-tablet is-one-quarter-desctop
              "
              v-for="item in getMenuItemsGroupped[group]"
              :key="item.id"
            >
              <MenuItemRound
                :item="item"
                @itemadd="changeOrderItems({ id: item.id, qty: 1 })"
                @itemremove="changeOrderItems({ id: item.id, qty: -1 })"
                @itemdetails="modalToggle(item.id)"
              />
              <MenuModal
                :item="item"
                :modal="modal"
                @itemadd="changeOrderItems({ id: item.id, qty: 1 })"
                @itemremove="changeOrderItems({ id: item.id, qty: -1 })"
                @close="modalToggle(null)"
              />
            </div> -->
        </div>
        <!-- </div> -->
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";

// import MenuItemImg from "@/components/MenuItemImg";
// import MenuItemRound from "@/components/MenuItemRound";
// import MenuModal from "@/components/MenuModal";
// import Footer from "@/components/Footer";

export default {
  name: "Menu",
  mixins: [
    makeFindMixin({ service: "menu-items", watch: true }),
    makeFindMixin({ service: "menu-groups", watch: true }),
  ],

  components: {
    // MenuItemRound,
    // MenuModal,
    // Footer,
  },
  data() {
    return {
      modal: {
        id: null,
      },
    };
  },

  computed: {
    menuItemsParams() {
      return { query: { placeId: parseInt(this.$route.params.id) } };
    },
    menuGroupsParams() {
      return { query: { placeId: parseInt(this.$route.params.id) } };
    },

    menuItemsGrouped() {
      return this.getMenuItems(this.menuItems, this.menuGroups);
    },
  },
  methods: {
    modalToggle(id) {
      this.modal.id = id;
    },

    getMenuItems(menuItems, menuGroups) {
      const result = menuItems.map((item) => {
        const group = menuGroups.find(
          (group) => group.id === item.groupId && group
        );

        return {
          ...item,
          // FROM ORDERS
          // qty: orderItems[item.id] || 0,
          // amount: orderItems[item.id] * item.price || 0,
          // FROM GROUPS
          rank: (group?.rank || 0) * 100 + (item?.rank || 0),
          groupName: group?.name || "set group",
        };
      });
      return result;
    },
  },
};
</script>
