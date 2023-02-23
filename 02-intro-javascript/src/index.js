import { heroes } from './data/heroes';

console.log( heroes );


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
const getHeroeById = ( id ) =>
{
    return heroes.find( ( heroe ) => heroe.id === id );
}


console.log( getHeroeById( 2 ) );



const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );


console.log( getHeroesByOwner( 'DC' ) );