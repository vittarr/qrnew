export const mixinPlaceSelect = {
  data() {
    return {
      mixinPlaceSelected: this.$route.query?.place || null,
    };
  },
  computed: {
    mixinPlaces() {
      const { Place } = this.$FeathersVuex.api;
      let store = Place.findInStore({ query: {} });
      return store.data;
    },
  },
  watch: {
    mixinPlaceSelected(value) {
      this.$router.push({ query: { place: value } });
    },
  },
};
