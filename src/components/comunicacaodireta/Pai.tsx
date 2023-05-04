import Filho from "./Filho";

export default function Pai() {
  return (
    <div
      className={`
      flex gap-5
      bg-blue-500 text-white border border-white
      rounded-md p-5
    `}
    >
      <Filho />
      <Filho />
    </div>
  );
}
