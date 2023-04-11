
export function automaton_YA(input: string, state: string) {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}
export function automaton_YU(input: string, state: string) {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}
export function automaton_YO(input: string, state: string) {
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
			console.log("unexpected error");
			return ["miss", 0];
	}
}


export function automaton_LYA(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_2":
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
export function automaton_LYU(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_2":
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
export function automaton_LYO(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "x" || input == "l") {
				state = "q_1"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_1":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0];
			}
			return ["miss", 0];
		case "q_2":
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