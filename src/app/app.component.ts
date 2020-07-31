import { Component } from '@angular/core';
import { PrevisoesService } from './previsoes.service';
import { Previsao } from './model/previsao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cidade: string;

  constructor(
    private previsoesService: PrevisoesService
  ) { }

  private previsoes: Previsao[];

  consultar (cidadeInput) : void {
    console.log(cidadeInput.value);
    this.cidade = cidadeInput.value;

    this.previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {
    this.previsoes = previsoes['list'];
    console.log(this.previsoes);
    });
  }

  //public previsoes: Previsao[];
  //private previsoes: Previsao[];

  /*constructor (
    previsoesService: PrevisoesService
  ) {
    previsoesService.obterPrevisoes().subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }*/

}
