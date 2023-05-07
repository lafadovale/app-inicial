import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useTheForce from "@/data/hooks/useTheForce";

export default function PaginaStarWars() {
  const { personagens, processando, selecionarPersonagem, filmes, voltar } =
    useTheForce();

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen relative'>
      <Background />
      {processando ? (
        <div>Processando...</div>
      ) : filmes.length > 0 ? (
        <Filmes filmes={filmes} voltar={voltar} />
      ) : personagens.length > 0 ? (
        <Personagens
          personagens={personagens}
          selecionar={selecionarPersonagem}
        />
      ) : (
        <div>Dados não encontrados.</div>
      )}
    </div>
  );
}
