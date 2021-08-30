<template>
  <footer class="footer has-background-grey-light py-6">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content">
            <h2>&#128525; Contacts</h2>
            <p
              v-if="place.city || place.address"
              class="is-flex is-align-items-center"
            >
              <span class="icon is-medium">
                <i class="fas fa-lg fa-map-pin"></i>
              </span>
              {{ `${place.address} ${place.city}` }}
            </p>
            <p v-if="place.facebook" class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fab fa-lg fa-facebook-f"></i>
              </span>
              <a :href="place.facebook"> {{ place.facebook }}</a>
            </p>
            <p v-if="place.phone" class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-phone"></i>
              </span>
              <a :href="`tel:${place.phone}`"> {{ place.phone }}</a>
            </p>
            <p v-if="place.email" class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-envelope"></i>
              </span>
              <a :href="`mailto:${place.email}`"> {{ place.email }}</a>
            </p>
          </div>
        </div>

        <div class="column">{{ place.description }}</div>
      </div>
      <p>
        &#169; created by <b> MenuSca </b>. If you want similar menu for your
        place please contact us: phone +380 XXX XXX XXX or email: xxx@xxx.com
      </p>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["place"]),
  },
};
</script>

<style>
</style>