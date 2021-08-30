<template>
  <div>
    <section class="hero is-info is-small">
      <div class="hero-body has-text-centered">
        <p class="title" @click="logout">MenuSca</p>
        <p class="subtitle">Powered by</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <router-link tag="div" :to="{ name: 'Auth' }" class="bigbtn">
          Menu
        </router-link>
        <router-link tag="div" :to="{ name: 'Review' }" class="bigbtn">
          Feedback
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(() => console.log("logout OK"))
        .catch(() => console.error("logout ERROR"));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px !important;
}
.bigbtn {
  width: 12rem;
  height: 12rem;
  margin: 2rem auto;

  border: 2px solid gray;
  border-radius: 1rem;

  text-align: center;
  font-weight: 600;
  font-size: 2rem;

  cursor: pointer;
}
</style>