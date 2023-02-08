/*
	A logarithm is usually defined as the inverse of exponentiation.
	Recall that exponentiation is repeated multiplication.
	Effectively, a logarithm is repeated division.
	log2(1024) = 10 -> We need to divide 1024 by 2 until it equals 1 and count the number of division operations. In this case, there are 10, which is the answer.
*/

const binarySearch = (arr: number[], target: number): number | null => {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const guess = arr[mid];
		if (guess === target) {
			return mid;
		}
		if (guess < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return null;
};

const arr = [1, 3, 5, 7, 9];

console.log(binarySearch(arr, 3)); // 1
console.log(binarySearch(arr, -1)); // null

// Exercise 1.1
console.log(Math.log2(128)); // 7

// Exercise 1.2
console.log(Math.log2(256)); // 8

// Exercise 1.3
// O(log2 n), assuming binary search

// Exercise 1.4
// O(n), assuming simple search

// Exercise 1.5
// O(n), assuming simple search

// Exercise 1.6
// O(n), assuming simple search and remembering that trivial operations / constants, by convention, get ignored in big-O notation, i.e. the answer isn't O(n / 26).
