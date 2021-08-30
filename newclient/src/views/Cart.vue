<template>
  <section class="section has-background-white-ter px-2">
    <div class="container">
      <div v-if="getOrderQty > 0" class="box">
        <h2 class="subtitle has-text-weight-bold">Your cart</h2>
        <CartTable @delete="changeOrderItems" />
        <div class="buttons">
          <a class="button" @click="saveOrder">Order</a>
          <a class="button is-danger" @click="clearOrder">Cancel</a>
        </div>
      </div>
      <div v-else class="box">
        <p class="title has-text-danger">Please chouse something first</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import CartTable from "@/components/CartTable";

export default {
  name: "Cart",
  components: { CartTable },
  computed: {
    ...mapState(["orders", "user", "table"]),
    ...mapGetters([
      "getOrderCart",
      "getOrderQty",
      "getOrderAmount",
      "getOrderItems",
    ]),
    order() {
      const temp = [];
      this.getOrderCart.map((item) =>
        temp.push({
          id: item.id,
          name: item.name,
          qty: item.qty,
          price: item.price,
          amount: item.amount,
        })
      );
      return temp;
    },
  },
  methods: {
    ...mapMutations(["changeOrderItems", "clearOrder"]),
    ...mapActions(["saveOrder"]),
    saveOrder() {
      console.log("order", this.getOrderCart);
      this.$store.dispatch("saveOrder", {
        client: this.user?.uid,
        table: this.table || "na",
        orderTime: new Date(),
        order: this.order,
        qty: this.getOrderQty,
        amount: this.getOrderAmount,
      });
      this.clearOrder();
    },
  },

  watch: {
    getOrderQty(value) {
      if (!value) {
        this.$router.push(`menu`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  flex: 1 1 auto;
}
</style>