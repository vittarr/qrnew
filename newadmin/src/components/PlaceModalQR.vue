<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t("place.modalQrHeader") }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('modalClose')"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- QR Codes -->
        <div id="printqr" class="columns is-multiline">
          <div class="column border is-one-fifth">
            <h5 class="">{{ $t("place.modelQrTable") }} N/A</h5>
            <img :src="qrCode" />
          </div>

          <div
            v-for="key in Object.keys(qrCodes)"
            :key="key"
            class="column border is-one-fifth"
          >
            <h5 class="">{{ $t("place.modelQrTable") }} {{ key }}</h5>
            <img :src="qrCodes[key]" />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="printQR">
          {{ $t("general.btnPrint") }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  name: "PlaceModal.QR",
  components: {},
  props: [""],
  data() {
    return {
      qrCodes: {},
      qrCode: null,
    };
  },

  computed: {
    place() {
      return this.$store.state.place;
    },
  },
  mounted() {
    this.generateQR(`http://mymenu.com/${this.place.id}/menu`).then(
      (res) => (this.qrCode = res)
    );

    for (let i = 1; i <= this.place.tables; i++) {
      this.generateQR(
        `http://mymenu.com/${this.place.id}/menu&table=${i}`
      ).then((res) => (this.qrCodes[i] = res));
    }
  },

  methods: {
    printQR() {
      // Get HTML to print from element
      const prtHtml = document.getElementById("printqr").innerHTML;
      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );
      WinPrint.document.write(
        `<!DOCTYPE html>
        <html>
          <head>
            ${stylesHtml}
          </head>
          <body>
            ${prtHtml}
          </body>
        </html>`
      );
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
    generateQR(data) {
      const options = {
        errorCorrectionLevel: "H",
        quality: 1,
        margin: 1,
        scale: 5,
        // color: {
        //   dark: "#1f1f1f",
        //   light: "#f1f1f1",
        // },
      };
      try {
        return QRCode.toDataURL(data, options);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-card {
  overflow: auto;
}
</style>