<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-map-marked"></i>
      </span>
      {{ $t("place.pagename") }}
    </h2>

    <div class="box">
      <div class="content">
        <h4 class="is-uppercase">{{ $t("place.subheader") }}</h4>
        <p>
          {{ $t("place.description") }}
        </p>
        <div class="buttons">
          <button class="button" @click="edit = 'new'">
            {{ true ? $t("place.btnEdit") : $t("place.btnAdd") }}
          </button>
        </div>
      </div>
    </div>

    <div class="box" v-if="places.length === 0">
      <h4 class="subtitle is-4 has-text-danger">
        {{ $t("place.emptyMessage") }}
      </h4>
    </div>
    <div class="box" v-else>
      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase w15">
              <th>Name</th>
              <th>Address</th>
              <th>Created</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="place in places" :key="place.id">
            <tr>
              <th>{{ place.name }}</th>
              <td>{{ place.address }}</td>
              <td>{{ dayjs(place.createdAt).fromNow() }}</td>
              <td>
                <button
                  class="button is-light is-small"
                  @click="edit = place.id"
                >
                  <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- ================= MODAL PART ================= -->
    <PlaceModalEdit v-if="edit" :id="edit" @modalClose="edit = null" />
  </section>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import PlaceModalEdit from "@/components/PlaceModalEdit/index.vue";
export default {
  name: "Place",
  components: { PlaceModalEdit },
  mixins: [makeFindMixin({ service: "places" })],
  data() {
    return {
      edit: false,
    };
  },

  computed: {
    placesParams() {
      return {};
    },
  },

  methods: {
    dayjs,

    // https://codepen.io/Atinux/pen/qOvawK/
    // async uploadFileImage(image, event) {
    //   this[image].name = event.target.files[0];
    //   var reader = new FileReader();
    //   reader.onload = async (e) => {
    //     this[image].image = e.target.result;
    //   };
    //   reader.readAsDataURL(this[image].name);
    //   await this.$store.dispatch("savePlaceImage", {
    //     name: image,
    //     data: this[image].name,
    //   });
    // },
    // resetFileImage(image) {
    //   this.$refs[image] = "";
    // },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
}
.image {
  img {
    object-fit: contain;
    background: lightblue;
  }
}
</style>