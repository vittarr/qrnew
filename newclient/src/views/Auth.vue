<template>
  <section class="hero is-fullheight is-info">
    <div class="hero-body">
      <div
        class="
          box
          is-flex is-flex-direction-column is-justify-content-space-between
        "
      >
        <template v-if="!showForm">
          <h2 class="title has-text-grey">Enter caffe</h2>

          <div class="buttons">
            <!-- REGISTER ANONIM -->
            <button class="button is-large has-text-left is-fullwidth">
              <span class="icon is-large">
                <i class="fas fa-user-circle"></i>
              </span>
              <span class="has-text-center"> without registration </span>
            </button>
            <!-- LOGIN PHONE -->
            <button
              class="button is-large has-text-left is-fullwidth"
              @click="switchView('phone')"
            >
              <span class="icon is-large">
                <i class="fas fa-phone"></i>
              </span>
              <span> with Phone</span>
            </button>
            <!-- LOGIN EMAIL -->
            <button
              class="button is-large has-text-left is-fullwidth"
              @click="switchView('login')"
            >
              <span class="icon is-large">
                <i class="fas fa-envelope"></i>
              </span>
              <span> with Email</span>
            </button>
            <!-- REGISTER FB -->
            <button class="button is-large has-text-left is-fullwidth">
              <span class="icon is-large">
                <i class="fab fa-facebook"></i>
              </span>
              <span>with Facebook</span>
            </button>
          </div>
        </template>

        <!-- LOGIN WITH EMAIL -->
        <AuthEmailLogin
          v-if="showForm == 'login'"
          @goback="switchView(false)"
          @goregister="switchView('register')"
        />

        <!-- REGISTER WITH EMAIL -->
        <AuthEmailRegister
          v-if="showForm == 'register'"
          @goback="switchView(false)"
          @gologin="switchView('login')"
        />

        <!-- LOGIN WITH PHONE -->
        <AuthPhoneLogin
          v-if="showForm == 'phone'"
          @goback="switchView(false)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AuthEmailLogin from "../components/AuthEmailLogin";
import AuthEmailRegister from "../components/AuthEmailRegister";
import AuthPhoneLogin from "../components/AuthPhoneLogin";

export default {
  name: "Login",
  components: { AuthEmailLogin, AuthEmailRegister, AuthPhoneLogin },
  data() {
    return { showForm: "login" };
  },
  methods: {
    switchView(value) {
      this.showForm = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.button.has-text-left {
  justify-content: flex-start;
}
.box {
  width: 100%;
  min-height: 400px;
}
.buttons {
  flex: 1 1 auto;
}
</style>