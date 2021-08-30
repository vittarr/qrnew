<template>
  <Loader v-if="isFindPlacesPending" />
  <router-view v-else />
</template> 

<script>
import { makeFindMixin } from "feathers-vuex";

import Loader from "@/components/Loader";
export default {
  name: "Main",
  mixins: [makeFindMixin({ service: "places", watch: true })],

  components: { Loader },

  computed: {
    placesParams() {
      return { query: { id: parseInt(this.$route.params.id) } };
    },
  },
};
</script>

<style >
</style>