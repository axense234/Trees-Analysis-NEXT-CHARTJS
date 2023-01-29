// ChartJS
import { PolarArea } from "react-chartjs-2";
// TS
import { PolarAreaGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const PolarAreaGraph: React.FC<PolarAreaGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <PolarArea data={chartData} />
    </div>
  );
};

export default PolarAreaGraph;
