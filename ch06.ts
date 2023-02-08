// Exercise 6.1
// 2

// Exercise 6.2
// 2

const graph: { [name: string]: string[] } = {
	you: ["alice", "bob", "claire"],
	bob: ["anuj", "peggy"],
	alice: ["peggy"],
	claire: ["thom", "jonny"],
	anuj: [],
	peggy: [],
	thom: [],
	jonny: [],
};

const personIsSeller = (name: string): boolean => name[name.length - 1] === "m";

const search = (name: string): boolean => {
	const searched: string[] = [];
	const searchQueue: string[] = [];
	searchQueue.push(...graph[name]);
	while (searchQueue.length) {
		const person = searchQueue.shift();
		if (person && !searched.includes(person)) {
			if (personIsSeller(person)) {
				console.log(`${person} is a mango seller!`);
				return true;
			} else {
				searchQueue.push(...graph[person]);
				searched.push(person);
			}
		}
	}
	return false;
};

// Exercise 6.3
// A: Invalid
// B: Valid
// C: Invalid

// Exercise 6.4
// 1. Wake up
// 2. Exercise
// 3. Shower
// 4. Get Dressed
// 5. Brush Teeth
// 6. Eat Breakfast
// 7. Pack Lunch

// Exercise 6.5
// A, C
