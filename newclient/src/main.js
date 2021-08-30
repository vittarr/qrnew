import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import Vuelidate from "vuelidate";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { i18n } from "./plugins/i18n";

Vue.config.productionTip = false;

const options = {};
Vue.use(Toast, options);
Vue.use(Vuelidate);

let app;

store
  .dispatch("auth/authenticate")
  .catch((err) => console.error("main ERROR", err))
  .then((res) => {
    console.log("main OK", res);
    if (!app) {
      app = new Vue({
        router,
        store,
        i18n,
        render: (h) => h(App),
      }).$mount("#app");
    }
  });
