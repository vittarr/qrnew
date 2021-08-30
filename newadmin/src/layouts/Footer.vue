<template>
  <footer class="footer has-background-grey-lighter py-6">
    <div class="container">
      <div class="columns">
        <div class="column is-4-tablet is-offset-4-desktop">
          <div class="content">
            <h2>{{ $t("footer.info") }}</h2>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-info"></i>
              </span>
              <a href="">{{ $t("footer.infoAbout") }}</a>
            </p>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-question"></i>
              </span>
              <a href="">{{ $t("footer.infoWorks") }}</a>
            </p>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="far fa-lg fa-handshake"></i>
              </span>
              <a href="">{{ $t("footer.infoPartners") }}</a>
            </p>
          </div>
        </div>
        <div class="column is-4-tablet">
          <div class="content">
            <h2>{{ $t("footer.contacts") }}</h2>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fab fa-lg fa-facebook-f"></i>
              </span>
              <a href="facebook.page">facebook.page</a>
            </p>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-phone"></i>
              </span>
              <a href="tel:+380 (44) 444 22 22">+380 (44) 444 22 22</a>
            </p>
            <p class="is-flex is-align-items-center">
              <span class="icon is-medium">
                <i class="fas fa-lg fa-envelope"></i>
              </span>
              <a href="mailto:email@email.com">email@email.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>