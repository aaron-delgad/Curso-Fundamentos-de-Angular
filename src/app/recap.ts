const username: String ='nicobytes';

const sum = (a: number, b: number) =>{
  return a + b;
}
sum(2,3);
//Los objetos se pueden declarar de esta forma o tambien
class Persona {
  age: number;
  lastname: string;

  constructor (age: number, lastname: string){
    this.age=age;
    this.lastname=lastname;
  }
}
const nico =new Persona(15,'Delgado');

//los objetos se pueden declarar de otra forma
class Persona1 {
  constructor (public age: number, public lastname: string){ // aqui estamos haciendo la declaración y asignacion de forma abrevida
}}
const nico1 =new Persona1(15,'Delgado');
