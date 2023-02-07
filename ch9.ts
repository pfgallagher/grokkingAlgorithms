const createGrid = (rows: number, cols: number): number[][] =>
	Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(0));

const knapsack = (
	items: {
		name: string;
		weight: number;
		price: number;
	}[],
	size: number,
) => {
	const grid = createGrid(items.length, size);
	for (let row = 0; row < items.length; row++) {
		const { price, weight } = items[row];
		for (let col = 0; col < size; col++) {
			const capacity = col + 1;
			const prev = grid?.[row - 1]?.[col] ?? 0;
			const remainingSpaceValue = grid?.[row - 1]?.[col - weight] ?? 0;
			grid[row][col] =
				weight <= capacity ? Math.max(prev, remainingSpaceValue + price) : prev;
		}
	}
	return grid[items.length - 1][size - 1];
};

// console.log(
// 	knapsack(
// 		[
// 			{
// 				name: "guitar",
// 				weight: 1,
// 				price: 1500,
// 			},
// 			{
// 				name: "stereo",
// 				weight: 4,
// 				price: 3000,
// 			},
// 			{
// 				name: "laptop",
// 				weight: 3,
// 				price: 2000,
// 			},
// 			{ name: "iphone", weight: 1, price: 2000 },
// 			{ name: "mp3player", weight: 1, price: 1000 },
// 		],
// 		4,
// 	),
// );

// Exercise 9.1
// Yes: guitar, iphone, and mp3player.

// To account for the fractional durations, I multiplied all of the durations by 2 (i.e. timeScaling) to turn them into integers.
// I also multiplied the max time by this factor to account for the scaling.
// Accordingly, we can now simply reuse the knapsack function.
const optimizeTravel = (
	attractions: { name: string; time: number; rating: number }[],
	time: number,
	timeScaling: number,
) => {
	const attractionsMappedToKnapsackParameters = attractions.map(
		({ name, rating, time }) => ({
			name,
			weight: time * timeScaling,
			price: rating,
		}),
	);
	return knapsack(attractionsMappedToKnapsackParameters, time * timeScaling);
};

// console.log(
// 	optimizeTravel(
// 		[
// 			{ name: "westminster abbey", time: 0.5, rating: 7 },
// 			{ name: "globe theater", time: 0.5, rating: 6 },
// 			{ name: "national gallery", time: 1, rating: 9 },
// 			{ name: "british museum", time: 2, rating: 9 },
// 			{ name: "st. paul's cathedral", time: 0.5, rating: 8 },
// 		],
// 		2,
// 		2,
// 	),
// );

// Exercise 9.2
// console.log(
// 	knapsack(
// 		[
// 			{ name: "water", weight: 3, price: 10 },
// 			{ name: "book", weight: 1, price: 3 },
// 			{ name: "food", weight: 2, price: 9 },
// 			{ name: "jacket", weight: 2, price: 5 },
// 			{ name: "camera", weight: 1, price: 6 },
// 		],
// 		6,
// 	),
// );
// You should take the water, food, and camera

const longestCommonSubstring = (strA: string, strB: string) => {
	const grid = createGrid(strA.length, strB.length);
	for (let row = 0; row < strA.length; row++) {
		for (let col = 0; col < strB.length; col++) {
			if (strA[row] === strB[col]) {
				const previousCommonCount = grid?.[row - 1]?.[col - 1] ?? 0;
				grid[row][col] = previousCommonCount + 1;
			}
		}
	}
	return Math.max(...grid.flat());
};

// console.log(longestCommonSubstring("fish", "hish"));
// console.log(longestCommonSubstring("hish", "vista"));

const longestCommonSubsequence = (strA: string, strB: string) => {
	const grid = createGrid(strA.length, strB.length);
	for (let row = 0; row < strA.length; row++) {
		for (let col = 0; col < strB.length; col++) {
			if (strA[row] === strB[col]) {
				const previousCommonCount = grid?.[row - 1]?.[col - 1] ?? 0;
				grid[row][col] = previousCommonCount + 1;
			} else {
				const topNeighbor = grid?.[row - 1]?.[col] ?? 0;
				const leftNeighbor = grid?.[row]?.[col - 1] ?? 0;
				grid[row][col] = Math.max(topNeighbor, leftNeighbor);
			}
		}
	}
	return Math.max(...grid.flat());
};

// console.log(longestCommonSubsequence("fosh", "fort"));
// console.log(longestCommonSubsequence("fosh", "fish"));

// Exercise 9.3
//     c   l   u   e   s
// b   0   0   0   0   0
// l   0   1   0   0   0
// u   0   0   2   0   0
// e   0   0   0   3   0
// Longest common substring: lue (3)
