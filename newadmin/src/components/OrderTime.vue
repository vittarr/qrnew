<template>
  <span class="tag is-large" :class="timeleft">
    {{ timeShow }}
    <i class="material-icons icon" v-show="timeleft == 'red'">warning_amber</i>
  </span>
</template>

<script>
import moment from "moment";

export default {
  props: ["timeStart", "timeEnd", "timeCurrent", "timeWarning"],
  data() {
    return {
      moment: moment,
    };
  },
  computed: {
    timediff() {
      return moment(this.timeEnd ? this.timeEnd : this.timeCurrent).diff(
        this.timeStart
      );
    },
    timeShow() {
      return moment.utc(this.timediff).format("HH:mm:ss");
    },
    timeleft() {
      if (this.timeEnd) return;
      return moment(this.timeEnd ? this.timeEnd : this.timeCurrent).diff(
        this.timeStart,
        "minutes"
      ) > this.timeWarning
        ? "is-danger is-light"
        : "is-success is-light";
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  width: 100%;
}
</style>