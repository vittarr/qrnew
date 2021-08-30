<template>
  <div class="loader__container">
    <div class="loader__loader"></div>
  </div>
</template>

<script>
//https://loading.io/css/
export default {};
</script>

<style>
.loader__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader__loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>