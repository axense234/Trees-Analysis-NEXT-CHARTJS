// SCSS
import graphsSectionStyles from "../../scss/GraphsSection.module.scss";
// ChartJS
import { ChartData } from "chart.js";
// Components
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import DoughnutGraph from "./DoughnutGraph";
import PolarAreaGraph from "./PolarAreaGraph";
import RadarGraph from "./RadarGraph";

interface GraphsSectionProps {
  id: string;
  title: string;
  graphName: string;
  chartData: ChartData;
  backgroundImage: string;
}

const GraphsSection: React.FC<GraphsSectionProps> = ({
  id,
  title,
  graphName,
  chartData,
  backgroundImage,
}) => {
  const renderedGraph = useGetCorrectGraph(graphName, chartData);

  return (
    <section
      className={graphsSectionStyles.graphsSection}
      id={id}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header>
        <h2>{title}</h2>
        <a href='#navbar'>Go Back</a>
      </header>
      {renderedGraph}
    </section>
  );
};

const useGetCorrectGraph = (graphName: string, chartData: ChartData) => {
  switch (graphName) {
    case "Line":
      return <LineGraph chartData={chartData} />;
    case "Bar":
      return <BarGraph chartData={chartData} />;
    case "Pie":
      return <PieGraph chartData={chartData} />;
    case "Doughnut":
      return <DoughnutGraph chartData={chartData} />;
    case "Polar Area":
      return <PolarAreaGraph chartData={chartData} />;
    case "Radar":
      return <RadarGraph chartData={chartData} />;
  }
};

export default GraphsSection;
