module.exports = function towelSort (matrix) {
	let output = [];
	if (arguments.length > 0) {
		for (let subArr = 0; subArr < matrix.length; subArr++) {
			if (subArr % 2 !== 0) {
				matrix[subArr].reverse()
			}
			for (elemet of matrix[subArr]) {
				output.push(elemet)
			}
		}
	}
  return output;
}
