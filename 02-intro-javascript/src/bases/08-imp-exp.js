/* import heroes, { owners } from "./data/heroes"; */

import { heroes, owners } from "../data/heroes";

console.log( heroes );

console.log( `estos son los owners: ${ owners }` );


/* const getHeroeById = ( id ) =>
{
    return heroes.find( ( heroe ) =>
    {
        if ( heroe.id === id )
        {
            return true;
        } else
        {
            return false;
        }
    } );
} */

// this is a short form to implement the before
export const getHeroeById = ( id ) =>
{
    return heroes.find( ( heroe ) => heroe.id === id );
}


console.log( getHeroeById( 2 ) );



export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );


console.log( getHeroesByOwner( 'DC' ) );