// desestructuracion de objeto


const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
};

// const { nombre: nombre2 } = persona;
// const { nombre, edad, clave } = persona;
// console.log(nombre2);
// console.log(nombre);
// console.log(edad);
// console.log(clave);
/* console.log(persona.edad);
console.log(persona.clave); */


/* const useContext  = (usuario) => {
    const { edad, clave, nombre } = usuario;

    console.log(edad, clave, nombre)
}
 */
const puseContext = ({ clave, nombre, edad, rango = 'capitan' }) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 34.52345,
            lng: -34.53543
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = puseContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);