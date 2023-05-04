interface BotoesProps {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}

export default function Botoes({ inc, dec }: BotoesProps) {
  return (
    <div className='flex justify-between pt-2 gap-2'>
      <button className='botao flex-1' onClick={() => dec(10)}>
        -10
      </button>
      <button className='botao flex-1' onClick={() => inc(15)}>
        +15
      </button>
    </div>
  );
}
