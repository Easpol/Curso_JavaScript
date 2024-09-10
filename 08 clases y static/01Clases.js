// Clases

// Definir una clase

class Persona {
    
    // Constructor

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }


    // Métodos GET y SET

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }   

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

}

let persona1 = new Persona('Conchi', 'Rodrigo');
console.log(persona1);

let persona2 = new Persona('Julio', 'Moreno');
console.log(persona2.nombre, persona2.apellido);        // obtinee el nombre y el apellido

persona2.nombre = 'Julius';                             // cambia el nombre

console.log(persona2.nombre, persona2.apellido);        
