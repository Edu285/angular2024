
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  //la inyeccion del service se hace a traves del constructor
  constructor(private buscadorService:BuscadorService){

  }

  tematica:string;
  //para guardar los resultados de la busqueda
  resultados:Resultado[]=[];

  buscar():void{
      this.resultados=this.buscadorService.buscar(this.tematica);
  }
}
