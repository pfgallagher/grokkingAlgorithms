const book = {
	apple: 0.67,
	milk: 1.49,
	avocado: 1.49,
};

// Exercise 5.1
// Consistent

// Exercise 5.2
// Inconsistent

// Exercise 5.3
// Inconsistent

// Exercise 5.4
// Consistent

const phoneBook = {
	jenny: 8675309,
	emergency: 911,
};

const voted: { [name: string]: boolean } = {};

const checkVoter = (name: string): void => {
	if (voted[name]) {
		console.log("Kick them out!");
	} else {
		voted[name] = true;
		console.log("Let them vote!");
	}
};

const cache: { [url: string]: string } = {};

const getDataFromServer = () => "Hello, world!";

const getPage = (url: string): string => {
	if (cache[url]) {
		return cache[url];
	} else {
		const data = getDataFromServer();
		cache[url] = data;
		return data;
	}
};

// Exercise 5.5
// C, D

// Exercise 5.6
// B, D

// Exercise 5.7
// B, C, D
