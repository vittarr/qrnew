<template>
  <div class="box">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="columns">
        <div class="column is-8">
          <div class="columns is-multiline">
            <div class="column is-6">
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
                      Min length
                      {{ $v.item.name.$params.minLength.min }} required
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-6">
              <div class="field">
                <label class="label">Groups</label>
                <div class="control">
                  <div class="select">
                    <select v-model="item.menuGroupId">
                      <option
                        v-for="group in menuGroups"
                        :key="group.id"
                        :value="group.id"
                      >
                        {{ group.name }}
                      </option>
                    </select>
                  </div>
                  <p v-if="$v.item.menuGroupId.$error" class="help is-danger">
                    <span v-if="!$v.item.menuGroupId.required">
                      This field is required
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-6">
              <div class="field">
                <label class="label">Weight</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="item.weight"
                    placeholder="Weight"
                  />
                  <p v-if="$v.item.weight.$error" class="help is-danger">
                    <span v-if="!$v.item.weight.required">
                      This field is required
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-6">
              <div class="field">
                <label class="label">Price</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="item.price"
                    placeholder="Price"
                  />
                  <p v-if="$v.item.price.$error" class="help is-danger">
                    <span v-if="!$v.item.price.required">
                      This field is required
                    </span>
                    <span v-if="!$v.item.price.decimal">
                      Should be decimal
                    </span>
                  </p>
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
import { required, minLength, decimal } from "vuelidate/lib/validators";

export default {
  name: "ModalEditor",
  props: {
    item: {
      type: Object,
      required: true,
    },
    menuGroups: {
      type: Array,
      required: true,
    },
  },
  validations: {
    item: {
      name: { required, minLength: minLength(6) },
      description: { required, minLength: minLength(16) },
      menuGroupId: { required },
      weight: { required },
      price: { required, decimal },
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

<style lang="scss" scoped>
.select {
  width: 100%;
  select {
    width: 100%;
  }
}
</style>