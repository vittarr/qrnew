<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="field">
      <label class="label">Score</label>
      <div class="control">
        <StarRating
          v-model="item.score"
          :max-rating="4"
          border-color="#fff"
          :show-rating="false"
          :glow="5"
          :inline="true"
        />
        <span class="subheader has-text-weight-bold">
          {{ responce[item.score] }}
        </span>
        <p v-if="$v.item.score.$error" class="help is-danger">
          <span v-if="!$v.item.score.between"> This field is required </span>
        </p>
      </div>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="field">
        <div class="control">
          <textarea
            v-model="item.comment"
            class="textarea has-fixed-size"
            type="text"
            placeholder="Comment"
          />
          <p v-if="$v.item.comment.$error" class="help is-danger">
            <span v-if="!$v.item.comment.required">
              This field is required
            </span>
            <span v-if="!$v.item.comment.minLength">
              Min length
              {{ $v.item.comment.$params.minLength.min }} required
            </span>
          </p>
        </div>
      </div>
    </div>

    <button class="button is-primary" type="submit">Send >></button>
  </form>
</template>

<script>
import { required, between, minLength } from "vuelidate/lib/validators";
import StarRating from "vue-star-rating";

export default {
  name: "ReviewEditor",
  components: { StarRating },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      responce: {
        0: "",
        1: "very bad",
        2: "so-so",
        3: "good",
        4: "perfect",
      },
    };
  },
  validations: {
    item: {
      score: { between: between(1, 4) },
      comment: { required, minLength: minLength(16) },
    },
  },
  mounted() {
    this.item.score = 0;
    this.item.placeId = this.$route.params.id;
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      this.$emit("save");
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-star-rating {
  .vue-star-rating {
    justify-content: space-around !important;
    .vue-star-rating-star {
      margin: 0 3rem !important;
    }
  }
}
</style>