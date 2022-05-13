import { IoTimerOutline } from "react-icons/io5";
import { Input } from "./Input";

export function Idade() {
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <IoTimerOutline size={24} />
        </span>
        <h2 className="text-2xl mr-3">Idade</h2>
      </header>
      <div className="flex flex-col h-full items-center justify-center mb-2">
        <Input placeholder={"21"} />
        <span>anos</span>
      </div>
    </>
  );
}
