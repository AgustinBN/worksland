import InstitutionCard from "@/components/institution-card";
import Section from "@/components/section";

const institutions = [
  {
    label: "Colegio San Ramón",
    title: "Bachelor in Natural Science",
    from: 2019,
    to: 2024,
    description:
      "This school prepared me for my future by offering an advanced educational program in physics, mathematics, science, and English. Beyond academics, I formed lasting friendships with classmates who continue to be a part of my life today.",
  },

  {
    label: "Universidad Tecnologica Nacional (UTN)",
    title: "System Engineering",
    from: 2025,
    // to: 2024,
    description:
      "I'll be studying a degree in System Engineering at a public university that trains many engineers in Argentina.",
  },
];

const Education = () => {
  return (
    <main className="min-h-fit px-4 sm:px-8 lg:px-16">
      <Section title="Let's talk about my education.">
        <p className="text-center w-full sm:w-2/3 lg:w-1/3">
          A developer based in Buenos Aires, Argentina, with one dream: to
          become a Software Engineer. Currently, I&apos;m learning and focusing
          on React and React Native.
        </p>
        <div className="flex flex-col gap-5 w-full md:w-1/2 items-center">
          {institutions.map(
            ({ label, title, from, to, description }, index) => (
              <InstitutionCard
                key={index}
                label={label}
                title={title}
                from={from}
                to={to}
                description={description}
              />
            )
          )}
        </div>
      </Section>
    </main>
  );
};

export default Education;
