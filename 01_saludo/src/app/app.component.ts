import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //llamada del index.html
  templateUrl: './app.component.html',//direccion de la plantilla asociada(por defecto)
  styleUrl: './app.component.css'//hoja de estilos asociada(por defecto)
})
export class AppComponent {//export equivale al public en Java
  title:string = "typescript"; //declaracion del tipo con los puntos y luego el tipo
}
