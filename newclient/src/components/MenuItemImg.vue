<template>
  <div class="box px-2 py-2 mb-3">
    <article class="media">
      <figure class="media-left">
        <p class="image is-5by3" @click="$emit('itemdetails')">
          <img :src="item.image" alt="Placeholder image" />
        </p>
        <div>
          <button
            class="button is-small is-fullwidth"
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
            <button
              class="button is-small is-white"
              @click="$emit('itemremove')"
            >
              <span class="icon has-text-danger"
                ><i class="fas fa-2x fa-minus"></i
              ></span>
            </button>
            <span class="has-text-weight-bold is-size-5">
              {{ item.qty }}
            </span>
            <button class="button is-small is-white" @click="$emit('itemadd')">
              <span class="icon has-text-success"
                ><i class="fas fa-2x fa-plus"></i
              ></span>
            </button>
          </div>
        </div>
      </figure>

      <div class="media-content">
        <div class="content">
          <p class="description" @click="$emit('itemdetails')">
            <strong>{{ item.name }}</strong> <small>({{ item.weight }})</small>
            <br />
            <span class="has-text-grey">
              {{ item.description }}
              {{ item.description }}
              {{ item.description }}
            </span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
// .box {
//   border: 1px solid lightgray;
// }
.image {
  width: 128px;
  height: 64px;
  margin-bottom: 1rem;
  background: lightgray;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.description {
  text-align: left;
  height: 7rem;
  overflow: hidden;
}
</style>