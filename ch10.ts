const distance = (...points: number[][]) =>
	Math.hypot(
		...points.reduce((acc, cur) => {
			for (const [i, value] of cur.entries()) {
				if (acc[i] !== undefined) {
					acc[i] -= value;
				} else {
					acc[i] = value;
				}
			}
			return acc;
		}, []),
	);

// console.log(distance([2, 2], [2, 1])); // 1

// console.log(distance([3, 4, 4, 1, 4], [4, 3, 5, 1, 5])); // 2
// console.log(distance([3, 4, 4, 1, 4], [2, 5, 1, 3, 1])); // 4.898979485566356

// Exercise 10.1
// Normalize the data by looking at each person's averages. Since Pinky is choosier, they probably have a lower average rating. You could scale the average up until it's closer to Yogi's average.

// Exercise 10.2
// Give the influencer more weight by counting their ratings multiple times in the calculation.

const average = (arr: number[]): number =>
	arr.reduce((a, c) => a + c, 0) / arr.length;

const knn = (
	k: number,
	target: number[],
	source: { point: number[]; loaves: number }[],
) =>
	average(
		source
			.map(({ point, loaves }) => [distance(target, point), loaves])
			.sort(([distanceA], [distanceB]) => distanceA - distanceB)
			.slice(0, k)
			.map(([_, loaves]) => loaves),
	);

// console.log(
// 	knn(
// 		4,
// 		[4, 1, 0],
// 		[
// 			{
// 				point: [5, 1, 0],
// 				loaves: 300,
// 			},
// 			{
// 				point: [3, 1, 1],
// 				loaves: 225,
// 			},
// 			{
// 				point: [1, 1, 0],
// 				loaves: 75,
// 			},
// 			{
// 				point: [4, 0, 1],
// 				loaves: 200,
// 			},
// 			{
// 				point: [4, 0, 0],
// 				loaves: 150,
// 			},
// 			{
// 				point: [2, 0, 0],
// 				loaves: 50,
// 			},
// 		],
// 	),
// ); // 218.75

// Exercise 10.3
// Given there are millions of users, 5 is probably too low: you might get some weird results. The book suggests sqrt(n) as a heuristic.
