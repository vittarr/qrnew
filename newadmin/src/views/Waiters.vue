<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-child"></i>
      </span>
      {{ $t("waiters.pagename") }}
    </h2>

    <div class="box">
      <div class="content">
        <h4 class="is-uppercase">{{ $t("waiters.subheader") }}</h4>
        <p>
          {{ $t("waiters.description") }}
        </p>
      </div>
    </div>

    <div class="box" v-if="!(waiters && waiters.length > 0)">
      <h4 class="subtitle is-4 has-text-danger">
        {{ $t("waiters.emptyMessage") }}
      </h4>
    </div>

    <div class="box" v-else>
      <div class="tabs">
        <ul class="ml-0">
          <li
            v-for="tab in tabsList"
            :key="tab"
            :class="{ 'is-active': tab == tabActive }"
            @click="tabSelect(tab)"
          >
            <a>
              {{ $t(`waiters.tabs.${tab}`) }}
            </a>
          </li>
        </ul>
      </div>
      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase w15">
              <th>{{ $t("waiters.table.table") }}</th>
              <th>{{ $t("waiters.table.client") }}</th>
              <th class="w20">{{ $t("waiters.table.time") }}</th>
              <th class="w15">{{ $t("waiters.table.control") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="waiter in waitersFiltered" :key="waiter.id">
              <td>{{ waiter.table || "no tbl" }}</td>
              <td>{{ waiter.client }}</td>
              <td>
                <OrderTime
                  :timeEnd="
                    waiter.compleatTime
                      ? waiter.compleatTime.toDate()
                      : currentTime
                  "
                  :timeStart="waiter.callTime.toDate()"
                  :timeWarning="40"
                />
              </td>
              <td class="has-text-centered">
                <button
                  v-if="!waiter.compleatTime"
                  @click="changeWaiterState(waiter.id)"
                  class="button is-primary is-uppercase"
                >
                  Compleat
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
import OrderTime from "@/components/OrderTime";

export default {
  name: "Waiters",
  data() {
    return {
      currentTime: new Date(),
      sort: {
        field: "acceptTime",
        direction: "desc",
      },
      tabsList: ["all", "notCompleated", "compleated"],
      tabActive: "all",
    };
  },
  components: { OrderTime },
  computed: {
    ...mapState(["waiters"]),
    waitersSorted() {
      return _.orderBy(this.waiters, [this.sort.field], [this.sort.direction]);
    },
    waitersFiltered() {
      if (this.tabActive == "compleated") {
        return this.waitersSorted.filter((item) => item?.compleatTime > 0);
      } else if (this.tabActive == "notCompleated") {
        return this.waitersSorted.filter((item) => !(item?.compleatTime > 0));
      } else {
        return this.waitersSorted;
      }
    },
    // {
    //   if (this.tabActive == "All") {
    //     return this.waiters;
    //   } else {
    //     return this.waiters.filter((item) => !item.compleatTime);
    //   }
    // },
  },
  methods: {
    tabSelect(tab) {
      this.tabActive = tab;
    },
    async changeWaiterState(id) {
      const currentWaiter = this.waiters.filter((item) => item.id == id)[0];
      console.log("changeOrderState", currentWaiter);

      await this.$store.dispatch("updateWaiter", {
        ...currentWaiter,
        compleatTime: new Date(),
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.w10 {
  width: 10%;
}
.w15 {
  width: 15%;
}
.w20 {
  width: 20%;
}
</style>