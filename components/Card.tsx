interface Props {
  title: string;
  Content: React.ElementType;
}

export function Card({ title, Content }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-6 rounded-lg py-8 px-8 border-[1px] border-slate-400/60 min-w-[40%] 
    min-h-[150px] text-xl shadow-lg shadow-slate-400/30"
    >
      <header>
        <h2 className="text-2xl">{title}</h2>
      </header>
      <Content />
    </div>
  );
}
