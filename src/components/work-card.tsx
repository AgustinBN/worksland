type WorkCard = {
  label: string;
  rank?: string;
  from: string | number;
  to?: string | number;
  description?: string;
};

const WorkCard = ({ label, rank, from, to, description }: WorkCard) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-2 h-fit w-full sm:w-1/4 bg-neutral-500/10 border-[1px] border-neutral-200/20 rounded-lg">
      <p className="m-0 text-md text-neutral-300 font-bold">{label}</p>
      <p className="m-0 text-sm text-neutral-300 font-semibold">{rank}</p>
      <p className="m-0 text-sm text-neutral-300 font-semibold">
        {from} - {to ? to : "Present"}
      </p>
      <p className="m-0 text-sm text-center text-neutral-300/80 font-semibold">
        {description}
      </p>
    </div>
  );
};
export default WorkCard;
