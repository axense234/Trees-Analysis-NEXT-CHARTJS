// Components
import BarGraph from "@/components/graphs/BarGraph";
import LineGraph from "@/components/graphs/LineGraph";
import SectionIntro from "@/components/common/SectionIntro";
import Meta from "@/components/common/Meta";
// SCSS
import homeStyles from "../scss/Home.module.scss";
// ChartTS
import { LineElement, PointElement, BarElement } from "chart.js";
import { Chart } from "chart.js/auto";
// Next
import { GetStaticProps } from "next/types";
// Other
import axiosInstance from "@/utils/axios";
// TS
import { ResData, Tree } from "..";
// Hooks
import useGetChartData from "@/hooks/useGetChartData";
// Data
import { homePageImageUrls, templateTrees } from "@/data";

Chart.register([LineElement, PointElement, BarElement]);

interface HomeProps {
  trees: Tree[];
}

const Home: React.FC<HomeProps> = ({ trees }) => {
  const treesChartData = useGetChartData(trees || templateTrees);

  return (
    <>
      <Meta imageUrls={homePageImageUrls} />
      <div className={homeStyles.homeContainer}>
        <section className={homeStyles.homeContainer__firstSection}>
          <SectionIntro
            type='side'
            sectionTitle='Trees Analysis'
            sectionDescription='Next JS project with ChartJS for practicing with graphs and Next JS.'
          />
          <LineGraph chartData={treesChartData} />
        </section>
        <section className={homeStyles.homeContainer__secondSection}>
          <BarGraph chartData={treesChartData} />
          <SectionIntro
            type='side'
            sectionTitle='Graphs practicing'
            sectionDescription='My first time practicing with ChartsJS graphs!'
          />
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axiosInstance.get(
      "https://trees-analysis-nextjs-chartjs-ca.netlify.app/api/trees"
    );
    const { trees } = (await data) as ResData;

    return {
      props: {
        trees,
      },
    };
  } catch (error: any) {
    console.log(error);
    return {
      props: {
        trees: templateTrees,
      },
    };
  }
};

export default Home;
