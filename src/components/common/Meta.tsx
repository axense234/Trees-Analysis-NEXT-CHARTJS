// Next
import Head from "next/head";
// TS
import { MetaProps } from "../..";

const Meta: React.FC<MetaProps> = ({ title, keywords, desc, imageUrls }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta name='description' content={desc} />
      <title>{title}</title>
      {imageUrls?.map((url) => {
        return <link rel='preload' as='image' href={url} key={url} />;
      })}
    </Head>
  );
};

Meta.defaultProps = {
  title: "Trees Analysis",
  keywords: "programming, nextjs, reactjs, web development, chartjs",
};

export default Meta;
