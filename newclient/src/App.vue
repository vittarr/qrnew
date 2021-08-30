<template>
  <!-- <div class="screen"> -->
  <!-- <Navbar /> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
// import Navbar from "./components/Navbar";
export default {
  // components: { Navbar },
};
</script>

<style lang="scss">
.screen {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  // justify-content: space-between;
}
</style>
