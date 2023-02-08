// Exercise 4.1
const sum = (arr: number[]): number =>
	arr.length ? arr[0] + sum(arr.slice(1)) : 0;

// Exercise 4.2
const count = (arr: number[]): number =>
	arr.length ? count(arr.slice(1)) + 1 : 0;

// Exercise 4.3
const max = (arr: number[]): number => {
	if (arr.length === 2) {
		return arr[0] < arr[1] ? arr[1] : arr[0];
	}
	const subMax = max(arr.slice(1));
	return arr[0] < subMax ? subMax : arr[0];
};

// Exercise 4.4
// Base case: array with one element. In that case, we've either found the element or it doesn't exist in the array.
// Recursive case: array with more than one element. We need to cut the array in half and recurse.

const divideAroundPivot = (
	arr: number[],
): { greater: number[]; less: number[]; pivot: number } => {
	const pivot = Math.floor(Math.random() * arr.length);
	const [less, greater] = arr.slice(1).reduce<[number[], number[]]>(
		(a, c) => {
			a[c <= pivot ? 0 : 1].push(c);
			return a;
		},
		[[], []],
	);
	return {
		less,
		greater,
		pivot,
	};
};

const quickSort = (arr: number[]): number[] => {
	if (arr.length < 2) {
		return arr;
	}
	const { greater, less, pivot } = divideAroundPivot(arr);
	return [...quickSort(less), pivot, ...quickSort(greater)];
};

// Exercise 4.5
// O(n)

// Exercise 4.6
// O(n)

// Exercise 4.7
// O(1)

// Exercise 4.8
// O(n^2)
