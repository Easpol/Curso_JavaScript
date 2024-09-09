// Objetos

    let persona = { 
        nombre: 'kevin',
        apellido: 'Moreno',
        edad: 34,

        // método funcion 
        nombreCompleto: function(){
            return this.nombre + ' ' + this.apellido;
        }
    }

    // Acceder a los propiedades del objeto

    console.log(persona.nombre);            
    console.log(persona['apellido']);

    for (dato in persona){
        console.log(dato);              // imprime los nombres de las propiedades
        console.log(persona[dato]);     // imprime los valores de las propiedades
    }

    console.log(persona.nombreCompleto());



// Otra forma de crear objetos  

    let persona2 = new Object();

        persona2.nombre = 'Raul';
        persona2.apellido = 'Moreno';
        persona2.edad = 39;

    
        console.log(persona2.nombre);
        console.log(persona2.apellido);
        console.log(persona2.edad);


// Agregar propiedades a un objeto

    persona.telefono = '123456789';
    persona.telefono = '660355469';             // Modificar el valor de la propiedad teléfono
    persona.direccion = 'calle Albacete, 2';
    console.log(persona);                       


// Eliminar propiedades de un objeto

    delete persona.apellido;
    console.log(persona);


// Otras formas de imprimir objetos

    console.log('-------Forma 1-------');
    console.log(persona.nombre + ', ' + persona.edad);  // Dato a dato

    console.log('-------Forma 2-------');
    console.log(`${persona2.nombre} ${persona2.edad}`);   // Con template string

    console.log('-------Forma 3-------');
    console.log(JSON.stringify(persona));              // JSON.stringify

    console.log('-------Forma 4-------');                             // For in
    for (propiedad in persona){
        console.log(persona[propiedad]);
    }

    console.log('-------Forma 5-------');                             // Object.values
    let personaArray = Object.values(persona);
    console.log(personaArray);

// Método Get

let personaGet = { 
    nombre: 'Julio',
    apellido: 'Moreno',
    edad: 64,

        // Método function 
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },


    get nombreCompletoGet(){
        return this.nombre + ' ' + this.apellido;
    }   
}
console.log(personaGet.nombreCompleto());     //        (esta llamada es CON parentesis)
console.log(personaGet.nombreCompletoGet);    //        (esta llamada es SIN parentesis)


// Método Set

let personaSet = {
    nombre: 'Conchi',
    apellido: 'Rodrigo',
    edad: 64,
    idioma: 'es',

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },

    get age(){
        return this.edad;
    },

    set age(edad){
        this.edad = edad;
    },


}
console.log(personaSet.lang);    // Extraemos los datos

personaSet.lang = 'en';         // Modificamos los datos
console.log(personaSet.lang);

console.log(personaSet.edad);    // Extraemos los datos
personaSet.edad = 65;           // Modificamos los datos
console.log(personaSet.edad);



// Constructor de objetos

function Personas(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

let padre = new Personas('kev', 'Blackhair', 34);
console.log(padre);
let madre = new Personas('Sophie', 'Huertas', 34);
console.log(madre);

        // Mismo constructor pero con el método agregado que nos de los datos como queramos.


function Personas1(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Agregar un método al objeto que se cree en un futuro
        this.nombreCompleto = function(){
            return this.nombre + ' ' + this.apellido;
        }
}

let hija1 = new Personas1('Clau', 'Mor', 3);
console.log(hija1.nombreCompleto());                // Llamamos al método para obtener los datos como queremos

let hija2 = new Personas1('Mar', 'Mor', 1);
console.log(hija2.nombreCompleto());                // Llamamos al método para obtener los datos como queremos


// Sentencia Prototipo

console.log(hija1.telefono);                // No existe la propiedad teléfono en el objeto hija1
hija1.telefono = '123456789';               // Creamos la propiedad teléfono en el objeto hija1, solo en hija.
console.log(hija1.telefono);
console.log(hija2.telefono);                // Vemos que en el objeto hija2 no existe la propiedad teléfono              


Personas1.prototype.telefono = '123';       // Creamos la propiedad teléfono en el prototipo de Personas1 y danmos valor 123


console.log(hija1.telefono);                
console.log(hija2.telefono);                // El objeto hija2 ya llega con el valor 123, porque lo hemos creado en el prototipo.



// Uso de Call 

let personaCall = {

    nombre: 'Raw',
    apellido: 'Easpol',

}

console.log(hija2.nombreCompleto());                // Llamamos al método para obtener los datos como queremos

console.log(hija2.nombreCompleto.call(personaCall));               // No existe el método nombreCompleto en el objeto personaCall pero lo estamos llamando con call desde hija2 para personaCall


// Paso de parámetros al método call

let personaCallAñadir = { 
    nombre: 'Julius',
    apellido: 'Morenus',
    edad: 64,

        // Método function donde añadimos 2 parámetro
    nombreCompleto: function(profesion, telefono){
        return this.nombre + ' ' + this.apellido + ' se dedica a ' + profesion + ' y podras contactar en el ' + telefono;
    },
}

let personaCallAñadir2 = {

    nombre: 'Raw',
    apellido: 'Easpol',

}


console.log(personaCallAñadir.nombreCompleto());
console.log(personaCallAñadir.nombreCompleto('Bombero', '987654321'));    // Añadimos los parámetros al método     

console.log(personaCallAñadir.nombreCompleto.call(personaCallAñadir2));    // Llamamos al método para obtener los datos como queremos
console.log(personaCallAñadir.nombreCompleto.call(personaCallAñadir2, 'Ingeniero', '123456789'));    // Añadimos los parámetros al método