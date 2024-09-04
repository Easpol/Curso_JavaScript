// Asignación

/* let */ a=1, b=2, c=1, d=4;

a += 3;    // a = a + 3
console.log(a);


a -= 2;    // a = a - 2 
console.log(a);

/*
        *=
        /=
        %=
        **=
*/


// Comparación

// Igualdad

    /* let*/ a = 3, b = 2, c = "3";

    /* let*/ z = a == c;  // true    solo revisa valor
    console.log(z);

    z = a === c;  // false      revisa valor y tipo de dato 
    console.log(z);

// Diferencia

    /* let*/ a = 3, b = 2, c = "3";
    /* let*/ z = a != c;  // false    solo revisa valor
    console.log(z);

    z = a !== c;  // false      revisa valor y tipo de dato 
    console.log(z);

// Relacionales

    // mayor que
    z = a > b;  // true
    console.log(z);

    // menor que
    z = a < b;  // false
    console.log(z);

    // mayor o igual que
    z = a >= b;  // true
    console.log(z); 

    // menor o igual que
    z = a <= c;  // true
    console.log(z);

// Operadores And , Or y Not

    // And  &&
    
    /* let*/ a = 7;
    let valMin= 0, valMax=10;       //Dentro de rango

    if(a >= valMin && a <= valMax){
        console.log("Dentro de rango");
    }else{
        console.log("Fuera de rango");
    }

    // Or  ||
     let vacaciones= false, diaDescanso=false;      // Tengo que ir a trabajar :(

    if(vacaciones || diaDescanso){      
        console.log("Tengo día libre para hacer lo que quiera");
    }else{
        console.log("Tengo que ir a trabajar :(");
    }

    // Not  !

    /* let*/ a = 7, b = 6;

    z = !(a > b);   // false
    console.log(z);
