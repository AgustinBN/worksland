type SkillCardProps = {
  Icon?: React.ComponentType;
  label: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-2 bg-neutral-500/10 border-[1px] border-neutral-200/20 rounded-lg">
      {Icon && <Icon />}
      <p className="m-0 text-[0.6rem] text-neutral-500 font-bold">{label}</p>
    </div>
  );
};

export default SkillCard;
