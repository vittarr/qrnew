<template>
  <div class="table-container">
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr class="is-uppercase w15">
          <th>{{ $t("dashboard.table.period") }}</th>
          <th>{{ $t("dashboard.table.items") }}</th>
          <th>{{ $t("dashboard.table.orders") }}</th>
          <th>{{ $t("dashboard.table.revenue") }}</th>
          <th>{{ $t("dashboard.table.aveOrder") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in summary" :key="day.id">
          <td>{{ day.id }}</td>
          <td>{{ day.qty }}</td>
          <td>{{ day.count }}</td>
          <td>{{ day.amount }}</td>
          <td>{{ Math.round(day.amount / day.count, 0) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["summary"]),
  },
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
</style>