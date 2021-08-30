<template>
  <div class="file mb-2 is-white">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="resume"
        ref="fileMenu"
        @click="resetFileMenu"
        @change="uploadFileMenu"
      />
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label"> Choose a CSV </span>
      </span>
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import csv from "csvtojson";

export default {
  name: "MenuItemsUpload",
  data() {
    return {
      name: null,
      items: [],
    };
  },
  methods: {
    ...mapActions("menu-items", ["create"]),

    //https://www.positronx.io/understand-html5-filereader-api-to-upload-image-and-text-files/
    //https://learn.javascript.ru/file
    async uploadFileMenu(e) {
      this.name = e.target.files[0];
      const placeId = this.$route.query.place;
      const reader = new FileReader();
      reader.onload = async () => {
        // console.log("reader 1", reader.result);
        const json = await csv().fromString(reader.result);
        // console.log("reader 2", json);
        this.items = json.map((item) => ({ ...item, placeId }));
        // console.log("reader 3", this.items);
        await this.create([this.items]);
      };
      reader.readAsText(this.name);
    },
    resetFileMenu() {
      this.$refs.fileMenu.value = "";
    },
  },
};
</script>

<style>
</style>