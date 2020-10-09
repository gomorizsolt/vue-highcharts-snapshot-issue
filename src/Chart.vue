<template>
  <chart :options="chartOptions"></chart>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    chart: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        series: [
          {
            name: "iPhone 11 Pro",
            data: [{ name: "iPhone 11 Pro", y: 18, percentage: "18%" }],
          },
          {
            name: "iPhone 8",
            data: [{ name: "iPhone 8", y: 14, percentage: "14%" }],
          },
          {
            name: "iPhone backup",
            data: [{ name: "iPhone backup", y: 16, percentage: "16%" }],
          },
          {
            name: "scale up app iPhone",
            data: [{ name: "scale up app iPhone", y: 7, percentage: "7%" }],
          },
          {
            name: "iPhone reset",
            data: [{ name: "iPhone reset", y: 9, percentage: "9%" }],
          },
        ],
      },
    };
  },
};
</script>
