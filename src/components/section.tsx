type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 mt-5 justify-center items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default Section;
