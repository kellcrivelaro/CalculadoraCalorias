interface Props {
  Content: React.ElementType;
}

export function Card({ Content }: Props) {
  return (
    <div
      className="flex flex-col items-center rounded-lg border-[1px] border-slate-400/60 min-w-[20%] max-w-[25%] py-4 px-6 gap-4
    min-h-[150px] text-xl"
    >
      <Content />
    </div>
  );
}
