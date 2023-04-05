function automaton_SA(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
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
//TODO
function automaton_SI(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
				state = "q_1"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			if (input == "h") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
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
function automaton_SU(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
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
function automaton_SE(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
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

function automaton_SO(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
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

function automaton_ZA(input) {
	switch (state) {
		case "q_init":
			if (input == "z") {
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


function automaton_ZI(input) {
	switch (state) {
		case "q_init":
			if (input == "z" || input == "j") {
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
function automaton_ZU(input) {
	switch (state) {
		case "q_init":
			if (input == "z") {
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
function automaton_ZE(input) {
	switch (state) {
		case "q_init":
			if (input == "z") {
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

function automaton_ZO(input) {
	switch (state) {
		case "q_init":
			if (input == "z") {
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

function automaton_SHA(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2a"
				return ["hit", 0]
			}
			if (input == "h") {
				state = "q_2b"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2a":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		case "q_2b":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2];
			}
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
function automaton_SHU(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2a"
				return ["hit", 0]
			}
			if (input == "h") {
				state = "q_2b"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2a":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		case "q_2b":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2];
			}
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
function automaton_SHE(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "h" || input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 2];
			}
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
function automaton_SHO(input) {
	switch (state) {
		case "q_init":
			if (input == "s") {
				state = "q_1";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "y") {
				state = "q_2a"
				return ["hit", 0]
			}
			if (input == "h") {
				state = "q_2b"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0]
		case "q_2a":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2];
			}
			return ["miss", 0]
		case "q_2b":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2];
			}
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

function automaton_JA(input) {
	switch (state) {
		case "q_init":
			if (input == "j" || input == "z") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "a" && prev_char == "j") {
				state = "q_exit"
				return ["hit", 2]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
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

function automaton_JU(input) {
	switch (state) {
		case "q_init":
			if (input == "j" || input == "z") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "u" && prev_char == "j") {
				state = "q_exit"
				return ["hit", 2]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
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

function automaton_JE(input){
	switch (state) {
		case "q_init":
			if (input == "j" || input == "z") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "e" && prev_char == "j") {
				state = "q_exit"
				return ["hit", 2]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "e") {
				state = "q_exit"
				return ["hit", 2]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

function automaton_JO(input) {
	switch (state) {
		case "q_init":
			if (input == "j" || input == "z") {
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if (input == "o" && prev_char == "j") {
				state = "q_exit"
				return ["hit", 2]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "o") {
				state = "q_exit"
				return ["hit", 2]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
