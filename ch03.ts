const countdown = (i: number): void => {
	console.log(i);
	if (i <= 1) {
		// base case
		return;
	}
	countdown(i - 1); // recursive case
};

const greet2 = (name: string): void => {
	console.log(`How are you, ${name}?`);
};

const bye = (): void => {
	console.log("Okay, bye!");
};

const greet = (name: string): void => {
	console.log(`Hello, ${name}!`);
	greet2(name);
	console.log("Getting ready to say bye...");
	bye();
};

// Exercise 3.1
// There are two functions: `greet` and `greet2`. Both have variables called `name` with the value `maggie`. `greet` was called first, which means that `greet2` was called after / from `greet`. `greet2` is still on the stack, so once it finishes, it will be popped and `greet` itself can finish executing.

const fact = (x: number): number => (x === 1 ? 1 : x * fact(x - 1));

// Exercise 3.2
// Eventually, the stack will grow too large, so you'll run out of memory and you'll get a stack overflow error.
