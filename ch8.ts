// Exercise 8.1
// Pick the largest box you have room for, repeating until you run out of space. This won't be an optimal solution, because there might be cases where it'd be better to put multiple, smaller boxes in the place of a singular, larger box.

// Exercise 8.2
// Pick the item with the most points, repeating until you run out of time. This won't be an optimal solution, similarly to Exercise 8.1

const intersection = (setA: Set<string>, setB: Set<string>): Set<string> => {
	const setIntersection = new Set<string>();
	for (const el of setA) {
		if (setB.has(el)) {
			setIntersection.add(el);
		}
	}
	return setIntersection;
};

const difference = (setA: Set<string>, setB: Set<string>): Set<string> => {
	const setDifference = new Set<string>();
	for (const el of setA) {
		if (!setB.has(el)) {
			setDifference.add(el);
		}
	}
	return setDifference;
};

const setCovering = (
	stations: { [station: string]: Set<string> },
	statesNeeded: Set<string>,
) => {
	const finalStations = new Set<string>();
	while (statesNeeded.size) {
		let bestStation = "";
		let statesCovered = new Set<string>();
		for (const [station, statesForStation] of Object.entries(stations)) {
			const covered = intersection(statesNeeded, statesForStation);
			if (statesCovered.size < covered.size) {
				bestStation = station;
				statesCovered = covered;
			}
		}
		statesNeeded = difference(statesNeeded, statesCovered);
		finalStations.add(bestStation);
	}
	return finalStations;
};

console.log(
	setCovering(
		{
			kone: new Set(["id", "nv", "ut"]),
			ktwo: new Set(["wa", "id", "mt"]),
			kthree: new Set(["or", "nv", "ca"]),
			kfour: new Set(["nv", "ut"]),
			kfive: new Set(["ca", "az"]),
		},
		new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]),
	),
);

// Exercise 8.3
// Not greedy

// Exercise 8.4
// Not greedy

// Exercise 8.5
// Greedy

// Exercise 8.6
// Yes

// Exercise 8.7
// Yes

// Exercise 8.8
// Yes
