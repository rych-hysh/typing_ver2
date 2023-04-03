
function automaton_YA(input) {
	switch (state) {
			case "q_init":
					if (input == "y") {
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
function automaton_YU(input) {
	switch (state) {
			case "q_init":
					if (input == "y") {
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
function automaton_YO(input) {
	switch (state) {
			case "q_init":
					if (input == "y") {
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