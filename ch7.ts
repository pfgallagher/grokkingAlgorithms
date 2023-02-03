interface Graph {
	[node: string]: { [neighbor: string]: number };
}

interface Costs {
	[node: string]: number;
}

interface Parents {
	[node: string]: string;
}

const findLowestCostNode = (costs: Costs, processed: string[]): string => {
	let lowestCost = Infinity;
	let lowestCostNode = "";
	for (const [node, cost] of Object.entries(costs)) {
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	return lowestCostNode;
};

const initializeCostsAndParents = ({
	graph,
	start,
}: {
	graph: Graph;
	start: string;
}): {
	costs: Costs;
	parents: Parents;
} => {
	const costs: Costs = {};
	const parents: Parents = {};
	for (const node of Object.keys(graph)) {
		if (!costs.hasOwnProperty(node) && node !== start) {
			costs[node] = Infinity;
		}
	}
	for (const [node, weight] of Object.entries(graph[start])) {
		costs[node] = weight;
		parents[node] = start;
	}
	return { costs, parents };
};

const formatPath = ({
	parents,
	start,
	end,
}: {
	parents: Parents;
	start: string;
	end: string;
}): string[] => {
	const path = [end];
	while (path[0] !== start) {
		path.unshift(parents[path[0]]);
	}
	return path;
};

const dijkstra = ({
	graph,
	start,
	end,
}: {
	graph: Graph;
	start: string;
	end: string;
}): { cost: number; path: string[] } => {
	const processed: string[] = [];
	const { costs, parents } = initializeCostsAndParents({ graph, start });
	while (true) {
		const node = findLowestCostNode(costs, processed);
		if (node) {
			const neighbors = graph[node];
			for (const neighbor of Object.keys(neighbors)) {
				const newCost = costs[node] + neighbors[neighbor];
				if (newCost < costs[neighbor]) {
					costs[neighbor] = newCost;
					parents[neighbor] = node;
				}
			}
			processed.push(node);
		} else {
			return { cost: costs[end], path: formatPath({ parents, start, end }) };
		}
	}
};

// const graph1 = {
// 	start: {
// 		a: 6,
// 		b: 2,
// 	},
// 	a: {
// 		fin: 1,
// 	},
// 	b: {
// 		a: 3,
// 		fin: 5,
// 	},
// 	fin: {},
// };

// dijkstra({
// 	graph: graph1,
// 	start: "start",
// 	end: "start",
// });

// Exercise 7.1

const graphA = {
	start: {
		a: 5,
		b: 2,
	},
	a: {
		c: 4,
		d: 2,
	},
	b: { a: 8, d: 7 },
	c: { d: 6, fin: 3 },
	d: { fin: 1 },
	fin: {},
};

console.log("a: ", dijkstra({ graph: graphA, start: "start", end: "fin" }));

const graphB = {
	start: { a: 10 },
	a: { c: 20 },
	b: { a: 1 },
	c: { b: 1, fin: 30 },
	fin: {},
};

console.log("b: ", dijkstra({ graph: graphB, start: "start", end: "fin" }));

// Dijkstra's algorithm doesn't work with cyclical graphs or graphs with negative-weight edges.
// For negative-weight edges, we could use the Bellman-Ford algorithm.
// To answer C, however, we can just use Dijkstra's algorithm, because the negative value isn't a member of the shortest path.
const graphC = {
	start: {
		a: 2,
		b: 2,
	},
	a: { b: 2 },
	b: { c: 2, fin: 2 },
	c: { a: -1, fin: 2 },
	fin: {},
};

console.log("c: ", dijkstra({ graph: graphC, start: "start", end: "fin" }));
