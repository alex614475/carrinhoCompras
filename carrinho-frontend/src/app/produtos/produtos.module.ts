import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'novo', component: CriarEditarComponent },
  { path: ':id/editar', component: CriarEditarComponent },
];




@NgModule({
  declarations: [ProdutosComponent, CriarEditarComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ProdutosModule {}
