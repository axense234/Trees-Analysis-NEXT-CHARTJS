// ChartJS
import { Doughnut } from "react-chartjs-2";
// TS
import { DoughnutGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const DoughnutGraph: React.FC<DoughnutGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DoughnutGraph;
