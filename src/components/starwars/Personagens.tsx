import { IconCheck } from "@tabler/icons-react";

interface PersonagensProps {
  personagens: any[];
  selecionar: (personagem: any) => void;
}

export default function Personagens({
  personagens,
  selecionar,
}: PersonagensProps) {
  return (
    <table className='w-3/5 text-xl opacity-70 rounded-lg overflow-hidden'>
      <thead>
        <tr className='bg-zinc-900'>
          <th className='p-2 font-black'>Nome</th>
          <th className='p-2 font-black'>Altura</th>
          <th className='p-2 font-black'>Peso</th>
          <th className='p-2 font-black'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {personagens.map((p: any, index: number) => (
          <tr
            key={p.name}
            className={`
            text-center
            ${index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
          `}
          >
            <td className='p-2'>{p.name}</td>
            <td className='p-2'>{p.height}</td>
            <td className='p-2'>{p.mass}</td>
            <td className='p-2'>
              <button className='botao'>
                <IconCheck size={20} onClick={() => selecionar(p)} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
