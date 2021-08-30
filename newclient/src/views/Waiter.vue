<template>
  <section class="section has-background-white-ter px-2">
    <div class="container">
      <div v-if="waiter.length" class="box">
        <h2 class="subtitle has-text-weight-bold">You called our waiter</h2>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase">
              <th></th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <td>You called your waiter</td>
            <td>
              <OrderTime
                :timediff="dateDiff(currentTime, waiter[0].callTime.toDate())"
              />
            </td>
            <!-- <td>
              <button class="button is-light is-small" @click="cancelWaiter">
                <span class="icon is-small">
                  <i class="fas fa-trash"></i>
                </span>
              </button>
            </td> -->
          </tbody>
        </table>
      </div>
      <div v-else class="waiter has-background-white-ter">
        <div class="bigbtn" @click="callWaiter">
          <span class="icon"> <i class="fas fa-child"></i> </span>
          waiter
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { dateDiff } from "../helpers/functions";
import OrderTime from "../components/OrdersTime";

export default {
  components: { OrderTime },
  data() {
    return {
      currentTime: new Date(),
    };
  },
  computed: {
    ...mapState(["waiters", "user", "table"]),
    waiter() {
      return this.waiters.filter((item) => !item.compleatTime);
    },
  },
  methods: {
    dateDiff,

    callWaiter() {
      console.log("callWaiter");
      this.$store.dispatch("callWaiter", {
        client: this.user?.uid,
        table: this.table || "na",
        callTime: new Date(),
      });
    },
    cancelWaiter() {},
  },
};
</script>

<style lang="scss" scoped>
.waiter {
  height: calc(100vh-56px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bigbtn {
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-style: inherit;
  font-weight: 700;
  text-align: center;
  color: #fff;

  background: #4086e0;

  border: 1px solid rgba($color: gray, $alpha: 0.1);
  box-shadow: 0 8px 8px rgba(gray, 0.3);

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 2px rgba($color: gray, $alpha: 0.1);
    background: lighten(#4086e0, 10%);
  }
}
.section {
  flex: 1 1 auto;
}
</style>