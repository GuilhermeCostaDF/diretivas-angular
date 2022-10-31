import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: any[] = [
    {
      nome: 'Amaciante',
      valor: 5,
    },
    {
      nome: 'Detergente',
      valor: 8,
    },
    {
      nome: 'Sabão em Pó',
      valor: 3,
    },
    {
      nome: 'Sabão de Côco',
      valor: 9,
    },
  ];

  produto: any;
  nomeProduto: string = '';
  precoProduto: number = 0;

  public adicionarProduto(): void{

    this.produto = {
      nome: this.nomeProduto,
      valor: this.precoProduto
    }

    this.produtos.push(this.produto)
  }

  constructor() {}

  ngOnInit(): void {}
}
