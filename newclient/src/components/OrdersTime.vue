<template>
  <div class="tag has-text-weight-bold is-size-6">
    {{ timediff.hours }} : {{ timediff.minutes }}
  </div>
</template>

<script>
export default {
  name: "OrderTime",
  props: ["timediff"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tag {
  width: 5rem;
}
</style>