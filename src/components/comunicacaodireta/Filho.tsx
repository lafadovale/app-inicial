interface FilhoProps {
  nome: string;
  sobrenome: string;
}

export default function Filho({ nome, sobrenome }: FilhoProps) {
  return (
    <div
      className={`
      flex justify-center items-center
      bg-green-500 rounded-md p-5 border border-white
    `}
    >
      <div className='flex justify-center gap-2 text-xl'>
        <span className='font-black'>Filho</span>
        <span>{nome}</span>
        <span>{sobrenome}</span>
      </div>
    </div>
  );
}
