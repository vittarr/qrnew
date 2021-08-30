<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-chart-bar"></i>
      </span>
      {{ $t("dashboard.pagename") }}
    </h2>
    <!-- <DashboardKpis /> -->

    <div class="box">
      <!-- <div class="tabs">
        <ul class="ml-0">
          <li
            v-for="tab in tabsList"
            :key="tab"
            :class="{ 'is-active': tab == tabActive }"
            @click="tabSelect(tab)"
          >
            <a>{{ $t(`dashboard.tabs.${tab}`) }}</a>
          </li>
        </ul>
      </div> -->

      <!-- <div class="columns">
        <div class="column is-2">
          <div class="select">
            <select>
              <option>Daily</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>
        <div class="buttons">
          <button class="button">Update</button>
          <button class="button">Download xls</button>
        </div>
      </div> -->

      <!-- GRAPH LEFT -->
      <!-- <DashboardChart
        v-if="tabActive != 'table'"
        :chartLabels="chartLabels"
        :chartData="chartData"
      ></DashboardChart> -->
      <!-- TABLE -->
      <DashboardTable />
    </div>
  </section>
</template>

<script>
// import DashboardKpis from "../components/DashboardKpis.vue";
// import DashboardChart from "../components/DashboardChart.vue";
import DashboardTable from "../components/DashboardTable.vue";

export default {
  name: "Dashboard",
  components: { DashboardTable },
  data() {
    return {
      tabsList: ["graph", "table"],
      tabActive: "graph",
      chartLabels: [
        "1",
        "2",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      chartData: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
    };
  },
  methods: {
    tabSelect(tab) {
      this.tabActive = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.select,
.select select {
  width: 100%;
}
</style>