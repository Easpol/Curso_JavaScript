// While

let i = 0;
let texto = '';

while (i < 10) {
    texto += `El número es ${i}\n`;     // El número es 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++;
}
console.log(texto);



// Do While

do{
    texto += `El número es ${i}\n`;    // El número es 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    i++;                                // en esta ocasión se ejecuta cuando el valor es 10 antes de salir del ciclo
} while (i < 10);

console.log(texto);



// For

conta = '';

for(let contador = 0; contador < 4; contador++){
    conta += `El número es ${contador}\n`;    

    console.log(contador); // El número es 0, 1, 2, 3
}
console.log(conta); // 0, 1, 2, 3



// Break

for (let cont = 0; cont < 10; cont++) {
    if (cont % 2 === 0) {
        console.log(cont);  // 0, 2, 4, 6, 8
    }
}

for (let cont = 0; cont < 10; cont++) {
    if (cont % 2 === 0) {
        console.log(cont);
        break;  // 0
    }
}

console.log('---------------------------');

for (let cont = 0; cont < 10; cont++) {
    if (cont === 5) {
        break;
    }
    console.log(cont);  // 0, 1, 2, 3, 4
}