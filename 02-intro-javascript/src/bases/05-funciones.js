/* function saludar(nombre) {
    return `Hola, ${nombre}`;
} */

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo`;


// console.log(saludar('goku'))

console.log(saludar)
console.log(saludar2('heimer'))
console.log(saludar3('jeje'))
console.log(saludar4())


const getUser = () => ({
    uid: 'ABC123',
    username: 'paspi'
})

console.log(getUser());


const getUsuarioActivo = (nombre) => ({
    id: 'dsf',
    username: nombre
})

console.log(getUsuarioActivo('heimer'));