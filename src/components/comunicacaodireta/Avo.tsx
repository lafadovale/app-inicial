import Pai from "./Pai";

export default function Avo() {
  return (
    <div
      className={`
      flex gap-5 p-5 rounded-md
      bg-purple-500 text-white border border-white
    `}
    >
      <Pai />
      <Pai />
      <Pai />
    </div>
  );
}
