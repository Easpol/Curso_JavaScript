// Herencia

class PersonaHeredadora {

    // Atributo statico vs No staticos
    static contadorObjetosPersona = 0;

    contadorSinStatic = 0;


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


    // Sobreescribir métodos
    // metodo de la clase padre a sobreescribir mas tarde
    nombreCompleto() {                      
        return this.nombre + " " + this.apellido;
    }


    // Static

    static saludar() {
        console.log('Hola desde el método estático');
    }

    static saludar2(persona) {
        console.log('Hola ' + persona.nombre + ' ' + persona.apellido);
    }

}

// Clase hija

class Empleado extends PersonaHeredadora {                                // hereda de la clase Persona   
    
    // Constructor
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);                                // llama al constructor de la clase padre
        this._departamento = departamento;
    }

    // GET y SET
    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    infocompleta() {
        return this.nombre + " " + this.apellido + " trabaja en el departamento de " + this.departamento;
    }

    
    // sobreescribe el método de la clase padre

    nombreCompleto() {                          
        return super.nombreCompleto() + ", " + this.departamento;
    }
}   





let empleado1 = new Empleado('Kevin', 'Moreno', 'Logística');               // crea un objeto de la clase Empleado

console.log(empleado1);                                                     // muestra el objeto
console.log(empleado1.nombre, empleado1.apellido, empleado1.departamento);  // muestra el nombre, apellido y departamento
console.log(empleado1.infocompleta());                                      // muestra la información completa del método

console.log(empleado1.nombreCompleto());                                    // muestra el nombre y el departamento heredando el método de la clase padre


let personaHeredadora1 = new PersonaHeredadora('Raul', 'Moreno');           // crea un objeto de la clase Persona
PersonaHeredadora.saludar();                                                // muestra el saludo del método estático
Empleado.saludar();                                                         // muestra el saludo del método estático heredado


PersonaHeredadora.saludar2(personaHeredadora1);                             // muestra el saludo del método estático
Empleado.saludar2(empleado1);                                               // muestra el saludo del método estático heredado


console.log(PersonaHeredadora.contadorObjetosPersona);                      // muestra el contador de objetos de la clase padre
console.log(Empleado.contadorObjetosPersona);                               // muestra el contador de objetos de la clase hija

//contadorObjetosPersona += 5;                                                // intento modificar el contador de objetos de la clase padre pero da error porque no se puede
//console.log(PersonaHeredadora.contadorObjetosPersona);                      // da error porque no se puede acceder a un atributo statico de una clase desde un objeto
//console.log(Empleado.contadorObjetosPersona);                               // da error porque no se puede acceder a un atributo statico de una clase desde un objeto


console.log(empleado1.contadorSinStatic);                                   // muestra el contador de objetos de la clase hija   
empleado1.contadorSinStatic += 1;                                           // modifica el contador de objetos de la clase hija que no es estático  
console.log(empleado1.contadorSinStatic);                                   // muestra el contador de objetos de la clase hija
