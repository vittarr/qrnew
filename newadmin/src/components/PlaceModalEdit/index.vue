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
          <PlaceEditor
            :item="clone"
            :isDirty="isDirty"
            @save="save().then(redirectBack)"
            @reset="reset"
            @remove="remove().then(redirectBack)"
          >
          </PlaceEditor>
        </template>
      </FeathersVuexFormWrapper>
    </div>
  </div>
</template>

<script>
import { FeathersVuexFormWrapper } from "feathers-vuex";
import PlaceEditor from "./PlaceEditor.vue";

export default {
  name: "Place",
  props: ["id"],
  components: {
    FeathersVuexFormWrapper,
    PlaceEditor,
  },
  computed: {
    item() {
      const { Place } = this.$FeathersVuex.api;
      if (this.id === "new") {
        return new Place();
      } else {
        return Place.getFromStore(this.id);
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
        const { Place } = this.$FeathersVuex.api;
        const existingRecord = Place.getFromStore(val);
        if (!existingRecord) {
          await Place.get(val);
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