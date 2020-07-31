import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {
  static obterPrevisoes() {
    throw new Error("Method not implemented.");
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public obterPrevisoes(cidade): Observable <Previsao[]> {
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast',
    {params: {q: cidade, appid: '600c63cc8d1080b996d777f746edd5a2', units: 'metric', lang: 'pt_br', cnt: '9'}});
  }

  /*previsoes: Previsao [] = [
    {      
      data: '20/02/2020 15:00',      
      descricao: 'Sol',      
      tempMax: 32,      
      tempMin: 27,      
      humidity: 0.87,      
      imgURL: '../assets/01d.png'    
    },    
    {      
      data: '20/02/2020 18:00',      
      descricao: 'Sol com nuvens',      
      tempMax: 28,      
      tempMin: 22,      
      humidity: 0.85,      
      imgURL: '../assets/02d.png'    
    },    
    {      
      data: '20/02/2020 21:00',      
      descricao: 'Noite limpa',      
      tempMax: 24,      
      tempMin: 18,      
      humidity: 0.82,      
      imgURL: '../assets/01n.png'    
    }
  ];*/

}
