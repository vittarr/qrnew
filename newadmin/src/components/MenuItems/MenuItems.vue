<template>
  <div class="box">
    <!-- ================= DESCRIPTION ================= -->
    <div class="content">
      <h4 class="is-uppercase">{{ $t("menuItems.subheaderItems") }}</h4>
      <p>
        {{ $t("menuItems.descriptionItems") }}
      </p>
    </div>

    <div class="buttons">
      <button class="button" @click="edit = 'new'">New item</button>
      <MenuItemsUpload />
    </div>

    <!-- ================= RED MSG (if length = 0) ================= -->
    <h4 v-if="menuItems.length === 0" class="subtitle is-4 has-text-danger">
      {{ $t("menuItems.emptyMessageItems") }}
    </h4>

    <!-- ================= MAIN TABLE (if length > 0) ================= -->
    <div v-else class="table-container">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr class="is-uppercase">
            <th>{{ $t("menuItems.table.rank") }}</th>
            <th v-for="field in fields" :key="field">
              {{ $t(`menuItems.table.${field}`) }}
            </th>
            <th>{{ $t("menuItems.table.image") }}</th>
            <th>{{ $t("menuItems.table.edit") }}</th>
            <th>{{ $t("menuItems.table.delete") }}</th>
          </tr>
        </thead>

        <draggable v-model="myList" tag="tbody">
          <tr v-for="item in myList" :key="item.id">
            <th>{{ item.rank }}</th>

            <td v-for="field in fields" :key="field">
              <span>{{ item[field] }}</span>
            </td>
            <td>
              <!-- https://unicode-table.com/en/sets/check/ -->
              {{ item.image ? "&#9989;" : "&#10060;" }}
            </td>
            <td>
              <button class="button is-light is-small" @click="edit = item.id">
                <span class="icon is-small">
                  <i class="fas fa-edit"></i>
                </span>
              </button>
            </td>

            <td>
              <button class="button is-light is-small" @click="remove(item.id)">
                <span class="icon is-small">
                  <i class="fas fa-trash"></i>
                </span>
              </button>
            </td>
          </tr>
        </draggable>
      </table>
    </div>

    <!-- ================= MODAL PART ================= -->
    <Modal
      v-if="edit"
      :id="edit"
      :menuGroups="menuGroups"
      @modalClose="edit = false"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
import draggable from "vuedraggable";
import Modal from "./Modal";
import MenuItemsUpload from "./MenuItemsUpload";
// import { getID } from "@/helpers/functions";

export default {
  name: "MenuItems",
  props: ["menuItems", "menuGroups"],
  components: { draggable, Modal, MenuItemsUpload },

  data() {
    return {
      fields: ["groupName", "name", "price"],
      edit: false,
    };
  },
  computed: {
    myList: {
      get() {
        const menuItemsMerged = this.merge(this.menuItems, this.menuGroups);
        return _.orderBy(menuItemsMerged, "rank", "asc");
      },
      set(value) {
        value.map((item, index) => {
          this.patch([item.id, { rank: index + 1 }]);
        });
      },
    },
  },
  methods: {
    ...mapActions("menu-items", ["patch", "remove"]),

    merge(menuItems, menuGroups) {
      // https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key
      const temp1 = menuItems.map((item) => {
        const group = menuGroups.find(
          (group) => group.id === item.menuGroupId && group
        );
        return {
          ...item,
          rank: (group?.rank || 0) * 100 + (item?.rank || 0),
          groupName: group?.name || "set group",
        };
      });
      return temp1;
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
}
</style>