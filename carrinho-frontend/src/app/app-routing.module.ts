import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: LayoutComponent },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then(
        (m) => m.ProdutosModule
      ),
  },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
