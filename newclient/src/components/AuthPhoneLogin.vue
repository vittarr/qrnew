<template>
  <!-- LOGIN WITH PHONE -->
  <form class="form" @submit.prevent>
    <div id="recaptcha-container"></div>
    <a class="" @click="$emit('goback')">&#60; go back</a>
    <h2 class="title has-text-grey">Login with phone</h2>

    <div class="field">
      <label class="label">Phone{{ phoneNumber && phoneNumber.flag }}</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="v$.phone.$model"
          type="text"
          placeholder="phone"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-phone"> </i>
        </span>
      </div>
    </div>
    <button class="button" @click="sendOtp">get OTP</button>

    <div class="field">
      <label class="label">One time pass</label>
      <div class="control">
        <input
          class="input otpinput is-size-4 has-text-weight-bold"
          v-model="v$.otp.$model"
          type="text"
          placeholder="OTP"
          maxlength="6"
        />
      </div>
    </div>
    <button class="button" @click="verifyOtp">confirm OTP</button>
  </form>
</template>

<script>
import parsePhoneNumber from "libphonenumber-js";
import { flag } from "country-emoji";

import { required, minLength } from "vuelidate/lib/validators";

const phoneValidation = (phone) => parsePhoneNumber(phone)?.isValid();

export default {
  name: "AuthPhoneLogin",

  data() {
    return {
      phone: "",
      otp: "",
      otpList: [],
      activeInput: 2,
    };
  },
  validations: {
    phone: { required, phoneValidation },
    otp: { required, minLength: minLength(4) },
  },
  computed: {
    phoneNumber() {
      const phoneNumber = parsePhoneNumber(this.phone) || "na";
      if (phoneNumber !== "na") {
        const { number, country } = phoneNumber;
        const phoneIsValid = phoneNumber.isValid();
        const phoneType = phoneNumber.getType();
        return {
          number,
          country,
          flag: flag(country),
          phoneIsValid,
          phoneType,
        };
      }
      return null;
    },
  },
  methods: {
    // add functions in VUEX store
    async sendOtp() {
      this.v$.phone.$touch();
      if (this.v$.phone.$error) {
        this.$store.commit("setError", { code: "wrong phone number" });
        return;
      }

      console.log("sendOtp with PHONE", this.phone, typeof this.phone);
      await this.$store.dispatch("sendOtp", { phone: this.phone });
    },

    async verifyOtp() {
      this.v$.otp.$touch();
      if (this.v$.otp.$error) {
        this.$store.commit("setError", { code: "otp should be 6 digit" });
        return;
      }

      console.log("verifyOtp with OTP", this.otp);
      await this.$store.dispatch("verifyOtp", { otp: this.otp });
    },

    async initReCaptcha() {
      console.log("initReCaptcha DONE");
      await this.$store.dispatch("initReCaptcha");
    },
  },
  created() {
    this.initReCaptcha();
  },
};
</script>

<style lang="scss" scoped>
.otpgroup {
  display: flex;
  margin: 1rem 0;
}
.otpinput {
  color: gray;
  padding: 0.5rem;
  letter-spacing: 1rem;

  text-align: center;
  font-weight: bold;
}
</style>