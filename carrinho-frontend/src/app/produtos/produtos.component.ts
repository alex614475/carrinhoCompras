import { Component, OnInit } from '@angular/core';
import { ProdutosQuery } from './state/produtos.query';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {


  constructor(private produtosQuery: ProdutosQuery ) { }

  ngOnInit(): void {

    this.produtosQuery.selectAll().subscribe(x => console.log(x))
  }



}
