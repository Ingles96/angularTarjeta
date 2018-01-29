import { Component } from '@angular/core';
@Component({
  templateUrl: './app.component.html',
  selector: 'component' //aqui es donde se dirije a la ruta,etiqueta para mostrarse
})

//definimos todas las variables dep app.component.html de nuestro formulario(datos) y su tipo.
export class AppComponent {
 title = 'app';
 nombre:string;
 apellidos:string;
 correo:string;
 telefono:number;
 empleo:string;
 empresa:string;

//ver color de la tarjeta
color(event){
  this.cuenta = event.target.value;

  //mostrar las opciones de autonomo
}
autonomo(event){
  this.autonomo = event.target.value;
}
// Esto lo utilizaremos para saber donde se esta escribiendo en el formulario.
cajas(event){
  var id = event.target.id;
  if (id == 'nombre'){
  this.nombre = event.target.value;
  }else if(id == 'apellidos'){
  this.apellidos = event.target.value;
}else if(id == 'correo'){
    this.correo = event.target.value;
  }else if(id == 'telefono'){
  this.telefono = event.target.value;
}else if(id == 'empleo'){
this.empleo = event.target.value;
}else if(id == 'empresa'){
this.empresa = event.target.value;
}
}


}
