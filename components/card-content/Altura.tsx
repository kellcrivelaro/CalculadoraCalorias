import { GiBodyHeight } from "react-icons/gi";
import { Input } from "./Input";

export function Altura() {
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <GiBodyHeight size={24} />
        </span>
        <h2 className="text-2xl mr-1">Altura</h2>
      </header>
      <div className="flex flex-col h-full items-center justify-center mb-2">
        <Input placeholder={"1,81"} />
        <span>metros</span>
      </div>
    </>
  );
}
