import { GiBodyHeight } from "react-icons/gi";

export function Altura() {
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <GiBodyHeight size={24} />
        </span>
        <h2 className="text-2xl mr-4">Altura</h2>
      </header>
      <div className="flex gap-2">Altura</div>
    </>
  );
}
