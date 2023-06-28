export function automaton_LONG(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "-") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_TOTEN(input: string, state: string, prev_char: string, next_kana: string){
	switch (state) {
		case "q_init":
			if(input == ",") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
			default:
				console.log("unexpected error");
				return ["miss", 0, state];
	}
}


export function automaton_QUESTION(input: string, state: string, prev_char: string, next_kana: string){
	switch (state) {
		case "q_init":
			if(input == "?") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
			default:
				console.log("unexpected error");
				return ["miss", 0, state];
	}
}

export function automaton_EXCLAMATION(input: string, state: string, prev_char: string, next_kana: string){
	switch (state) {
		case "q_init":
			if(input == "!") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
			default:
				console.log("unexpected error");
				return ["miss", 0, state];
	}
}
