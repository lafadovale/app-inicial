import If from "./If";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
// import IfElse from "./IfElse";

interface PerguntaProps {
  index: number;
  pergunta: string;
  resposta: string;
  aberta: boolean;
  toggle: (index: number) => void;
}

export default function Pergunta({
  index,
  pergunta,
  resposta,
  aberta,
  toggle,
}: PerguntaProps) {
  return (
    <div
      className={`
      border border-zinc-600 rounded-md overflow-hidden
    `}
    >
      <div
        className='bg-zinc-800 p-5 cursor-pointer select-none flex justify-between'
        onClick={() => toggle(index)}
      >
        <span>{pergunta}</span>
        {aberta ? <IconChevronUp /> : <IconChevronDown />}
        {/* <IfElse teste={aberta}>
          <IconChevronUp />
          <IconChevronDown />
        </IfElse> */}
      </div>
      <If teste={aberta}>
        <div className='p-5'>{resposta}</div>
      </If>
    </div>
  );
}
