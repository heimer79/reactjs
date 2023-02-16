const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 345353,
        lat: 3452345,
        lng: 3453543
    }
};

// console.table(persona);

const persona2 = {...persona };
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);