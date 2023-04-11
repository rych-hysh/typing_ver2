export function automaton_LONG(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "-") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

export function automaton_TOTEN(input: string, state: string){
	switch (state) {
		case "q_init":
			if(input == ",") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
			default:
				console.log("unexpected error");
				return ["miss", 0];
	}
}


export function automaton_QUESTION(input: string, state: string){
	switch (state) {
		case "q_init":
			if(input == "?") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
			default:
				console.log("unexpected error");
				return ["miss", 0];
	}
}

export function automaton_EXCLAMATION(input: string, state: string){
	switch (state) {
		case "q_init":
			if(input == "!") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
			default:
				console.log("unexpected error");
				return ["miss", 0];
	}
}
