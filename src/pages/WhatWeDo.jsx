import WhatWeDoHero from "../components/WhatWeDoHero";
import ProgramsSection from "../components/ProgramsSection";
import ValueProposition from "../components/ValueProposition";
import ProjectsOverview from "../components/ProjectsOverview";
import ResearchSection from "../components/ResearchSection";
import ImpactCTA from "../components/ImpactCTA";
import CapacityBuildingImage from "../images/programs/capacity-building.jpg"
import EducationImage from "../images/programs/education.jpg"
import CarbonFinanceImage from "../images/programs/carbon-finance.jpg"
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

const WhatWeDo = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <WhatWeDoHero />

      <ProgramsSection
        title={
          <>
            Our Program and <span>Initiatives</span>
          </>
        }
        subtitle="Discover the programs and projects that empower communities, inspire youth, and drive sustainable change."
      />

      <ValueProposition />

      <ProgramsSection
        programs={[
          {
            title: "Capacity Building",
            image: CapacityBuildingImage,
            description: 
              "Capacity building is at the core of our mission to empower communities. We offer training and support to local leaders, community groups, and institutions, ensuring they are effectively equipped to address social, economic, and environmental challenges.",
          },
          {
            title: "Education",
            image: EducationImage,
            description:
              "Education is a fundamental pillar of Sowing Seeds Alliance. We believe that access to quality education is a human right and a key driver of development.",
          },
          {
            title: "Carbon Finance Projects",
            image: CarbonFinanceImage,
            description:
              "In line with our commitment to environmental sustainability, we engage in carbon finance projects that aim to reduce greenhouse gas emissions and promote sustainable development.",
          },
        ]}
      />

      <ProjectsOverview />

      <ResearchSection />

      <ImpactCTA />

      <Footer />
    </>
  );
};

export default WhatWeDo;