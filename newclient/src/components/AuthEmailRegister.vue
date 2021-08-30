<template>
  <!-- REGISTER WITH EMAIL -->
  <form class="form" @submit.prevent="submit">
    <a class="" @click="$emit('goback')">&#60; go back</a>
    <h2 class="title has-text-grey">Register</h2>

    <p>or <a class="" @click="$emit('gologin')"> login</a></p>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="email" type="text" placeholder="email" />
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
          class="input"
          v-model="password"
          type="text"
          placeholder="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <p v-if="$v.password.$error" class="help is-danger">
          <span v-if="!$v.password.required">This field is required</span>
          <span v-if="!$v.password.minLength">
            Min length {{ $v.password.$params.minLength.min }} required
          </span>
        </p>
      </div>
    </div>

    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <button class="button" type="submit">register</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "AuthEmailRegister",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: { required, email },
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
        const res1 = await this.createUser({ email, password });
        const res2 = await this.authenticate({
          strategy: "local",
          email,
          password,
        });
        console.log("Res in Auth", res1, res2);
      } catch (err) {
        console.error("Error in Auth", err);
      }
    },
  },
};
</script>

<style>
</style>