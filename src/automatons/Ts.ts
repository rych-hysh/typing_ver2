export function automaton_TA(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
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
export function automaton_TI(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
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
export function automaton_TU(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
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
export function automaton_TE(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
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

export function automaton_TO(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
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

export function automaton_DA(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
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
export function automaton_DI(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
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
export function automaton_DU(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
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
export function automaton_DE(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
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

export function automaton_DO(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
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

export function automaton_LTU(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "l" || input == "x") {
				state = "q_1"
				return ["hit", 0]
			}
			var cons = getConsonant(next_kana);
			if (cons.length == 1 && input == getConsonant(next_kana)[0]) {
				state = "q_1'"
				return ["hit", 0]
			}
			if (cons.length > 1) {
				for(i in cons){
					if (input == cons[i]) {
						state = "q_1'"
						return ["hit", 0]
					}
				}
			}
			return ["miss", 0]
		case "q_1":
			if (input == "t") {
				state = "q_2";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "s") {
				state = "q_3";
				return ["hit", 0]
			}
			if (input == "u") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_3":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1'":
			var cons = getConsonant(next_kana);
			if (cons.length == 1 && input == getConsonant(next_kana)[0]) {
				kanaEnd(1)
				typed(input: string, state: string);
				return ["skip", 1];
			}
			if (cons.length > 1) {
				for(i in cons){
					if (input == cons[i]) {
						kanaEnd(1)
						typed(input: string, state: string);
						return ["skip", 1];
					}
				}
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

export function automaton_TYA(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
export function automaton_TYU(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
export function automaton_TYE(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 2];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}
export function automaton_TYO(input: string, state: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}

export function automaton_THI(input: string, state: string){
	switch (state) {
		case "q_init":
			if(input == "t"){
				state = "q_1"
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_1":
			if(input == "h"){
				state = "q_2"
				return ["hit", 0]	
			}
			if(input == "e") {
				state = "q_exit"
				return ["hit", 1]	
			}
			return ["miss", 0]
		case "q_2":
			if(input == "i"){
				state = "q_exit";
				return ["hit", 2]
			}
			return ["miss", 0]
			default:
				console.log("unexpected error");
				return ["miss", 0];
	}
}