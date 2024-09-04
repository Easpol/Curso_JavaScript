// Como declarar un array

let autos = new Array('BMW', 'Audi', 'Volvo', 'Mercedes', 'Toyota', 'Ford', 6, 7, true, false);

console.log(autos);

/* let*/ autos =[ 'BMW', 'Audi', 'Volvo', 'Mercedes', 'Toyota', 'Ford', 'Mazda', 'Nissan', 'Chevrolet', 'Kia'];

console.log(autos);


// Recorrer un array

for (let i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}


// Acceder a un elemento de un array

console.log(autos[0]); // BMW
console.log(autos[1]); // Audi
console.log(autos[2]); // Volvo
console.log(autos[3]); // Mercedes


// Modificar un elemento de un array

autos[0] = 'Ferrari';
console.log(autos);


// Agregar un elemento a una array al final

autos.push('BMW');
console.log(autos);


// Agregar un elemento en una posición concreta

autos.splice(5, 0, 'lamborguini');
console.log(autos);


// Eliminar el elemento final de un array

autos.pop();
console.log(autos);


// Eliminar un elemento cualquiera de un array

autos.splice(2, 1);
console.log(autos);

