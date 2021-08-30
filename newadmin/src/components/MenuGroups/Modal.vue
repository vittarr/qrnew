<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('modalClose')"></div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('modalClose')"
    ></button>
    <div class="modal-content">
      <FeathersVuexFormWrapper v-if="item" :item="item" watch eager>
        <template v-slot="{ clone, save, reset, remove, isDirty }">
          <ModalEditor
            :item="clone"
            :isDirty="isDirty"
            @save="save().then(redirectBack)"
            @reset="reset"
            @remove="remove().then(redirectBack)"
          >
          </ModalEditor>
        </template>
      </FeathersVuexFormWrapper>
    </div>
  </div>
</template>

<script>
import { FeathersVuexFormWrapper } from "feathers-vuex";
import ModalEditor from "./ModalEditor.vue";

export default {
  name: "MenuGroupsModal",
  props: ["id"],
  components: {
    FeathersVuexFormWrapper,
    ModalEditor,
  },
  computed: {
    item() {
      const { MenuGroup } = this.$FeathersVuex.api;
      if (this.id === "new") {
        return new MenuGroup();
      } else {
        return MenuGroup.getFromStore(this.id);
      }
    },
  },
  watch: {
    id: {
      immediate: true,
      async handler(val) {
        if (val === "new") {
          return;
        }
        const { MenuGroup } = this.$FeathersVuex.api;
        const existingRecord = MenuGroup.getFromStore(val);
        if (!existingRecord) {
          await MenuGroup.get(val);
        }
      },
    },
  },
  methods: {
    handleSaveResponse(savedItem) {
      if (this.id === "new") {
        this.$router.push({ params: { id: savedItem.id } });
      }
    },
    redirectBack() {
      this.$emit("modalClose");
    },
  },
};
</script>