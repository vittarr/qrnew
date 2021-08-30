<template>
  <div class="box px-2 py-2 mb-3">
    <div class="description" @click="$emit('itemdetails')">
      <span class="has-text-weight-bold is-uppercase">{{ item.name }}</span> -
      {{ item.description }}
    </div>

    <div class="control">
      <button
        class="button is-primary is-fullwidth"
        v-if="item.qty == 0"
        @click="$emit('itemadd')"
      >
        <span class="is-size-4">
          {{ item.price }}
        </span>
        <span class="is-size-6 pl-1">₴</span>
      </button>
      <div v-else class="control">
        <p class="is-size-4" @click="$emit('itemremove')">&#8722;</p>
        <span class="has-text-primary is-size-4">{{ item.qty }}</span>
        <p class="is-size-4" @click="$emit('itemadd')">&#43;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 0.5rem;
  justify-items: stretch;
  align-items: center;

  user-select: none;

  .description {
    text-align: left;
    height: 2.8rem;
    overflow: hidden;

    span {
      font-weight: 700;
    }
  }

  .weight {
    text-align: center;
  }

  .control {
    font-weight: 900;
    font-size: 1.4rem;
    color: black;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>