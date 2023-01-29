// ChartJS
import { Pie } from "react-chartjs-2";
// TS
import { BarGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const PieGraph: React.FC<BarGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieGraph;
