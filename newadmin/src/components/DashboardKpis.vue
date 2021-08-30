<template>
  <div class="box">
    <section class="level">
      <div class="level-item has-text-centered">
        <div>
          <span class="icon is-large">
            <i class="fas fa-lg fa-coins"></i>
          </span>
          <p class="heading">{{ $t("dashboard.kpis.revenue") }}</p>
          <p class="title">567 <span class="tag is-success">45</span></p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <span class="icon is-large">
            <i class="fas fa-lg fa-stream"></i>
          </span>
          <p class="heading">{{ $t("dashboard.kpis.orders") }}</p>
          <p class="title">258 <span class="tag is-success">342</span></p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <span class="icon is-large">
            <i class="fas fa-lg fa-balance-scale"></i>
          </span>
          <p class="heading">{{ $t("dashboard.kpis.average") }}</p>
          <p class="title">10 <span class="tag is-success">465</span></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DashboardKpis",
};
</script>

<style>
</style>