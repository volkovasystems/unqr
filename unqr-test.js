
const assert = require( "assert" );
const unqr = require( "./unqr.js" );

let array = [ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ];

let unique =  unqr.bind( [ ] );

assert.deepEqual( array.filter( ( value ) => unique( value ) ), [ 1, 2, 3, 4, 5, 6 ], "should be deeply equal" );

console.log( "ok" );
