import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useTheForce from "@/data/hooks/useTheForce";

export default function PaginaStarWars() {
  const { personagens, processando } = useTheForce();
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen relative'>
      <Background />
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens personagens={personagens} />
      ) : (
        <div>Nenhum personagem encontrado.</div>
      )}
    </div>
  );
}
