<template>
  <transition name="fade">
    <div
      class="modal"
      ref="modal"
      @keyup.esc="$emit('close')"
    >
      <div class="modal__inner">
        <h2 class="modal__header">
          {{ modalHeader }}
          <span class="modal__close" @click="$emit('close')"> &#10005; </span>
        </h2>
        <div class="modal__main">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//https://codepen.io/NielsVoogt/pen/XWjPdjO
export default {
  name: "Modal",
  props: ["modalHeader"],
  mounted() {
    this.$refs.modal.focus();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    position: relative;
    background: #fff;
    // min-width: 250px;
    width: 98%;
    min-height: 250px;
    border-radius: 0.5rem;
    text-align: left;
  }

  &__close {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    padding: 0.3rem;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;

    border-radius: 150px 150px 150px 0;
    background: #121212;
    color: #f2f2f2;
    font-weight: 900;
    font-size: 1rem;
  }

  &__header {
    font-size: 1.6rem;
    font-weight: 700;
    background: #f2f2f2;
    color: #121212;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 3px solid #fff;
    float: left;
  }

  &__main {
    width: 100%;
    padding:  1rem;
  }
}
</style>