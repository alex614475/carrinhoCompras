import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Produto } from './produto.model';

export interface ProdutosState extends EntityState<Produto> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'produtos' })
export class ProdutosStore extends EntityStore<ProdutosState> {

  constructor() {
    super();
  }

}
