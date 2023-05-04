interface TabelaSerieAProps {
  times: string[];
}

export default function TabelaSerieA({ times }: TabelaSerieAProps) {
  // transformar string -> <li>
  // const itens: any[] = [];
  // for (let i = 0; i < times.length; i++) {
  //   itens.push(
  //     <li key={times[i]} className='text-xl list-decimal'>
  //       {times[i]}
  //     </li>
  //   );
  // }

  // transformar string -> <li>
  const itens2 = times.map((time, i) => {
    return (
      <li
        key={time}
        className={`
          text-2xl list-decimal
          ${i % 2 === 0 ? "text-blue-500" : "text-yellow-500"}
        `}
      >
        {time}
      </li>
    );
  });
  return (
    <div>
      <ol>{itens2}</ol>
    </div>
  );
}
