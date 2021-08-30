<template>
  <div>
    <section class="hero is-warning is-small">
      <div class="hero-body has-text-centered">
        <p class="title">{{ place.name }}</p>
        <p class="subtitle">{{ place.address }}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <h3>Review form</h3>
          <p>
            Please express your oppinion. This is very important for us and it
            helps us to become better :)
          </p>
        </div>
        <FeathersVuexFormWrapper :item="item" watch eager>
          <template v-slot="{ clone, save }">
            <Editor :item="clone" @save="save().then(redirect)" />
          </template>
        </FeathersVuexFormWrapper>
      </div>
    </section>
  </div>
</template>

<script>
import { FeathersVuexFormWrapper } from "feathers-vuex";
import Editor from "./Editor.vue";

export default {
  name: "Review",
  components: { FeathersVuexFormWrapper, Editor },

  computed: {
    item() {
      const { Review } = this.$FeathersVuex.api;
      return new Review({ score: 0, comment: "" });
    },
    place() {
      const { Place } = this.$FeathersVuex.api;
      let place = Place.findInStore()?.data[0];
      return place;
    },
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Intro" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
}
</style>