export function automaton_A(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "a") {
				state = "q_exit"
				return ["hit", 1, state];
			}
			return ["miss", 0, state];

		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_I(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_U(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_E(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "e") {
				state = "q_exit"
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_O(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "o") {
				state = "q_exit"
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_LA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_LI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_LU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_LE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_LO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}