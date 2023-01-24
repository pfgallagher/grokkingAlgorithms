// Exercise 2.1
// A list should be used since there are lots of inserts and few reads.

// Exercise 2.2
// A list should be used since only inserts and deletes need to be done and since we don't need random access.

// Exercise 2.3
// An array (sorted) should be used since random access is needed for binary search.

// Exercise 2.4
// Inserts with arrays are slow and the array needs to be sorted each time a new user is added.

// Exercise 2.5
// Hybrid data structure = array of lists
// Search: list < hybrid < array
// Insert: array < hybrid; hybrid == list (arguably the hybrid is *slightly* slower due to the extra array lookup, but both have a constant time)

const findSmallestIndex = (arr: number[]): number => {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
};

const selectionSort = (arr: number[]): number[] => {
	const sortedArr: number[] = [];
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		sortedArr.push(arr.splice(findSmallestIndex(arr), 1)[0]);
	}
	return sortedArr;
};

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]

// While our selection sort is smallest-to-largest, it could also be done largest-to-smallest by finding the largest index and adding each element to the front of the array.
