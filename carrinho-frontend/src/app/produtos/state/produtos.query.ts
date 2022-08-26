import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProdutosStore, ProdutosState } from './produtos.store';

@Injectable({ providedIn: 'root' })
export class ProdutosQuery extends QueryEntity<ProdutosState> {

  constructor(protected override store: ProdutosStore) {
    super(store);
  }

}
