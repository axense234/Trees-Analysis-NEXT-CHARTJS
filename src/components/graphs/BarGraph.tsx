// ChartJS
import { Bar } from "react-chartjs-2";
// TS
import { BarGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const BarGraph: React.FC<BarGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <Bar data={chartData} />
    </div>
  );
};

export default BarGraph;
