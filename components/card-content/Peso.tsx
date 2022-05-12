import { FaWeight } from "react-icons/fa";

export function Peso() {
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <FaWeight size={24} />
        </span>
        <h2 className="text-2xl mr-4">Peso</h2>
      </header>
      <div className="flex gap-2">peso</div>
    </>
  );
}
