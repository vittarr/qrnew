<script>
import { Bar } from "vue-chartjs";

export default {
  name: "DashboardChart",
  extends: Bar,
  props: ["chartLabels", "chartData"],
  data() {
    return {
      chartdata: {
        //Data to be represented on x-axis
        labels: this.chartLabels,
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "#f87979",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            //Data to be represented on y-axis
            data: this.chartData,
          },
        ],
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>