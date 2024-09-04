// Ejercicio para evaluar diferentes opciones

let numero = 7;

if(numero == 1) {
    console.log('Número uno');  
}else if(numero == 2) {
    console.log('Número dos');
}else if(numero == 3) {
    console.log('Número tres');
}else if(numero == 4) {
    console.log('Número cuatro');
}else if(numero == 5) {
    console.log('Número cinco');
}else {
    console.log('El número es menor a 1 o mayor a 5');
}


// Carcular la estación del año segun el número de mes

let mes = 15;
let estacion;

if(mes == 12 || mes == 1 || mes == 2) {
    estacion = 'Invierno';
} else if(mes == 3 || mes == 4 || mes == 5) {
    estacion = 'Primavera';
} else if(mes == 6 || mes == 7 || mes == 8) {
    estacion = 'Verano';
} else if(mes == 9 || mes == 10 || mes == 11) {
    estacion ='Otoño';
} else {
    estacion = 'Mes no válido';
}
console.log(estacion);