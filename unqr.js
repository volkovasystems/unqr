"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "unqr",
			"path": "unqr/unqr.js",
			"file": "unqr.js",
			"module": "unqr",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/unqr.git",
			"test": "unqr-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Progressive unique array element.

		Specifically used for chaining in array filter.
	@end-module-documentation

	@include:
		{
			"depher": "depher",
			"doubt": "doubt",
			"een": "een",
			"shft": "shft"
		}
	@end-include
*/

const depher = require( "depher" );
const doubt = require( "doubt" );
const een = require( "een" );
const shft = require( "shft" );

const unqr = function unqr( element, comparator, array ){
	/*;
		@meta-configuration:
			{
				"element": "*",
				"comparator": "function",
				"array": Array
			}
		@end-meta-configuration
	*/

	let parameter = shft( arguments );

	array = depher( parameter, ( parameter ) => doubt( parameter, ARRAY ), this, [ ] );

	comparator = depher( parameter, FUNCTION, null );

	if( !een( array, element, comparator ) ){
		array.push( element );

		return true;
	}

	return false;
};

module.exports = unqr;
