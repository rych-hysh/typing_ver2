
export function automaton_KA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
export function automaton_KI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
export function automaton_KU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
export function automaton_KE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
export function automaton_KO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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

export function automaton_GA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
export function automaton_GI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
export function automaton_GU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
export function automaton_GE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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

export function automaton_GO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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

export function automaton_KYA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "a") {
				state = "q_exit"
				return ["hit", 2, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_KYU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}

			return ["miss", 0, state]
		case "q_2":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 2, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_KYO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}

			return ["miss", 0, state]
		case "q_2":
			if (input == "o") {
				state = "q_exit"
				return ["hit", 2, state]
			}
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_GYA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "a") {
				state = "q_exit"
				return ["hit", 2, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_GYU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}

			return ["miss", 0, state]
		case "q_2":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 2, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_GYO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "g") {
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}

			return ["miss", 0, state]
		case "q_2":
			if (input == "o") {
				state = "q_exit"
				return ["hit", 2, state]
			}
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}