// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/


var splice = function(arr, start, numToReplace, replace) {
	var output = [];
	var argLength = arguments.length;
	if (argLength < 4) {
		argLength = 4;
	}
	for (i=3; i<argLength; i++) {
		if (start > arguments.length){
			output = arr;
			output.push(arguments[i]);
		}
		else{
			for (var j=0; j<arr.length; j++) {
				if (j < start || j >= start + numToReplace) {
					if (numToReplace === 0 && j === start) {
						output.push(replace);
					}
					output.push(arr[j]);
				}
				else if (j === start && arguments.length > 3) {
					output.push(replace);
				}
			
			}
		}
	}
	return output;
};

console.log(splice(['a','b','c'], 99, 0,'z'));

