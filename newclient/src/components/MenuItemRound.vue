<template>
  <div class="px-2 py-2 mb-3">
    <figure class="image is-square" @click="$emit('itemdetails')">
      <img
        class="is-rounded px-2 py-2"
        :src="item.image"
        alt="Placeholder image"
      />
    </figure>
    <div class="content">
      <p @click="$emit('itemdetails')">
        <strong>{{ item.name }}</strong> <small>({{ item.weight }})</small>
      </p>
    </div>
    <div>
      <button
        class="button is-fullwidth"
        @click="$emit('itemadd')"
        v-if="item.qty == 0"
      >
        <span class="is-size-4 has-text-weight-bold">
          {{ item.price }}
        </span>
        <span class="is-size-6 pl-1">₴</span>
      </button>
      <div
        class="is-flex is-justify-content-space-between is-align-content-center"
        v-else
      >
        <button class="button px-4 is-rounded" @click="$emit('itemremove')">
          <span class="icon"><i class="fas fa-minus"></i></span>
        </button>
        <span class="has-text-weight-bold is-size-4">
          {{ item.qty }}
        </span>
        <button class="button px-4 is-rounded" @click="$emit('itemadd')">
          <span class="icon"><i class="fas fa-plus"></i></span>
        </button>
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
.image {
  img {
    border: 1px solid gray;
    object-fit: cover;
    overflow: hidden;
    background-color: inherit;
  }
}
</style>