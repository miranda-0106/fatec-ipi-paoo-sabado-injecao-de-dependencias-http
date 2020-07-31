import { MissingTranslationStrategy } from '@angular/core';

import { Main } from './main';
import { Weather } from './Weather';

export class Previsao {
    dt: number;
    main: Main;
    weather: Weather[];
    /*data: string;    
    descricao: string;    
    tempMax: number;    
    tempMin: number;   
    humidity: number;    
    imgURL: string;*/
}
