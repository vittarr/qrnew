<template>
  <section class="hero is-fullheight is-link">
    <div class="hero-body">
      <div class="box">
        <AuthLogin v-if="showLoginForm" @goregister="toggleForm" />
        <AuthRegister v-else @gologin="toggleForm" />
      </div>
    </div>
  </section>
</template>

<script>
import AuthLogin from "../components/AuthLogin";
import AuthRegister from "../components/AuthRegister";

export default {
  name: "Auth",
  components: { AuthLogin, AuthRegister },
  data() {
    return {
      email: "",
      password: "",
      showLoginForm: true,
    };
  },

  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  // background: url("~@/assets/bground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>