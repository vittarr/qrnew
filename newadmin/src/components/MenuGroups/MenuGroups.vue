<template>
  <div class="box">
    <!-- ================= DESCRIPTION ================= -->
    <div class="content">
      <h4 class="is-uppercase">{{ $t("menuItems.subheaderGroups") }}</h4>
      <p>
        {{ $t("menuItems.descriptionGroups") }}
      </p>
    </div>

    <div class="buttons">
      <button class="button" @click="edit = 'new'">New group</button>
    </div>

    <!-- ================= RED MSG (if length = 0) ================= -->
    <h4 v-if="menuGroups.length === 0" class="subtitle is-4 has-text-danger">
      You do not have group items yet. Please create some
    </h4>

    <!-- ================= MAIN TABLE (if length > 0) ================= -->
    <draggable
      v-else
      class="field is-grouped is-grouped-multiline"
      v-model="myList"
    >
      <div class="control" v-for="item in myList" :key="item.id">
        <div class="tags are-large has-addons">
          <span class="tag is-rounded is-dark" @click="edit = item.id">
            {{ item.name }}
          </span>
          <a class="tag is-rounded is-delete" @click="remove(item.id)"></a>
        </div>
      </div>
    </draggable>
    <!-- ================= MODAL PART ================= -->
    <Modal v-if="edit" :id="edit" @modalClose="edit = false" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "./Modal";

import draggable from "vuedraggable";
import _ from "lodash";

// import { getID } from "@/helpers/functions";

export default {
  name: "MenuGroups",
  props: ["menuGroups"],
  components: { draggable, Modal },
  data() {
    return {
      edit: false,
    };
  },

  computed: {
    myList: {
      get() {
        return _.orderBy(this.menuGroups, "rank", "asc");
      },
      set(value) {
        value.map((item, index) => {
          this.patch([item.id, { rank: index + 1 }]);
        });
      },
    },
  },

  methods: {
    ...mapActions("menu-groups", ["patch", "remove"]),
  },
};
</script>