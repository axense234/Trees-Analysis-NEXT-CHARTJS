// ChartJS
import { Radar } from "react-chartjs-2";
// TS
import { RadarGraphProps } from "@/index";
// SCSS
import graphStyle from "../../scss/Graph.module.scss";

const RadarGraph: React.FC<RadarGraphProps> = ({ chartData }) => {
  return (
    <div className={graphStyle.graph}>
      <Radar data={chartData} />
    </div>
  );
};

export default RadarGraph;
