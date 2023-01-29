// ChartJS
import { Line } from "react-chartjs-2";
// TS
import { LineGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const LineGraph: React.FC<LineGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <Line data={chartData} />
    </div>
  );
};

export default LineGraph;
