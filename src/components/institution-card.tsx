type InstitutionCardProps = {
  label: string;
  title: string;
  from: number;
  to?: number;
  description?: string;
};

const InstitutionCard: React.FC<InstitutionCardProps> = ({ label, title, from, to, description }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-2 h-fit w-full md:w-1/2 bg-neutral-500/10 border-[1px] border-neutral-200/20 rounded-lg">
      <p className="text-md text-neutral-300 font-bold">{label}</p>
      <p className="text-sm text-neutral-300 font-semibold">{title}</p>
      <p className="text-sm text-neutral-300 font-semibold">
        {from} - {to ? to : "Present"}
      </p>
      <p className="text-sm text-center text-neutral-300/80 font-normal">
        {description}
      </p>
    </div>
  );
};

export default InstitutionCard;
