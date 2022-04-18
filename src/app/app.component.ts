
// import { Console } from 'console';
import { Component } from '@angular/core';
import { products } from './product.model';

@Component({
  selector: 'aaron-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg:number = 10;
  name = 'Delgado';
  age = 24;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  amigos = 'Jose';
  btnDisabled =true;

// Creamos un objeto para el formulario
  register = {
    name: '',
    email: '',
    password: ''
  }
//creacion de funciones para el formulario
onRegister() {
  console.log(this.register);
}



  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  person = {
    name: 'Delgado',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

// creacion de array
  names: string[] = ['Nico', 'Haru', 'Fio', 'Bianca'];
  newname = '';

  products: products[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      imagenes: './assets/imagenes/juguete.jpeg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      imagenes: './assets/imagenes/bicicletas.jpg'
    },
    {
      name: 'Colección de albunes',
      price: 34,
      imagenes: './assets/imagenes/albun.jpg'
    },
    {
      name: 'Mis Libros',
      price: 23,
      imagenes: './assets/imagenes/libros.jpg'
    },
    {
      name: 'Casa de perros',
      price: 34,
      imagenes: './assets/imagenes/casa_perro.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      imagenes: './assets/imagenes/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;

  }
  increaseage(){
    this.person.age += 1;
  }

  onscroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changename(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  AddName(){
    this.names.push(this.newname);
    this.newname = '';
  }

  deletename(index: number){
    this.names.splice(index, 1);
  }


}
