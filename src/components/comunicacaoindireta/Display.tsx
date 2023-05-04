interface DisplayProps {
  valor: number;
}

export default function Display({ valor }: DisplayProps) {
  return (
    <div
      className={`
        flex justify-center items-center flex-1
        bg-zinc-800 text-5xl font-black rounded-md p-5
    `}
    >
      {valor}
    </div>
  );
}
