function automaton_HA(input) {
	switch (state) {
		case "q_init":
			if (input == "h") {
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
function automaton_HI(input) {
	switch (state) {
		case "q_init":
			if (input == "h") {
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
function automaton_HU(input) {
	switch (state) {
		case "q_init":
			if (input == "h") {
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
function automaton_HE(input) {
	switch (state) {
		case "q_init":
			if (input == "h") {
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

function automaton_HO(input) {
	switch (state) {
		case "q_init":
			if (input == "h") {
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

function automaton_FU(input) {
	switch (state) {
		case "q_init":
			if (input == "f" || input == "h") {
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

function automaton_BA(input) {
	switch (state) {
		case "q_init":
			if (input == "b") {
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
function automaton_BI(input) {
	switch (state) {
		case "q_init":
			if (input == "b") {
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
function automaton_BU(input) {
	switch (state) {
		case "q_init":
			if (input == "b") {
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
function automaton_BE(input) {
	switch (state) {
		case "q_init":
			if (input == "b") {
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

function automaton_BO(input) {
	switch (state) {
		case "q_init":
			if (input == "b") {
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

function automaton_FA(input) {
	switch (state) {
		case "q_init":
			if (input == "f") {
				state = "q_1"
				return ["hit", 1];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1];
			}
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_FE(input) {
	switch (state) {
		case "q_init":
			if (input == "f") {
				state = "q_1"
				return ["hit", 1];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1];
			}
			if (input == "e") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_FO(input) {
	switch (state) {
		case "q_init":
			if (input == "f") {
				state = "q_1"
				return ["hit", 1];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1];
			}
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_HYA() {
	switch (state) {
		case "q_init":
			if (input == "h") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_HYU() {
	switch (state) {
		case "q_init":
			if (input == "h") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_HYO() {
	switch (state) {
		case "q_init":
			if (input == "h") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}