<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('modalClose')"
        ></button>
      </header>
      <form class="form" @submit.prevent="updateItem">
        <section class="modal-card-body">
          <div class="columns is-multiline">
            <div class="column is-8">
              <div class="columns is-multiline">
                <div class="column is-half">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        v-model="$v.menuItem.name.$model"
                        :class="{ 'is-danger': $v.menuItem.name.$error }"
                        class="input"
                        type="text"
                        :placeholder="placeholder.name"
                      />
                    </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
                    <label class="label">Group</label>
                    <div class="select">
                      <select v-model="$v.menuItem.group.$model">
                        <option
                          v-for="group in menuGroupsSorted"
                          :key="group.id"
                          :value="group.id"
                        >
                          {{ group.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
                    <label class="label">Weight</label>
                    <div class="control">
                      <input
                        v-model="$v.menuItem.weight.$model"
                        :class="{ 'is-danger': $v.menuItem.weight.$error }"
                        class="input"
                        type="text"
                        :placeholder="placeholder.weight"
                      />
                    </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                      <input
                        v-model="$v.menuItem.price.$model"
                        :class="{ 'is-danger': $v.menuItem.price.$error }"
                        class="input"
                        type="text"
                        :placeholder="placeholder.price"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <div class="block">
                <figure class="image is-square">
                  <img :src="fileImage.image || menuItem.image" />
                </figure>
              </div>
            </div>

            <div class="column is-full">
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea
                    v-model="$v.menuItem.description.$model"
                    :class="{ 'is-danger': $v.menuItem.description.$error }"
                    class="textarea"
                    type="text"
                    :placeholder="placeholder.description"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="modal-card-foot">
          <button type="submit" class="button button is-success">save</button>

          <div class="block">
            <div class="file is-white">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  ref="fileImage"
                  @click="resetFileImage"
                  @change="uploadFileImage"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
              </label>
            </div>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
import { required, integer, minLength } from "vuelidate/lib/validators";

export default {
  name: "MenuItemsModal",
  props: ["propsMenuItem"],

  data() {
    return {
      menuItem: Object.assign({}, this.propsMenuItem),
      placeholder: {
        name: "placeholder",
        description: "placeholder",
        weight: "placeholder",
        price: "placeholder",
      },
      fileImage: {
        name: null,
        image: null,
      },
    };
  },

  validations: {
    menuItem: {
      id: { required },
      group: { required, minLength: minLength(3) },
      name: { required, minLength: minLength(3) },
      description: { required, minLength: minLength(20) },
      weight: { required, minLength: minLength(3) },
      price: { required, integer },
    },
  },
  computed: {
    ...mapState(["menuGroups"]),

    menuGroupsSorted() {
      return _.orderBy(this.menuGroups, "rank", "asc");
    },
  },
  methods: {
    ...mapActions(["updateMenuItem", "saveItemImage"]),
    // https://codepen.io/Atinux/pen/qOvawK/
    async uploadFileImage(event) {
      this.fileImage.name = event.target.files[0];
      var reader = new FileReader();
      reader.onload = async (e) => {
        this.fileImage.image = e.target.result;
      };
      reader.readAsDataURL(this.fileImage.name);
    },
    resetFileImage() {
      this.$refs.fileImage.value = "";
    },

    async updateItem() {
      this.$v.$touch();
      if (this.$v.$error) {
        this.$store.commit("setError", { code: "check form errors" });
        return;
      }

      await this.updateMenuItem(this.menuItem);
      this.fileImage.name &&
        (await this.saveItemImage({
          id: this.menuItem.id,
          data: this.fileImage.name,
        }));
      this.$emit("modalClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
}
.select,
.select select {
  width: 100%;
}
.modal-card {
  overflow: auto;
}
.image {
  img {
    object-fit: contain;
    background: lightblue;
  }
}
</style>