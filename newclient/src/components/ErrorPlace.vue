<template>
  <div class="errorpage">
    <div class="container">
      <div class="collumns">
        <div class="column">
          <div class="content">
            <p class="title">Something went place</p>
            <p class="subtitle">call waiter</p>
          </div>
        </div>
        <div class="column">
          <figure class="image">
            <img src="~@/assets/Homer.png" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: ["~@/assets/Homer.png", "~@/assets/Bart.png", "~@/assets/Lisa.png"],
    };
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 5rem;
  .img {
    max-height: 100%;
    max-width: 100%;
  }
}
.errorpage {
  // min-height: 100vh;
  // background-image: url("~@/assets/Homer.png");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
}
</style>