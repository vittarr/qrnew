<template>
  <div class="box">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="columns is-multiline">
        <div class="column is-4">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.name"
                placeholder="Name"
              />
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.address"
                placeholder="Address"
              />
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.phone"
                placeholder="Phone"
              />
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="field">
            <label class="label">Facebook link</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.facebook"
                placeholder="Facebook link"
              />
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="field">
            <label class="label">Instagram</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.instagram"
                placeholder="Instagram"
              />
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="field">
            <label class="label">Web link</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.web"
                placeholder="Web link"
              />
            </div>
          </div>
        </div>

        <div class="column is-12">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea has-fixed-size"
              type="text"
              v-model="item.description"
              placeholder="Description"
            />
          </div>
        </div>
      </div>

      <div class="buttons">
        <button class="button" type="submit">Save</button>
        <button
          class="button"
          type="button"
          v-if="isDirty"
          @click="$emit('reset')"
        >
          Reset
        </button>
        <button class="button is-danger" type="button" @click="$emit('remove')">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PlaceEditor",
  props: {
    item: {
      type: Object,
      required: true,
    },
    isDirty: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      // This is a placeholder for checking form validity, (with Vuelidate, for example)
      const isValid = true || false;

      if (isValid) {
        this.$emit("save");
      } else {
        // Show any form errors in the UI.
      }
    },
  },
};
</script>