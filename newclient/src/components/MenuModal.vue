<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-image">
          <button
            class="modal-close is-large"
            aria-label="close"
            @click="$emit('close')"
          ></button>

          <figure class="image is-5by3">
            <img :src="item.image" alt="Placeholder image" />
          </figure>
        </div>

        <div class="card-content">
          <div class="content">
            <p>
              <strong>{{ item.name }}</strong>
              <small class="ml-2">({{ item.weight }})</small>
            </p>
            <p>
              {{ item.description }}
              {{ item.description }}
            </p>
          </div>
        </div>

        <footer class="card-footer" v-if="item.qty == 0">
          <p
            class="card-footer-item is-size-4 has-text-weight-bold is-primary"
            @click="$emit('itemadd')"
          >
            {{ item.price }} <span class="is-size-6 pl-1">₴</span>
          </p>
        </footer>

        <footer class="card-footer" v-else>
          <p class="card-footer-item is-size-4" @click="$emit('itemremove')">
            <span class="icon has-text-danger"
              ><i class="fas fa-minus"></i
            ></span>
          </p>
          <p class="card-footer-item is-size-4 has-text-weight-bold">
            {{ item.qty }}
          </p>
          <p class="card-footer-item is-size-4" @click="$emit('itemadd')">
            <span class="icon has-text-success"
              ><i class="fas fa-plus"></i
            ></span>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "modal"],
  components: {},
  computed: {
    show() {
      return this.item.id == this.modal.id;
    },
  },
};
</script>

<style>
</style>