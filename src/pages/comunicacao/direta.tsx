import Avo from "@/components/comunicacaodireta/Avo";

export default function PaginaDireta() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1 className='text-5xl font-black mb-10'>Comunicação Direta</h1>
      <Avo nome='Mariano' sobrenome='Dias' />
      <Avo nome='Giuseppe' sobrenome='Camolli' />
    </div>
  );
}
