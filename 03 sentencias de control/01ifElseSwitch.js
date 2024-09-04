// If else

if(false) {
    // Si la condición es verdadera
    console.log('Condición verdadera');
}else {
    // Si la condición es falsa
    console.log('Condición falsa');
}   


// ternario

let condicion = true;

let resultado = condicion ? "Condición Verdadera" : "Condición Falsa";
console.log(resultado);



// Switch

/*let*/ numero = 5;

let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'No es ni el número uno, dos, tres o cuatro';
}
console.log(numeroTexto);