<template>
  <!-- LOGIN WITH EMAIL -->
  <form class="form" @submit.prevent>
    <h2 class="title has-text-link-dark">Login</h2>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model.trim="$v.email.$model"
          :class="{ 'is-danger': $v.email.$error }"
          class="input"
          type="text"
          placeholder="Please enter your email"
          key="loge"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <p v-if="$v.email.$error" class="help is-danger">
          <span v-if="!$v.email.email">Should be propper emaild</span>
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model.trim="$v.password.$model"
          :class="{ 'is-danger': $v.password.$error }"
          class="input"
          type="password"
          placeholder="Please enter password"
          key="logp"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <p v-if="$v.password.$error" class="help is-danger">
          <span v-if="!$v.password.required">This field is required</span>
          <span v-if="!$v.password.minLength"
            >Min length {{ $v.password.$params.minLength.min }} required</span
          >
        </p>
      </div>
    </div>

    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <button @click="submit" class="button is-dark">Login</button>
      foregor password
    </div>
    <div>
      Don't have account,
      <a @click="$emit('goregister')">register </a>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "AuthLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  validations: {
    email: { email },
    password: { required, minLength: minLength(6) },
  },

  methods: {
    ...mapActions("auth", ["authenticate"]),

    async submit() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      const { email, password } = this;
      try {
        const res = await this.authenticate({
          strategy: "local",
          email,
          password,
        });
        console.log("Res in Auth", res);
        this.$router.push({ name: "Places" });
      } catch (err) {
        console.error("Error in Auth", err);
      }
    },
  },
};
</script>

<style>
</style>