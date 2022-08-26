import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ProdutosStore, ProdutosState } from './produtos.store';

@Injectable({ providedIn: 'root' })
export class ProdutosService extends NgEntityService<ProdutosState> {

  constructor(protected store: ProdutosStore) {
    super(store);
  }

}
