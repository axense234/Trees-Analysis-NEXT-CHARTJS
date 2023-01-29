// SCSS
import sectionIntroStyles from "../../scss/SectionIntro.module.scss";
// Intersection Observer
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SectionIntroProps {
  type?: "top" | "side";
  sectionTitle: string;
  sectionDescription: string;
  alignItems?: "flex-start" | "center";
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  type = "side",
  sectionTitle,
  sectionDescription,
  alignItems,
}) => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      entry?.target.classList.add("show");
    } else {
      entry?.target.classList.remove("show");
    }
  }, [entry?.target.classList, inView]);

  return (
    <div
      className={`
        ${sectionIntroStyles.sectionIntro} 
        ${sectionIntroStyles[type]}
        hidden
      `}
      style={{ alignItems: `${alignItems}` }}
      ref={ref}
    >
      <h1>{sectionTitle}</h1>
      <p>{sectionDescription}</p>
    </div>
  );
};

export default SectionIntro;
