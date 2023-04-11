export function automaton_NA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_NI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_NU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_NE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_NO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_NYA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_NYU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_NYO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "n") {
				state = "q_1";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}