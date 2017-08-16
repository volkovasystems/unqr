"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "unqr",
			"path": "unqr/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/unqr.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"unqr": "unqr"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const unqr = require( "./unqr.js" );
//: @end-server

//: @client:
const unqr = require( "./unqr.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "unqr", ( ) => {

	describe( "`[ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ].filter( ( value ) => unique( value ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			let array = [ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ];

			let unique = unqr.bind( [ ] );

			assert.deepEqual( array.filter( ( value ) => unique( value ) ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "unqr", ( ) => {

	describe( "`[ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ].filter( ( value ) => unique( value ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			let array = [ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ];

			let unique = unqr.bind( [ ] );

			assert.deepEqual( array.filter( ( value ) => unique( value ) ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "unqr", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`[ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ].filter( ( value ) => unique( value ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let array = [ 1, 2, 3, 4, 5, 6, 4, 3, 2, 2, 1, 6 ];

					let unique = unqr.bind( [ ] );
					return JSON.stringify( array.filter( ( value ) => unique( value ) ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

} );

//: @end-bridge
