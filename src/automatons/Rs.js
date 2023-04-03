function automaton_RA(input) {
	switch (state) {
		case "q_init":
			if (input == "r") {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}
function automaton_RI(input) {
	switch (state) {
		case "q_init":
			if (input == "r") {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}
function automaton_RU(input) {
	switch (state) {
		case "q_init":
			if (input == "r") {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}
function automaton_RE(input) {
	switch (state) {
		case "q_init":
			if (input == "r") {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_RO(input) {
	switch (state) {
		case "q_init":
			if (input == "r") {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}