<template>
  <div>
    <section class="hero is-danger is-small">
      <div class="hero-body has-text-centered">
        <p class="title">Oops!</p>
        <p class="subtitle">
          Place id - <b>{{ id }}</b>
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <h3>Something went wrong.</h3>
          <p>Please check the QR once more or ask waiter</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params?.id || "null";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px !important;
}
</style>