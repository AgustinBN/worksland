import Section from "@/components/section";
import WorkCard from "@/components/work-card";

const worksList = [
  {
    label: "InfamesRP",
    rank: "Junior Developer",
    from: "Jun. 2021",
    to: "Feb. 2022",
    description: "",
  },
];

const Works = () => {
  return (
    <main className="min-h-fit px-4 sm:px-8 lg:px-16">
      <Section title="What have I done this years?">
        <p className="text-center w-full sm:w-2/3 lg:w-1/3">
          Nowadays, I&apos;m not working on anything but I have the intention to
          start new projects in the near future.
        </p>
        {worksList.map(({ label, rank, from, to, description }, index) => (
          <WorkCard
            key={index}
            label={label}
            rank={rank}
            from={from}
            to={to}
            description={description}
          />
        ))}
      </Section>
    </main>
  );
};

export default Works;
