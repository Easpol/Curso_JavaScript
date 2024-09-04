// arreglos o arrays en js

var autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);


// array vacio

var z = '';

console.log(z);
console.log(typeof z);


// exttraer un elemento de un array

console.log(autos[1]);


// Concatenar 

var nombre = 'Martina'; 
var apellido1 = 'Moreno';
var apellido2 = 'Huertas';

var nombreCompleto = nombre + ' ' + apellido1 + ' ' + apellido2;
console.log(nombreCompleto);


// como lo hace js "concatena" u "opera" segun el orden o los ()

var x = nombre + 1 + 2;
console.log(x);

var x = nombre + (1 + 2);
console.log(x);

var x = 1 + 2 + nombre;
console.log(x);