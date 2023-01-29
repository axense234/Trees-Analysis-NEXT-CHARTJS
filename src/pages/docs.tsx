// SCSS
import docsStyles from "../scss/Docs.module.scss";
// Data
import { docsApiRoutes, docsPageImageUrls } from "@/data";
// Components
import SectionIntro from "@/components/common/SectionIntro";
import Meta from "@/components/common/Meta";
// TS
import { APIRoute } from "..";
// React Icons
import { FaCopy } from "react-icons/fa";

const APIDocs: React.FC = () => {
  return (
    <>
      <Meta title='Trees Analysis - API Docs' imageUrls={docsPageImageUrls} />
      <div className={docsStyles.docsContainer}>
        <section className={docsStyles.docsContainer__firstSection}>
          <SectionIntro
            sectionTitle='API Docs'
            sectionDescription='Create,get,update and delete trees using the our Trees Analysis API(created api through nextjs so it kinda sucks).'
            alignItems='center'
            type='top'
          />
        </section>
        <ul className={docsStyles.docsContainer__secondSection}>
          {docsApiRoutes.map((apiRoute) => {
            return <APIDocsRoute key={apiRoute.id} {...apiRoute} />;
          })}
        </ul>
      </div>
    </>
  );
};

const APIDocsRoute: React.FC<APIRoute> = ({ method, routeUrl, bgColor }) => {
  const onCopyClick = () => {
    navigator.clipboard.writeText(routeUrl);
  };

  return (
    <li>
      <h3 style={{ backgroundColor: `${bgColor}` }}>{method}</h3>
      <div>
        <p>{routeUrl}</p>
        <FaCopy onClick={onCopyClick} />
      </div>
    </li>
  );
};

export default APIDocs;
