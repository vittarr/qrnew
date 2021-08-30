<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr class="is-uppercase">
        <th v-for="(field, celln) in fields" :key="celln">{{ field }}</th>
        <th>del</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rown) in getOrderCart" :key="rown">
        <td v-for="(field, celln) in fields" :key="celln">{{ row[field] }}</td>
        <td>
          <button
            class="button is-light is-small"
            @click="$emit('delete', { id: row.id, qty: -row.qty })"
          >
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="has-text-weight-bold">
        <td>TOTAL</td>
        <td>{{ getOrderQty }}</td>
        <td>{{ getOrderAmount }}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartTable",
  props: ["field"],
  data() {
    return {
      fields: ["name", "qty", "amount"],
    };
  },
  computed: {
    ...mapGetters(["getOrderCart", "getOrderQty", "getOrderAmount"]),
  },
};
</script>

<style lang="scss" scoped>
</style>