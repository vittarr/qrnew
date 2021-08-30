import Vue from "vue";
import VueI18n from "vue-i18n";
import ua from "./ua";
import en from "./en";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ua",
  fallbackLocale: "ua",
  messages: {
    ua,
    en,
  },
});
