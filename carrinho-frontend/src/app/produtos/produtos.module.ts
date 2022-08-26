import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';

@NgModule({
  declarations: [ProdutosComponent, CriarEditarComponent],
  imports: [CommonModule],
})
export class ProdutosModule {}
