// ChartJS
import { ChartData } from "chart.js";
// TS
import { Tree } from "..";

const useGetChartData = (chartData: Tree[]): ChartData => {
  return {
    labels: chartData.map(({ treeName }) => treeName),
    datasets: [
      {
        label: "Amount of Trees",
        data: chartData.map(({ amountOfTrees }) => amountOfTrees),
        backgroundColor: [
          "#1a2902",
          "#344c11ff",
          "#778d45",
          "#aec09a",
          "#aec670",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Price of Trees",
        data: chartData.map(({ pricePerTreeString }) =>
          Number(pricePerTreeString.split("$")[1])
        ),
        backgroundColor: [
          "#1a2902",
          "#344c11ff",
          "#778d45",
          "#aec09a",
          "#aec670",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Planted Trees",
        data: chartData.map(({ amountOfTrees }) => amountOfTrees),
        backgroundColor: [
          "#1a2902",
          "#344c11ff",
          "#778d45",
          "#aec09a",
          "#aec670",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
};

export default useGetChartData;
