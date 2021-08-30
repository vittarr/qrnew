<template>
  <section class="section">
    <h2 class="title is-flex is-align-items-center">
      <span class="icon has-text-danger mr-4">
        <i class="fas fa-users"></i>
      </span>
      {{ $t("workers.pagename") }}
    </h2>

    <div class="box">
      <div class="content">
        <h4 class="is-uppercase">{{ $t("workers.subheader") }}</h4>
        <p>
          {{ $t("workers.description") }}
        </p>
        <button class="button" @click.prevent="modalToggle(null)">
          {{ $t("workers.btnAddWorker") }}
        </button>
      </div>
    </div>

    <div class="box" v-if="!(workers && workers.length > 0)">
      <h4 class="subtitle is-4 has-text-danger">
        You do not have workers yet. Please register some first
      </h4>
    </div>

    <div class="box" v-else>
      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr class="is-uppercase w15">
              <th>{{ $t("workers.tableEmail") }}</th>
              <th>{{ $t("workers.tableName") }}</th>
              <th>{{ $t("workers.tablePhone") }}</th>
              <th>{{ $t("workers.tableRole") }}</th>
              <th>{{ $t("workers.tableEdit") }}</th>
              <th>{{ $t("workers.tableDelete") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="worker in workers" :key="worker.email">
              <td>{{ worker.email }}</td>
              <td>
                <b>{{ worker.name }}</b>
              </td>
              <td>{{ worker.phone }}</td>

              <td>
                <span class="tag">
                  {{ worker.role }}
                </span>
              </td>
              <td>
                <button
                  @click="modalToggle(worker.email)"
                  class="button is-light is-small"
                >
                  <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                  </span>
                </button>
              </td>
              <td>
                <button
                  @click="deleteWorker(worker)"
                  class="button is-light is-small"
                >
                  <span class="icon is-small">
                    <i class="fas fa-trash"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ================= MODAL PART ================= -->
    <div class="modal" :class="{ 'is-active': modal.show }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ $t("workers.modalEditHeader") }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="modalToggle(null)"
          ></button>
        </header>
        <form class="form" @submit.prevent="submit">
          <section class="modal-card-body">
            <div class="columns is-multiline">
              <div class="column is-half">
                <div class="field">
                  <label class="label">{{ $t("workers.labelEmail") }}</label>
                  <div class="control">
                    <input
                      v-model="worker.email"
                      class="input"
                      type="text"
                      :placeholder="placeholder.email"
                      :disabled="workerChange[0] !== 'new'"
                    />
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">{{ $t("workers.labelPassword") }}</label>
                  <div class="control">
                    <input
                      v-model="worker.password"
                      class="input"
                      type="text"
                      :placeholder="placeholder.password"
                    />
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">{{ $t("workers.labelName") }}</label>
                  <div class="control">
                    <input
                      v-model="worker.name"
                      class="input"
                      type="text"
                      :placeholder="placeholder.name"
                    />
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">{{ $t("workers.labelPhone") }}</label>
                  <div class="control">
                    <input
                      v-model="worker.phone"
                      class="input"
                      type="text"
                      :placeholder="placeholder.phone"
                    />
                  </div>
                </div>
              </div>

              <div class="column is-full">
                <div
                  class="block is-flex is-justify-content-space-around is-align-items-center"
                >
                  <div class="control is-size-4">
                    <label class="radio">
                      <input
                        v-model="worker.role"
                        type="radio"
                        name="role"
                        value="admin"
                      />
                      admin
                    </label>
                    <label class="radio">
                      <input
                        v-model="worker.role"
                        type="radio"
                        name="role"
                        value="waiter"
                      />
                      waiter
                    </label>
                  </div>
                  <p>{{ $t("workers.labelRole") }}</p>
                </div>
              </div>
            </div>
          </section>

          <footer class="modal-card-foot">
            <button type="submit" class="button button is-success">save</button>
          </footer>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Workers",
  components: {},
  data() {
    return {
      worker: {},
      placeholder: {},
      modal: {
        show: false,
        email: null,
      },
    };
  },
  computed: {
    workers() {
      return (
        this.$store.state.workers &&
        this.$store.state.workers.filter((item) => item.status !== "draft")
      );
    },
    workerChange() {
      const curWorker = this.worker;
      const preWorker = this.workers.filter(
        (item) => item.email == this.modal.email
      )[0];
      let workerChange = {};

      if (preWorker) {
        Object.keys(curWorker).forEach((key) => {
          if (key == "password") {
            curWorker[key].length > 0 && (workerChange[key] = curWorker[key]);
          } else {
            curWorker[key] !== preWorker[key] &&
              (workerChange[key] = curWorker[key]);
          }
          workerChange["email"] = curWorker["email"];
          workerChange["uid"] = curWorker["uid"];
        });
        return ["update", workerChange];
      } else {
        workerChange = curWorker;
        return ["new", workerChange];
      }
    },
  },
  methods: {
    selectWorker(email) {
      if (email) {
        Object.assign(
          this.worker,
          this.workers.filter((item) => item.email == email)[0]
        );
      } else {
        this.worker = {
          name: "",
          email: "",
          phone: "",
          password: "",
          role: "",
          status: "",
        };
      }
    },
    modalToggle(email) {
      this.modal.show = !this.modal.show;
      this.modal.email = email;
      this.selectWorker(email);
    },

    submit() {
      const [type, worker] = this.workerChange;
      if (type == "new") {
        console.log("create", worker);
        this.$store.dispatch("createWorker", worker);
      } else if (type == "update" && Object.keys(worker).length > 0) {
        console.log("update", worker);
        this.$store.dispatch("updateWorker", worker);
      } else {
        console.log("do nothing", worker);
      }
      this.modalToggle(null);
    },

    // BUTTONS
    deleteWorker(worker) {
      this.$store.dispatch("deleteWorker", worker);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-card {
  overflow: auto;
}
</style>