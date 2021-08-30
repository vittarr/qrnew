<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Main from "@/layouts/Main";
import Login from "@/layouts/Login";
import { mapState } from "vuex";

export default {
  methods: {},
  components: { Main, Login },
  computed: {
    ...mapState("auth", ["user"]),

    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
