// Operador ternario

let resultado = (3 > 2) ? "verdadero se cumple" : "falso no se cumple";
console.log(resultado);  // verdadero



// Convertir String a number

let miNumero = "10";
console.log(typeof miNumero);  // string

let años = Number(miNumero);
console.log(typeof años);  // number

    // También se puede hacer sin declarar otra variable

    miNumero = Number(miNumero);
    console.log(typeof miNumero);   // number


// Convertir number a string

/* let*/ miNumero = 10;
console.log(typeof miNumero);  // number

/* let*/ años = String(miNumero);   // string
console.log(typeof años);  // string

    // También se puede hacer sin declarar otra variable

    miNumero = String(miNumero);
    console.log(typeof miNumero);   // string

// Precedencia de operadores

/*let*/ x = 5;
/*let*/ y = 10;
/*let*/ z = ++x + y--;  // 16
console.log(z);
console.log(x);
console.log(y);

// 1. ++x  primero incrementa x en 1, luego se asigna a z
// 2. y--   primero se asigna a z, luego decrementa y en 1

// 6 + 10 = 16

