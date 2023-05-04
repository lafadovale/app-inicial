import Produto from "@/model/Produto";
import ProdutoItem from "./ProdutoItem";

interface ListaProdutosProps {
  produtos: Produto[];
  comprar: (produto: Produto) => void;
}

export default function ListaProdutos({
  produtos,
  comprar,
}: ListaProdutosProps) {
  return (
    <div className='flex flex-wrap gap-5'>
      {produtos.map((produto) => {
        return (
          <ProdutoItem key={produto.id} produto={produto} comprar={comprar} />
        );
      })}
    </div>
  );
}
