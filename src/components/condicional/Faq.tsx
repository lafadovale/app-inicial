import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(index: number) {
    if (index === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(index);
    }
  }

  return (
    <div className='flex flex-col gap-2 w-[90%] md:w-3/4'>
      <Pergunta
        index={0}
        aberta={ativo === 0}
        pergunta='Qual é o seu nome?'
        resposta='Robin de Loxley'
        toggle={alternarVisibilidade}
      />
      <Pergunta
        index={1}
        aberta={ativo === 1}
        pergunta='Qual é a sua missão?'
        resposta='Encontrar o Cálice Sagrado'
        toggle={alternarVisibilidade}
      />
      <Pergunta
        index={2}
        aberta={ativo === 2}
        pergunta='Qual é a sua cor favorita?'
        resposta='Azul! Não! Amareeeeloooo!!'
        toggle={alternarVisibilidade}
      />
    </div>
  );
}
