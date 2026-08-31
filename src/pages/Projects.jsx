import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ProjectTimeline from "../components/ProjectTimeline";
import ProjectShowcase from "../components/ProjectShowcase";
import ProjectsHero from "../images/projects-hero.jpg"
import Mentorship1 from "../images/projects/mentorship-1.jpg"
import Mentorship2 from "../images/projects/mentorship-2.jpg"
import Mentorship3 from "../images/projects/mentorship-3.jpg"
import Research1 from "../images/projects/research-1.jpg"
import Research2 from "../images/projects/research-2.jpg"
import Research3 from "../images/projects/research-3.jpg"
import Shs2024_1 from "../images/projects/shs-2024-1.jpg"
import Shs2024_2 from "../images/projects/shs-2024-2.jpg"
import Shs2024_3 from "../images/projects/shs-2024-3.png"
import Innovation1 from "../images/projects/innovation-1.jpg"
import Innovation2 from "../images/projects/innovation-2.png"


const upcomingProjects = [
  {
    date: "August 2025",
    title: "SoSA SHS Outreach",
    side: "right",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    date: "November 2025",
    title: "SoSA Sprinkle of Hope Outreach",
    side: "left",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    date: "December 2025",
    title: "SoSA Innovation Accelerator II",
    side: "right",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
];

const ongoingProjects = [
  {
    title: "SoSA Mentorship Network (M-NET) Program",
    year: "2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      Mentorship1,
      Mentorship2,
      Mentorship3
    ],
    layout: "text-left",
  },
  {
    title: "SoSA Research Publications",
    year: "2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      Research1,
      Research2,
      Research3
    ],
    layout: "text-right",
  },
];

const pastProjects = [
  {
    title: "SoSA SHS Outreach 2024 – Ejuram Akan SHS",
    year: "2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      Shs2024_1,
      Shs2024_2,
      Shs2024_3
    ],
    layout: "text-left",
  },
  {
    title: "SoSA Innovation Accelerator I (Design Thinking)",
    year: "2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      Innovation1,
      Innovation2,

    ],
    layout: "text-right",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        title="Our Projects"
        image={ProjectsHero}
        description="We are seeking passionate individuals and organizations to join us in our mission to create lasting positive change within communities."
      />

      {/* Upcoming */}
      <ProjectTimeline projects={upcomingProjects} />

      {/* Ongoing */}
      <ProjectShowcase
        title={
          <>
            Ongoing <span>Projects</span>
          </>
        }
        projects={ongoingProjects}
        background="#f8f8f8"
      />

      {/* Past */}
      <ProjectShowcase
        title={
          <>
            <span>Past</span> Projects
          </>
        }
        projects={pastProjects}
        background="#ffffff"
        bordered
      />

      <Footer />
    </div>
  );
};

export default Projects;