<template>
  <router-view />
</template>

<script>
export default {
  name: "Login",
  components: {},
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    user() {
      return this.$store.state.user;
    },
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    loading(data) {
      console.log("w loading", data);
    },
    user(data) {
      console.log("w user", data);
    },
    error(data) {
      console.log("w error", data);
      this.$toast.error(data.code);
    },
  },
};
</script>