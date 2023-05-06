interface PersonagensProps {
  personagens: any[];
}

export default function Personagens({ personagens }: PersonagensProps) {
  function renderizarPersonagens() {
    return (
      <div>
        <ul>
          {personagens.map((p: any) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{renderizarPersonagens()}</div>;
}
