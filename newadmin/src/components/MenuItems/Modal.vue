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
        <template v-slot="{ clone, save, reset, remove }">
          <ModalEditor
            :item="clone"
            :menuGroups="menuGroups"
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
  name: "Modal",
  props: {
    id: {
      required: true,
    },
    menuGroups: {
      type: Array,
      required: true,
    },
  },
  components: {
    FeathersVuexFormWrapper,
    ModalEditor,
  },
  computed: {
    item() {
      const { MenuItem } = this.$FeathersVuex.api;
      if (this.id === "new") {
        return new MenuItem();
      } else {
        return MenuItem.getFromStore(this.id);
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
        const { MenuItem } = this.$FeathersVuex.api;
        const existingRecord = MenuItem.getFromStore(val);
        if (!existingRecord) {
          await MenuItem.get(val);
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