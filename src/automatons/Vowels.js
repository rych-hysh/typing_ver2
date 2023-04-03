function automaton_A(input) {
	switch (state) {
			case "q_init":
					if (input == "a") {
							state = "q_exit"
							return ["hit", 1];
					}
					return ["miss", 0];

			default:
					return ["miss", 0];
	}
}
function automaton_I(input) {
	switch (state) {
			case "q_init":
					if (input == "i") {
							state = "q_exit"
							return ["hit", 1];
					}
					return ["miss", 0];
			default:
					return ["miss", 0];
	}
}
function automaton_U(input) {
	switch (state) {
			case "q_init":
					if (input == "u") {
							state = "q_exit"
							return ["hit", 1];
					}
					return ["miss", 0];
			default:
					return ["miss", 0];
	}
}
function automaton_E(input) {
	switch (state) {
			case "q_init":
					if (input == "e") {
							state = "q_exit"
							return ["hit", 1];
					}
					return ["miss", 0];
			default:
					return ["miss", 0];
	}
}
function automaton_O(input) {
	switch (state) {
			case "q_init":
					if (input == "o") {
							state = "q_exit"
							return ["hit", 1];
					}
					return ["miss", 0];
			default:
					return ["miss", 0];
	}
}

function automaton_XE(input) {
	switch (state) {
			case "q_init":
					if (input == "x" || input == "l") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "e") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0];
			default:
					return ["miss", 0];
	}
}