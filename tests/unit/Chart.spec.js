import { mount } from "@vue/test-utils";
import Highcharts from "highcharts";
import Chart from "@/Chart.vue";

const data = [
  {
    name: "Distribution in %",
    data: [
      { name: "iPhone 11 Pro", y: 18, percentage: "18%" },
      { name: "iPhone 11 Pro", y: 18, percentage: "18%" },
      { name: "iPhone 11 Pro", y: 18, percentage: "18%" },
      { name: "iPhone 8", y: 14, percentage: "14%" },
      { name: "iPhone backup", y: 16, percentage: "16%" },
      { name: "scale up app iPhone", y: 7, percentage: "7%" },
      { name: "iPhone reset", y: 9, percentage: "9%" },
    ],
  },
];

Highcharts.useSerialIds(true);

describe("Chart.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Chart, {
      propsData: {
        type: "bar",
        data,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
