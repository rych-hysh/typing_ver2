export function automaton_MA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "m") {
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
export function automaton_MI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "m") {
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
export function automaton_MU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "m") {
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
export function automaton_ME(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "m") {
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

export function automaton_MO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "m") {
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