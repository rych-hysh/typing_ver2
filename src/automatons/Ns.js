function automaton_NA(input) {
	switch (state) {
			case "q_init":
					if (input == "n") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "a") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0]
			default:
					return ["miss", 0];
	}
}
function automaton_NI(input) {
	switch (state) {
			case "q_init":
					if (input == "n") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "i") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0]
			default:
					return ["miss", 0];
	}
}
function automaton_NU(input) {
	switch (state) {
			case "q_init":
					if (input == "n") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "u") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0]
			default:
					return ["miss", 0];
	}
}
function automaton_NE(input) {
	switch (state) {
			case "q_init":
					if (input == "n") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "e") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0]
			default:
					return ["miss", 0];
	}
}
function automaton_NO(input) {
	switch (state) {
			case "q_init":
					if (input == "n") {
							state = "q_1"
							return ["hit", 0];
					}
					return ["miss", 0];
			case "q_1":
					if (input == "o") {
							state = "q_exit";
							return ["hit", 1];
					}
					return ["miss", 0]
			default:
					return ["miss", 0];
	}
}