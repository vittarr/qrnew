<template>
  <section class="section has-background-white-ter px-2">
    <div class="container">
      <div v-if="orders.length" class="box">
        <h2 class="subtitle has-text-weight-bold">You have ordered</h2>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase">
              <th>Order</th>
              <th>Stat</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in Object.keys(orders)" :key="order">
              <td>
                <span v-for="order in orders[order].order" :key="order.id">
                  <strong> ({{ order.qty }})</strong> {{ order.name }};
                </span>
              </td>
              <td>
                <b v-if="orders[order].compleatTime"> Compleated </b>

                <OrderTime
                  v-else
                  :timediff="
                    dateDiff(currentTime, orders[order].orderTime.toDate())
                  "
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-else class="box">
        <p class="title has-text-danger">You do not have orders yet</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { dateDiff } from "../helpers/functions";
import OrderTime from "../components/OrdersTime";
export default {
  name: "Orders",
  data() {
    return {
      currentTime: new Date(),
    };
  },
  components: { OrderTime },
  computed: {
    ...mapState(["orders"]),
  },
  methods: {
    dateDiff,
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.section {
  flex: 1 1 auto;
}
</style>