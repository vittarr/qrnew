<template>
  <div class="box">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="columns">
        <div class="column is-8">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="item.name"
                placeholder="Name"
              />
              <p v-if="$v.item.name.$error" class="help is-danger">
                <span v-if="!$v.item.name.required">
                  This field is required
                </span>
                <span v-if="!$v.item.name.minLength">
                  Min length {{ $v.item.name.$params.minLength.min }} required
                </span>
              </p>
            </div>
          </div>

          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea has-fixed-size"
              type="text"
              v-model="item.description"
              placeholder="Description"
            />
            <p v-if="$v.item.description.$error" class="help is-danger">
              <span v-if="!$v.item.description.required">
                This field is required
              </span>
              <span v-if="!$v.item.description.minLength">
                Min length
                {{ $v.item.description.$params.minLength.min }} required
              </span>
            </p>
          </div>
        </div>

        <div class="column">
          <label class="label">Image</label>
          <figure class="image is-square">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </figure>
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            </i>
          </p>
        </div>
      </div>

      <div class="buttons">
        <button class="button" type="submit">Save</button>
        <button class="button is-danger" type="button" @click="$emit('remove')">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "ModalEditor",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  validations: {
    item: {
      name: { required, minLength: minLength(6) },
      description: { required, minLength: minLength(16) },
    },
  },
  mounted() {
    this.item.rank = 1;
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }

      this.$emit("save");
    },
  },
};
</script>