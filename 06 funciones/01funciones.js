// Funciones básicas

function miPrimeraFuncion(a,b){

    console.log('suma ' + (a+b))

};

miPrimeraFuncion(2,3);     // suma 5
miPrimeraFuncion(12,3);    // suma 15


// palabra reservada RETURN

function miSegundaFuncion(a,b){

    return a+b;

}

let resultado1 = miSegundaFuncion(2,3);  
    console.log(resultado1)         // 5     
let resultado2 =miSegundaFuncion(12,3); 
        //alert(resultado2)               // 35



// Funciones de tipo expresión

let suma = function(a,b){return a+b};

console.log(suma(1,2));         // 3
    //alert(suma(1,2));               // 3

let resultado3 = suma(1,2);

    console.log(resultado3);         // 3
    //alert(resultado);               // 3



// Funciones Flecha

const sumarFuncionFlecha = (a,b) => a+b;

let resultado = sumarFuncionFlecha(3,5);
    console.log(resultado);         // 8

    

// Funciones Self-invoking

(function(a,b){

    console.log('Ejecutando la función: ' + (a+b));
})(4,5);                        // Ejecutando la función: 9
