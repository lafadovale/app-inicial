import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export default function CarrinhoItem({ produto, quantidade }: ItemCarrinho) {
  return (
    <div
      className={`
      flex items-center gap-2 rounded-full bg-blue-500
    `}
    >
      <span
        className='flex justify-center items-center
         w-7 h-7 rounded-full p-2 bg-blue-700'
      >
        {quantidade}
      </span>
      <span>{produto.nome}</span>
      <span className='pr-5'>{Moeda.formatar(produto.preco * quantidade)}</span>
    </div>
  );
}
