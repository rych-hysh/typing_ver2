
function automaton_KA(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
function automaton_KI(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
function automaton_KU(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
function automaton_KE(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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
function automaton_KO(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
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

function automaton_GA(input) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
function automaton_GI(input) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
function automaton_GU(input) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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
function automaton_GE(input) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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

function automaton_GO(input) {
	switch (state) {
		case "q_init":
			if (input == "g") {
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

function automaton_KYA(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "a") {
				state = "q_exit"
				return ["hit", 2]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
function automaton_KYU(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}

			return ["miss", 0]
		case "q_2":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 2]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
function automaton_KYO(input) {
	switch (state) {
		case "q_init":
			if (input == "k") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}

			return ["miss", 0]
		case "q_2":
			if (input == "o") {
				state = "q_exit"
				return ["hit", 2]
			}
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}