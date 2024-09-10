import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  //inyeccion del http
  constructor(private http:HttpClient){

  }

  buscar(tematica:string):Observable<Resultado[]>{
      let url:string="http://localhost:9000/buscar/"+tematica;//direccion de llamada
      return this.http.get<Resultado[]>(url);//get es lo que queremos que nos devulve y (url) lo que le pasamos, con el Observable es un objeto que hace la suscripcion para la devolucion
  }

}
