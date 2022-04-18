//sirve para darle tipado a el array de objetos creado em app.component.ts
export interface products {  //La palabra export sirve para que podamos llamarlo desde app.component.ts sino no va a ser visible
  name: string;
  price: number;
  imagenes: string;
  category?: string; // con el signo de pregunta le estoy diciendo que algunos productos pueden tener este atributo
}
