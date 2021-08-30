<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-tasks"></i>
      </span>
      {{ $t("orders.pagename") }}
    </h2>

    <div class="box">
      <div class="is-flex is-justify-content-space-between">
        <div class="content">
          <h4 class="is-uppercase">{{ $t("orders.subheader") }}</h4>
          <p>
            {{ $t("orders.description") }}
          </p>
        </div>
      </div>
    </div>

    <div class="box" v-if="!(orders && orders.length > 0)">
      <h4 class="subtitle is-4 has-text-danger">
        {{ $t("orders.empyMessage") }}
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
            <a> {{ $t(`orders.tabs.${tab}`) }} </a>
          </li>
        </ul>
      </div>
      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase">
              <th>{{ $t("orders.table.table") }}</th>
              <th
                class="w15"
                :class="{
                  asc: sort.field == 'amount' && sort.direction == 'asc',
                  desc: sort.field == 'amount' && sort.direction == 'desc',
                }"
                @click="handleSort('amount')"
              >
                {{ $t("orders.table.order") }}
              </th>
              <th
                :class="{
                  asc: sort.field == 'qty' && sort.direction == 'asc',
                  desc: sort.field == 'qty' && sort.direction == 'desc',
                }"
                @click="handleSort('qty')"
              >
                {{ $t("orders.table.items") }}
              </th>
              <th
                class="has-text-centered w15"
                :class="{
                  asc: sort.field == 'orderTime' && sort.direction == 'asc',
                  desc: sort.field == 'orderTime' && sort.direction == 'desc',
                }"
                @click="handleSort('orderTime')"
              >
                {{ $t("orders.table.ordered") }}
              </th>
              <th class="has-text-centered w15">
                {{ $t("orders.table.control") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in ordersFiltered" :key="order.id">
              <td>{{ order.table || "no tbl" }}</td>
              <td>
                <b> {{ order.qty }} </b>
                items for <br />
                <b> {{ order.amount }} </b>
                UAH
              </td>

              <td>
                {{
                  order.order
                    .map((item) => `(${item.qty}) ${item.name}`)
                    .join("; ")
                }}
              </td>

              <td>
                <OrderTime
                  :timeEnd="order.compleatTime && order.compleatTime.toDate()"
                  :timeStart="order.orderTime.toDate()"
                  :timeCurrent="currentTime"
                  :timeWarning="40"
                />
              </td>

              <td class="has-text-centered">
                <button
                  v-if="!order.compleatTime"
                  @click="changeOrderState(order.id)"
                  class="button is-primary is-uppercase"
                >
                  {{
                    !(order.acceptTime > 0)
                      ? "accept"
                      : !(order.compleatTime > 0)
                      ? "compleat"
                      : "done"
                  }}
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
import OrderTime from "../components/OrderTime";

import { dateDiff } from "../helpers/functions";

export default {
  name: "Orders",
  components: { OrderTime },
  data() {
    return {
      modal: {
        show: false,
      },
      currentTime: new Date(),
      sort: {
        field: "acceptTime",
        direction: "desc",
      },

      tabsList: ["all", "notCompleated", "compleated"],
      tabActive: "all",
    };
  },
  computed: {
    ...mapState(["orders"]),
    ordersSorted() {
      return _.orderBy(this.orders, [this.sort.field], [this.sort.direction]);
    },
    ordersFiltered() {
      if (this.tabActive == "compleated") {
        return this.ordersSorted.filter((item) => item["compleatTime"] > 0);
      } else if (this.tabActive == "notCompleated") {
        return this.ordersSorted.filter((item) => !(item["compleatTime"] > 0));
      } else {
        return this.ordersSorted;
      }
    },
  },
  methods: {
    dateDiff,
    tabSelect(tab) {
      this.tabActive = tab;
    },

    handleSort(field) {
      if (this.sort.field != field) {
        this.sort.field = field;
      } else {
        this.sort.direction = this.sort.direction == "desc" ? "asc" : "desc";
      }
    },

    async changeOrderState(id) {
      const currentItem = this.orders.filter((item) => item.id == id)[0];
      console.log("changeOrderState", currentItem);
      if (currentItem.acceptTime > 0) {
        if (currentItem.compleatTime > 0) {
          await this.$store.dispatch("updateOrder", {
            ...currentItem,
            acceptTime: null,
            compleatTime: null,
          });
        } else {
          await this.$store.dispatch("updateOrder", {
            ...currentItem,
            compleatTime: new Date(),
          });
          await this.$store.dispatch("compleatOrder", {
            ...currentItem,
            compleatTime: new Date(),
          });
        }
      } else {
        await this.$store.dispatch("updateOrder", {
          ...currentItem,
          acceptTime: new Date(),
        });
      }
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