// Components
import Meta from "@/components/common/Meta";
import SectionIntro from "@/components/common/SectionIntro";
// Data
import {
  aboutPageImageUrls,
  aboutTechnologiesBackend,
  aboutTechnologiesFrontend,
  aboutTechnologiesOther,
} from "@/data";
// SCSS
import aboutStyles from "../scss/About.module.scss";
// Next
import Image from "next/image";
// TS
import { AboutTechnologiesUsedProps } from "..";
import { useEffect, useState } from "react";

const About: React.FC = () => {
  const [showType, setShowType] = useState("side");

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowType("top");
    }
  }, []);
  return (
    <>
      <Meta title='Trees Analysis - About' imageUrls={aboutPageImageUrls} />
      <div className={aboutStyles.aboutContainer}>
        <section className={aboutStyles.aboutContainer__firstSection}>
          <SectionIntro
            sectionTitle='About'
            sectionDescription='My first project working with Next.js.It was extremely easy to learn and it makes life easier too.'
            alignItems='center'
            type='top'
          />
        </section>
        <section className={aboutStyles.aboutContainer__secondSection}>
          <SectionIntro
            sectionTitle='Technologies Used'
            sectionDescription='The technologies used in the making of this side project(Next.JS, React.JS, Sass, Typescript, ChartJS,Express.JS, Node.JS, PostgreSQL, Prisma, Redis,...)'
            alignItems='center'
            type='top'
          />
        </section>
        <section className={aboutStyles.aboutContainer__thirdSection}>
          <SectionIntro
            sectionTitle='Frontend Technologies'
            sectionDescription='Technologies used on the frontend with their respective docs.'
            alignItems='center'
            type='side'
          />
          <AboutTechnologiesUsed techUsed={aboutTechnologiesFrontend} />
        </section>
        <section className={aboutStyles.aboutContainer__fourthSection}>
          {showType === "top" ? (
            <>
              <SectionIntro
                sectionTitle='Backend Technologies'
                sectionDescription='Technologies used on the backend with their respective docs.'
                alignItems='center'
                type='side'
              />
              <AboutTechnologiesUsed techUsed={aboutTechnologiesBackend} />
            </>
          ) : (
            <>
              <AboutTechnologiesUsed techUsed={aboutTechnologiesBackend} />
              <SectionIntro
                sectionTitle='Backend Technologies'
                sectionDescription='Technologies used on the backend with their respective docs.'
                alignItems='center'
                type='side'
              />
            </>
          )}
        </section>
        <section className={aboutStyles.aboutContainer__fifthSection}>
          <SectionIntro
            sectionTitle='Other Technologies'
            sectionDescription='Other technologies like PaaS,linting with Eslint,etc...).'
            alignItems='center'
            type='side'
          />
          <AboutTechnologiesUsed techUsed={aboutTechnologiesOther} />
        </section>
      </div>
    </>
  );
};

const AboutTechnologiesUsed: React.FC<AboutTechnologiesUsedProps> = ({
  techUsed,
}) => {
  return (
    <ul className={aboutStyles.aboutContainer__techUsed}>
      {techUsed.map((technology) => {
        return (
          <li key={technology.id}>
            <a href={technology.techUrl}>
              <Image
                alt={technology.label}
                src={technology.logoUrl}
                width={50}
                height={50}
              />
              <p>{technology.label}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default About;
