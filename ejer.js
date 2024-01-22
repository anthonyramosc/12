'use strict'
// Podemos comprender fácilmente el concepto de iterables creando uno propio.
// Por ejemplo, tenemos un objeto que no es una matriz, pero parece adecuado for..of.
// Como un rangeobjeto que representa un intervalo de números:

let range = {
  from: 1,
  to: 5
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

// Mapa
// Map es una colección de elementos de datos clave, como un archivo Object. 
// Pero la principal diferencia es que Mappermite claves de cualquier tipo.
let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');     
map.set(true, 'bool1'); 


alert( map.get(1)   ); 
alert( map.get('1') ); 

alert( map.size ); 

// Mapa débil y conjunto débil
// Como sabemos por el capítulo Recolección de basura , el motor JavaScript mantiene un valor en la memoria mientras es "accesible" 
// y potencialmente puede usarse.

let john = { name: "John" };


john = null;

// Objeto.claves, valores, entradas
// Alejémonos de las estructuras de datos individuales y hablemos de las iteraciones sobre ellas.
// En el capítulo anterior vimos métodos map.keys(), map.values(), map.entries().
// Estos métodos son genéricos, existe un acuerdo común para utilizarlos para estructuras de datos. 
// Si alguna vez creamos una estructura de datos propia, deberíamos implementarla también.

let user = {
    name: "John",
    age: 30
};

// Tarea de desestructuración
// Los objetos nos permiten crear una entidad única que almacena elementos de datos por clave.
// Las matrices nos permiten recopilar elementos de datos en una lista ordenada.
// Aunque, cuando los pasamos a una función, es posible que no sea necesario que sea un objeto/matriz en su conjunto. 
//Puede que necesite piezas individuales.
let arr = ["John", "Smith"]

let [firstName, surname] = arr;

alert(firstName); 
alert(surname); 

// Fecha y hora
// Conozcamos un nuevo objeto integrado: Fecha . Almacena la fecha, la hora y proporciona métodos para la gestión de fecha/hora.
// Por ejemplo, podemos usarlo para almacenar tiempos de creación/modificación, 
// para medir el tiempo o simplemente para imprimir la fecha actual.
let now = new Date();
alert( now );

// Métodos JSON, a JSON
// Digamos que tenemos un objeto complejo y nos gustaría convertirlo en una cadena, 
// enviarlo a través de una red o simplemente generarlo para fines de registro.
// Naturalmente, dicha cadena debería incluir todas las propiedades importantes.
// Podríamos implementar la conversión de esta manera:
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

  alert(typeof json); // we've got a string!

alert(json);