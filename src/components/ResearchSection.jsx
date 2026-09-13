import React from "react";
import { Download } from "lucide-react";
import ResearchPublicationImage from "../images/programs/research-publication.jpg";

const publications = [
  {
    title: "Deforestation – A SoSA Research",
    file: "/documents/deforestation-research.pdf",
  },
  {
    title: "Food security – A SoSA Research",
    file: "/documents/food-security-research.pdf",
  },
];

const ResearchSection = () => {
  return (
    <section className="bg-white px-6 pb-14 pt-4">
      <div className="mx-auto max-w-[900px]">

        <h2 className="mb-5 text-sm font-bold">
          Research/Publication
        </h2>

        <div className="grid overflow-hidden rounded border border-gray-200 md:grid-cols-2">

          <div className="h-[230px]">
            <img
              src={ResearchPublicationImage}
              alt="Research publication"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between p-5">
            <p className="text-xs leading-[1.6] text-gray-700">
              Research and publication are essential to our work, as they
              provide the evidence base for our advocacy, programming, and
              policy recommendations. We conduct research on a wide range of
              topics, including social justice, environmental sustainability,
              and education.
            </p>

            <div className="mt-5 space-y-2">
              {publications.map((publication) => (
                <div
                  key={publication.title}
                  className="flex items-center justify-between gap-4"
                >
                  <a
                    href={publication.file}
                    className="text-xs underline"
                  >
                    {publication.title}
                  </a>

                  <a
                    href={publication.file}
                    download
                    className="flex min-w-[75px] items-center justify-center gap-1 bg-[#d40000] px-3 py-2 text-xs text-white"
                  >
                    <Download size={9} />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;