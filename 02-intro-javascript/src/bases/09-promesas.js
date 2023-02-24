import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise( ( resolve, reject ) =>
// {
//     setTimeout( () =>
//     {
//         /*   console.log('2 segundos despues') */

//         const heroe = getHeroeById( 2 );
//         resolve( heroe );
//         /*  reject( heroe ) */
//         /*  reject( 'No se pudo encontrar el heroe' ) */

//         /* resolve(); */
//     }, 2000 )
// } );

// promesa.then( ( heroe ) =>
// {
//     console.log( 'heroe', heroe );
// } )
//     .catch( err => console.warn( err ) );


const getHeroeByIdAsync = ( id ) =>
{
    const promesa = new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            /*   console.log('2 segundos despues') */

            const heroe = getHeroeById( id );

            if ( heroe )
            {
                resolve( heroe );
            } else
            {
                reject( 'No se pudo encontrar el heroe' )
            }

            /*  reject( heroe ) */
            /*   */

            /* resolve(); */
        }, 2000 )
    } );

    return promesa;
}


getHeroeByIdAsync( 2 )
    .then( console.log ) /* then( heroe => console.log( 'Heroe', heroe ) ) */
    .catch( console.warn )    /* .catch( err => console.warn( err ) ) */


