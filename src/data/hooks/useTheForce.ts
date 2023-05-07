import { useCallback, useEffect, useState } from "react";
import useProcessando from "./useProcessando";

export default function useTheForce() {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [personagens, setPersonagens] = useState<any>([]);

  const obterPersonagens = useCallback(
    async function () {
      try {
        iniciarProcessamento();
        const resp = await fetch("https://swapi.dev/api/people/");
        const data = await resp.json();
        setPersonagens(data.results);
      } finally {
        finalizarProcessamento();
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  );

  useEffect(() => {
    obterPersonagens();
  }, [obterPersonagens]);

  return {
    personagens,
    processando,
  };
}
