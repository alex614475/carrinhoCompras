export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  categoria_id:number;
  img:string;
}

export interface Categoria {

  id: number;
  nome: string;


}


export function createProduto(params: Partial<Produto>) {
  return {

  } as Produto;
}
