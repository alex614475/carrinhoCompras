import { Component, OnInit } from '@angular/core';
import { ProdutosQuery } from './state/produtos.query';
import { ProdutosService } from './state/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {


  constructor(private produtosQuery: ProdutosQuery, private produtoService: ProdutosService ) { }

  ngOnInit(): void {

    this.produtoService.get().subscribe()
    this.produtosQuery.selectAll().subscribe(x => console.log(x))
  }



}
