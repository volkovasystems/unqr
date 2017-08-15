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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkZXBoZXIiLCJyZXF1aXJlIiwiZG91YnQiLCJlZW4iLCJzaGZ0IiwidW5xciIsImVsZW1lbnQiLCJjb21wYXJhdG9yIiwiYXJyYXkiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJBUlJBWSIsIkZVTkNUSU9OIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE1BQU1GLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLE9BQWYsRUFBd0JDLFVBQXhCLEVBQW9DQyxLQUFwQyxFQUEyQztBQUN2RDs7Ozs7Ozs7OztBQVVBLEtBQUlDLFlBQVlMLEtBQU1NLFNBQU4sQ0FBaEI7O0FBRUFGLFNBQVFSLE9BQVFTLFNBQVIsRUFBbUIsVUFBRUEsU0FBRixVQUFpQlAsTUFBT08sU0FBUCxFQUFrQkUsS0FBbEIsQ0FBakIsRUFBbkIsRUFBK0QsSUFBL0QsRUFBcUUsRUFBckUsQ0FBUjs7QUFFQUosY0FBYVAsT0FBUVMsU0FBUixFQUFtQkcsUUFBbkIsRUFBNkIsSUFBN0IsQ0FBYjs7QUFFQSxLQUFJLENBQUNULElBQUtLLEtBQUwsRUFBWUYsT0FBWixFQUFxQkMsVUFBckIsQ0FBTCxFQUF3QztBQUN2Q0MsUUFBTUssSUFBTixDQUFZUCxPQUFaOztBQUVBLFNBQU8sSUFBUDtBQUNBOztBQUVELFFBQU8sS0FBUDtBQUNBLENBeEJEOztBQTBCQVEsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoidW5xci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInVucXJcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidW5xci91bnFyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInVucXIuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ1bnFyXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy91bnFyLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJ1bnFyLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UHJvZ3Jlc3NpdmUgdW5pcXVlIGFycmF5IGVsZW1lbnQuXHJcblxyXG5cdFx0U3BlY2lmaWNhbGx5IHVzZWQgZm9yIGNoYWluaW5nIGluIGFycmF5IGZpbHRlci5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcblxyXG5jb25zdCB1bnFyID0gZnVuY3Rpb24gdW5xciggZWxlbWVudCwgY29tcGFyYXRvciwgYXJyYXkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVsZW1lbnRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJjb21wYXJhdG9yXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcImFycmF5XCI6IEFycmF5XHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xyXG5cclxuXHRhcnJheSA9IGRlcGhlciggcGFyYW1ldGVyLCAoIHBhcmFtZXRlciApID0+IGRvdWJ0KCBwYXJhbWV0ZXIsIEFSUkFZICksIHRoaXMsIFsgXSApO1xyXG5cclxuXHRjb21wYXJhdG9yID0gZGVwaGVyKCBwYXJhbWV0ZXIsIEZVTkNUSU9OLCBudWxsICk7XHJcblxyXG5cdGlmKCAhZWVuKCBhcnJheSwgZWxlbWVudCwgY29tcGFyYXRvciApICl7XHJcblx0XHRhcnJheS5wdXNoKCBlbGVtZW50ICk7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHVucXI7XHJcbiJdfQ==
//# sourceMappingURL=unqr.support.js.map
