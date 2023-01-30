// SCSS
import graphsStyles from "../scss/Graphs.module.scss";
// Components
import Meta from "@/components/common/Meta";
import SectionIntro from "@/components/common/SectionIntro";
import GraphsSection from "@/components/graphs/GraphsSection";
// Data
import { graphNavLinks, graphsPageImageUrls, templateTrees } from "@/data";
// Other
import axiosInstance from "@/utils/axios";
// TS
import { ResData, Tree } from "..";
// Next
import { GetStaticProps } from "next";
// Hooks
import useGetChartData from "@/hooks/useGetChartData";
// ChartJS
import Chart from "chart.js/auto";
import { LineElement, PointElement, BarElement } from "chart.js";

interface GraphsProps {
  trees: Tree[];
}

Chart.register([LineElement, PointElement, BarElement]);

const Graphs: React.FC<GraphsProps> = ({ trees }) => {
  const treesChartData = useGetChartData(trees || templateTrees);

  return (
    <>
      <Meta title='Trees Analysis - Graphs' imageUrls={graphsPageImageUrls} />
      <div className={graphsStyles.graphsContainer}>
        <section className={graphsStyles.graphsContainer__firstSection}>
          <SectionIntro
            type='side'
            sectionTitle='ChartJS Graphs'
            sectionDescription='Checkout 6 graphs from ChartJS(only 6 since i cant get the others to work pls help).'
          />
          <ul className={graphsStyles.graphsContainer__graphsNav}>
            {graphNavLinks.map((graphLink) => {
              return (
                <li key={graphLink.dest}>
                  <a href={graphLink.dest}>{graphLink.name}</a>
                </li>
              );
            })}
          </ul>
        </section>
        {graphNavLinks.map((graphLink) => {
          return (
            <GraphsSection
              id={graphLink.name}
              graphName={graphLink.name}
              title={graphLink.name}
              key={graphLink.dest}
              chartData={treesChartData}
              backgroundImage={graphLink.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axiosInstance.get("/trees");
    const { trees } = (await data) as ResData;
    return {
      props: {
        trees,
      },
    };
  } catch (error: any) {
    console.log(error.code, error.msg);
    return {
      props: {
        trees: templateTrees,
      },
    };
  }
};

export default Graphs;
