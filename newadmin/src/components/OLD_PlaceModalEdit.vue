<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t("place.modalEditHeader") }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('modalClose')"
        ></button>
      </header>
      <form class="form" @submit.prevent="savePlace">
        <section class="modal-card-body">
          <div class="columns is-multiline">
            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.link") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.id.$model"
                    :class="{ 'is-danger': $v.place.id.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                    :disabled="place !== null"
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.name") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.name.$model"
                    :class="{ 'is-danger': $v.place.name.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.tables") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.tables.$model"
                    :class="{ 'is-danger': $v.place.tables.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.address") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.address.$model"
                    :class="{ 'is-danger': $v.place.address.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.country") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.country.$model"
                    :class="{ 'is-danger': $v.place.country.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.city") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.city.$model"
                    :class="{ 'is-danger': $v.place.city.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.phone") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.phone.$model"
                    :class="{ 'is-danger': $v.place.phone.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third pb-0">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.email") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.email.$model"
                    :class="{ 'is-danger': $v.place.email.$error }"
                    class="input"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div class="column is-full">
              <div class="field">
                <label class="label">
                  {{ $t("place.labels.description") }}
                </label>
                <div class="control">
                  <input
                    v-model="$v.place.description.$model"
                    :class="{ 'is-danger': $v.place.description.$error }"
                    class="textarea"
                    type="text"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" type="submit">
            {{ $t("general.btnSave") }}
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, integer, minLength } from "vuelidate/lib/validators";

export default {
  name: "ModalPlaceEdit",
  components: {},
  props: ["initialPlace"],
  data() {
    return { place: Object.assign({}, this.initialPlace) };
  },
  validations: {
    place: {
      id: { required },
      name: { required, minLength: minLength(8) },
      description: { required, minLength: minLength(20) },
      phone: { required, minLength: minLength(8) },
      email: { email },
      address: { required, minLength: minLength(6) },
      city: { required, minLength: minLength(3) },
      country: { required, minLength: minLength(3) },
      tables: { required, integer },
    },
  },

  methods: {
    async savePlace() {
      this.$v.$touch();
      if (this.$v.$error) {
        this.$store.commit("setError", { code: "check form errors" });
        return;
      }

      await this.$store.dispatch("savePlace", this.place);
      this.$emit("modalClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-card {
  overflow: auto;
}
</style>