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

var depher = require("depher");
var doubt = require("doubt");
var een = require("een");
var shft = require("shft");

var unqr = function unqr(element, comparator, array) {
	/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"element": "*",
                                                      			"comparator": "function",
                                                      			"array": Array
                                                      		}
                                                      	@end-meta-configuration
                                                      */

	var parameter = shft(arguments);

	array = depher(parameter, function (parameter) {return doubt(parameter, ARRAY);}, this, []);

	comparator = depher(parameter, FUNCTION, null);

	if (!een(array, element, comparator)) {
		array.push(element);

		return true;
	}

	return false;
};

module.exports = unqr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkZXBoZXIiLCJyZXF1aXJlIiwiZG91YnQiLCJlZW4iLCJzaGZ0IiwidW5xciIsImVsZW1lbnQiLCJjb21wYXJhdG9yIiwiYXJyYXkiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJBUlJBWSIsIkZVTkNUSU9OIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE1BQU1GLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLE9BQWYsRUFBd0JDLFVBQXhCLEVBQW9DQyxLQUFwQyxFQUEyQztBQUN2RDs7Ozs7Ozs7OztBQVVBLEtBQUlDLFlBQVlMLEtBQU1NLFNBQU4sQ0FBaEI7O0FBRUFGLFNBQVFSLE9BQVFTLFNBQVIsRUFBbUIsVUFBRUEsU0FBRixVQUFpQlAsTUFBT08sU0FBUCxFQUFrQkUsS0FBbEIsQ0FBakIsRUFBbkIsRUFBK0QsSUFBL0QsRUFBcUUsRUFBckUsQ0FBUjs7QUFFQUosY0FBYVAsT0FBUVMsU0FBUixFQUFtQkcsUUFBbkIsRUFBNkIsSUFBN0IsQ0FBYjs7QUFFQSxLQUFJLENBQUNULElBQUtLLEtBQUwsRUFBWUYsT0FBWixFQUFxQkMsVUFBckIsQ0FBTCxFQUF3QztBQUN2Q0MsUUFBTUssSUFBTixDQUFZUCxPQUFaOztBQUVBLFNBQU8sSUFBUDtBQUNBOztBQUVELFFBQU8sS0FBUDtBQUNBLENBeEJEOztBQTBCQVEsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoidW5xci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ1bnFyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ1bnFyL3VucXIuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInVucXIuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidW5xclwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdW5xci5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInVucXItdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQcm9ncmVzc2l2ZSB1bmlxdWUgYXJyYXkgZWxlbWVudC5cblxuXHRcdFNwZWNpZmljYWxseSB1c2VkIGZvciBjaGFpbmluZyBpbiBhcnJheSBmaWx0ZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcblxuY29uc3QgdW5xciA9IGZ1bmN0aW9uIHVucXIoIGVsZW1lbnQsIGNvbXBhcmF0b3IsIGFycmF5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZWxlbWVudFwiOiBcIipcIixcblx0XHRcdFx0XCJjb21wYXJhdG9yXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJhcnJheVwiOiBBcnJheVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdGFycmF5ID0gZGVwaGVyKCBwYXJhbWV0ZXIsICggcGFyYW1ldGVyICkgPT4gZG91YnQoIHBhcmFtZXRlciwgQVJSQVkgKSwgdGhpcywgWyBdICk7XG5cblx0Y29tcGFyYXRvciA9IGRlcGhlciggcGFyYW1ldGVyLCBGVU5DVElPTiwgbnVsbCApO1xuXG5cdGlmKCAhZWVuKCBhcnJheSwgZWxlbWVudCwgY29tcGFyYXRvciApICl7XG5cdFx0YXJyYXkucHVzaCggZWxlbWVudCApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVucXI7XG4iXX0=
//# sourceMappingURL=unqr.support.js.map
