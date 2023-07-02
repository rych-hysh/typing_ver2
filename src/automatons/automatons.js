
export function automaton_A(input) {
	switch (state) {
			case "q_init":
					if (input == "a") {
							state = "q_exit"
							return ["hit", 1, state];
					}
					return ["miss", 0, state];

			default:
					return ["miss", 0, state];
	}
}
export function automaton_I(input) {
	switch (state) {
			case "q_init":
					if (input == "i") {
							state = "q_exit"
							return ["hit", 1, state];
					}
					return ["miss", 0, state];
			default:
					return ["miss", 0, state];
	}
}

export function automaton_XE(input) {
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
					return ["miss", 0, state];
	}
}
export function automaton_KA(input) {
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
					return ["miss", 0, state];
	}
}
export function automaton_DA(input) {
	switch (state) {
			case "q_init":
					if (input == "d") {
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
					return ["miss", 0, state];
	}
}
export function automaton_NA(input) {
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
					return ["miss", 0, state];
	}
}

export function automaton_FU(input) {
	switch (state) {
			case "q_init":
					if (input == "f" || input == "h") {
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
					return ["miss", 0, state];
	}
}

export function automaton_CONSTNANT(input) {

}

export function automaton_NN(input) {
	displayDebugInfo();
	switch (state) {
			case "q_init":
					if (isVowel(next_kana) || isNstart(next_kana)) {
							if (input == "n" || input == "x") {
									state = "q_a1";
									return ["hit", 0, state];
							}
					} else if (input == "n") {
							state = "q_b1";
							return ["hit", 0, state];
					}
					return ["miss", 0, state];

			case "q_b1":
					if (input == getConsonant(next_kana)) {
							typed(input);
							return ["hit", 0, state];
					}
			case "q_a1":
					if (input == "n") {
							state = "q_exit";
							return ["hit", 1, state];
					}
					return ["miss", 0, state];
			default:
					return ["miss", 0, state];
	}
}

export function automaton_DA(input){
	switch (state) {
			case "q_init":
					if (input == "d") {
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
					return ["miss", 0, state];
	}
}

export function automaton_FE(input) {
	switch (state) {
			case "q_init":
					if (input == "f") {
							state = "q_1"
							return ["hit", 1, state];
					}
					return ["miss", 0, state];
			case "q_1":
					if (input == "u") {
							state = "q_exit";
							return ["hit", 1, state];
					}
					if (input == "e") {
							state = "q_exit";
							return ["hit", 2, state];
					}
					return ["miss", 0, state]
			default:
					return ["miss", 0, state];
	}
}

