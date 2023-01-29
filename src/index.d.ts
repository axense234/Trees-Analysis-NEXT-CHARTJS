// Special Components
// ============================
interface MetaProps {
  title?: string;
  keywords?: string;
  desc?: string;
  imageUrls?: string[];
}

interface SharedLayoutProps {
  children: ReactNode;
}
// ============================

// ChartJS
// ============================
interface LineGraphProps {
  chartData: ChartData<
    "line",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface BarGraphProps {
  chartData: ChartData<
    "bar",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface PieGraphProps {
  chartData: ChartData<
    "pie",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface BubbleGraphProps {
  chartData: ChartData<
    "bubble",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface DoughnutGraphProps {
  chartData: ChartData<
    "doughnut",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface PolarAreaGraphProps {
  chartData: ChartData<
    "polarArea",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface RadarGraphProps {
  chartData: ChartData<
    "radar",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

interface ScatterGraphProps {
  chartData: ChartData<
    "scatter",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}
// ============================

// Data
// ============================
type Tree = {
  tree_uid: string;
  treeName: string;
  treeScientificName: string;
  treeFamily: string;
  amountOfTrees: number;
  pricePerTreeString: string;
  plantedTrees: number;
};

type NavLink = {
  id: number;
  name: string;
  dest: string;
};

interface GraphNavLink extends NavLink {
  imageUrl: string;
}

interface AboutTechnology {
  id: number;
  logoUrl: string;
  techUrl: string;
  label: string;
}

interface AboutTechnologiesUsedProps {
  techUsed: AboutTechnology[];
}

interface APIRoute {
  id?: number;
  method: string;
  bgColor: string;
  routeUrl: string;
}

type ResData = {
  msg: string;
  tree?: Tree | {};
  trees?: Tree[] | [];
};

// Exports
// ============================
export {
  MetaProps,
  Tree,
  NavLink,
  GraphNavLink,
  AboutTechnology,
  AboutTechnologiesUsedProps,
  SharedLayoutProps,
  LineGraphProps,
  BarGraphProps,
  PieGraphProps,
  BubbleGraphProps,
  DoughnutGraphProps,
  PolarAreaGraphProps,
  RadarGraphProps,
  ScatterGraphProps,
  ResData,
  APIRoute,
};
// ============================
