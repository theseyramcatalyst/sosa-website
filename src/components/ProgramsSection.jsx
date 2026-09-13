import CodingClubImage from "../images/programs/coding-clubs.jpg"
import AdvocacyImage from "../images/programs/advocacy.jpg"
import EntrepreneurshipImage from "../images/programs/entrepreneurship.jpg"

const defaultPrograms = [
  {
    title: "Advocacy Programs",
    image: AdvocacyImage,
    description:
      "Our advocacy programs are designed to educate and mobilize communities on critical issues such as environmental sustainability, equity, and human rights. We work closely with stakeholders to create awareness and support policy changes that will ultimately strengthen communities.",
  },
  {
    title: "Coding Clubs",
    image: CodingClubImage,
    description:
      "In a world increasingly driven by technology, our coding clubs aim to bridge the digital divide by providing young people, especially those from marginalized communities, with the skills needed to thrive in the digital economy.",
  },
  {
    title: "Entrepreneurship Programs",
    image: EntrepreneurshipImage,
    description:
      "Our entrepreneurship programs are geared towards nurturing a culture of innovation and self-reliance among youth and women in communities. We provide training, mentorship, and resources to aspiring entrepreneurs.",
  },
];

const ProgramsSection = ({
  programs = defaultPrograms,
  title,
  subtitle,
}) => {
  return (
    <section
      id="programs"
      className="bg-white px-6 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[900px]">

        <div className="mb-8 text-center">
          {title ? (
            <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
              {title}
            </h2>
          ) : (
            <h2 className="text-2xl font-bold">
              Our Programs
            </h2>
          )}

          <p className="mx-auto mt-2 max-w-[520px] text-sm leading-[1.5] text-gray-600">
            {subtitle ||
              "Discover programs and initiatives designed to empower communities."}
          </p>

          <div className="mx-auto mt-2 h-[1px] w-14 bg-[#d40000]" />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({
  title,
  image,
  description,
}) => {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="h-[170px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-3 text-xs leading-[1.55] text-gray-700">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProgramsSection;