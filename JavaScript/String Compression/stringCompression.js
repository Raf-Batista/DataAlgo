/*
Given an array of characters with repeating characters, compress it in place. The length of the array after compression should be 
less than or equal to the original array.

Example:
Input: ['a', 'a', 'b', 'c', 'c', 'c']
Output: ['a', '2', 'b', 'c', '3']

*/ 

function compression(array) {
	const result = [];
	let hash = {};

	for(let i = 0; i < array.length; i++) {
	   hash[array[i]] ?  hash[array[i]] += 1 : hash[array[i]] = 1
	}

	for(char in hash) {
		if(hash[char] !== 1) {
			result.push(char);
			result.push(hash[char].toString())
		} else {
			result.push(char)
		}
	}	
	
	if(result.length <= array.length) {
		return result;
	} else {
		return false;
	}

}

module.exports = compression;



