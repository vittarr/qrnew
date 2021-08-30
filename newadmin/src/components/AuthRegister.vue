<template>
  <!-- REGISTER WITH EMAIL -->
  <form class="form" @submit.prevent>
    <h2 class="title has-text-link-dark">Register</h2>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model.trim="$v.email.$model"
          :class="{ 'is-danger': $v.email.$error }"
          class="input"
          type="text"
          placeholder="Please enter your email"
          key="rege"
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
          placeholder="Please chouse password"
          key="regp"
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

    <button @click="submit" class="button is-dark">Register</button>
    <div>
      Already have acount,
      <a @click="$emit('gologin')">login </a>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "AuthRegister",
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
    ...mapActions("users", { createUser: "create" }),
    ...mapActions("auth", ["authenticate"]),

    async submit() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }

      const { email, password } = this;
      try {
        await this.createUser({ email, password });
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