import React from "react";
import EuniceNimo from "../images/team/eunice-nimo.jpg"
import SeyramAmpofo from "../images/team/seyram-ampofo.jpg"
import JohnTennyson from "../images/team/john-tennyson.jpg"

const teamMembers = [
  {
    name: "John Tennyson Afele, PhD",
    image: JohnTennyson,
    position: "right",
    email: "John@sowingseedsalliance.org",
    linkedin: "John Tennyson Afele",
    bio: `John is part of Sowing Seeds Alliance because he believes in empowering individuals and communities to create a better future. By addressing critical issues like climate change, human rights, and digital literacy, we can drive positive change. John is passionate about educating and raising awareness on these topics, and he wants to contribute his skills and experience to make a meaningful impact. Through capacity building and education, he aims to inspire and equip others to become agents of change, fostering a more just, sustainable, and technologically inclusive world. Together, we can create a brighter future for all.`,
  },
  {
    name: "Eunice Nimo (Ms)",
    image: EuniceNimo,
    position: "left",
    email: "info@sowingseedsalliance.org",
    linkedin: "Eunice Nimo (Ms)",
    bio: `Eunice is a self-motivated individual with a deep-rooted passion for environmental sustainability. Committed to fostering harmony between humans and nature, she has dedicated her career to advocating for sustainable practices. Her inquisitive nature has led her to excel in research, which she seamlessly integrates into community development work. As a founding member of SoSA, Eunice strives to create and positive impact on the world through research, empathy, and unwavering commitment.`,
  },
  {
    name: "Ing. Seyram Ampofo",
    image: SeyramAmpofo,
    position: "right",
    email: "info@sowingseedsalliance.org",
    linkedin: "Seyram Ampofo",
    bio: `Seyram is a technology enthusiast with a passion for innovation and implementing solutions for everyday needs. He is passionate about using technology as a tool for social good, and he believes that Sowing Seeds Alliance is the right conduit to contribute meaningfully to achieving this mission of empowering youth, children, and marginalized groups through ICT.

Ultimately, Seyram believes that "Every shared idea is a seed sown, waiting to bloom into innovation", and SoSA is raising an army of change-makers and leaders in sustainability.`,
  },
];

const SocialIcon = ({ type }) => {
  if (type === "email") {
    return (
      <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
      </svg>
    );
  }

  return (
    <span className="flex h-3 w-3 items-center justify-center bg-black text-[7px] font-bold text-white">
      in
    </span>
  );
};

const TeamInfo = ({ member }) => {
  return (
    <div className="flex h-full flex-col rounded-[6px] border border-gray-300 bg-white p-5 sm:p-6">
      <h3 className="relative inline-block self-center text-lg font-semibold tracking-wide sm:text-xl">
        {member.name}

        <span className="absolute -bottom-2 left-1/2 h-[1px] w-32 -translate-x-1/2 bg-[#d40000]" />
      </h3>

      <p className="mt-9 whitespace-pre-line text-xs leading-[1.7] text-[#111]">
        {member.bio}
      </p>

      <div className="mt-auto space-y-3 pt-5 text-xs">
        <div className="flex items-center gap-2">
          <SocialIcon type="email" />
          <span>{member.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <SocialIcon type="linkedin" />
          <span>{member.linkedin}</span>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1000px]">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold tracking-wide text-[#4a4a4a] sm:text-4xl">
          Meet Our Team
        </h2>

        {/* Team */}
        <div className="mt-8 space-y-7">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
                member.position === "left" ? "" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-[6px] ${
                  member.position === "left"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[20rem] w-full object-cover"
                />
              </div>

              {/* Info */}
              <div
                className={
                  member.position === "left"
                    ? "md:order-1"
                    : "md:order-2"
                }
              >
                <TeamInfo member={member} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;