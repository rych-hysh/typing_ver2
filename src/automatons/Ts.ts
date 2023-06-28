import { kanaEnd, typed } from "../script";
import { getConsonant } from "../util/util";

export function automaton_TA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TI(input: string, state: string, prev_char: string, next_kana: string) {
	console.log(state)
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_TO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_DA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_DI(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "i") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_DU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_DE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_DO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "d") {
				state = "q_1"
				return ["hit", 0, state];
			}
			return ["miss", 0, state];
		case "q_1":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_LTU(input: string, state: string, prev_char: string, next_kana: string) {
	console.log(state)
	switch (state) {
		case "q_init":
			if (input == "l" || input == "x") {
				state = "q_1"
				return ["hit", 0, state]
			}
			var cons = getConsonant(next_kana);
			if (cons.length == 1 && input == getConsonant(next_kana)[0]) {
				state = "q_1'"
				return ["hit", 0, state]
			}
			if (cons.length > 1) {
				for(var con of cons){
					if (input == con) {
						state = "q_1'"
						return ["hit", 0, state]
					}
				}
			}
			return ["miss", 0, state]
		case "q_1":
			if (input == "t") {
				state = "q_2";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "s") {
				state = "q_3";
				return ["hit", 0, state]
			}
			if (input == "u") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_3":
			if (input == "u") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_1'":
			var cons = getConsonant(next_kana);
			if (cons.length == 1 && input == getConsonant(next_kana)[0]) {
				state = "q_init"
				kanaEnd(1)
				typed(input);
				return ["skip", 1, state];
			}
			if (cons.length > 1) {
				for(var con of cons){
					if (input == con) {
						state = "q_exit"
						kanaEnd(1)
						typed(input);
						return ["skip", 1, state];
					}
				}
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_TYA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0, state]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "a") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TYU(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0, state]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "u") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TYE(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0, state]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "e") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}
export function automaton_TYO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "t") {
				state = "q_1a";
				return ["hit", 0, state]
			}
			if (input == "c") {
				state = "q_1b";
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1a":
			if (input == "y") {
				state = "q_2"
				return ["hit", 0, state]
			}
			if (input == "i") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		case "q_1b":
			if (input == "h") {
				state = "q_2"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_2":
			if (input == "o") {
				state = "q_exit";
				return ["hit", 2, state];
			}
			if(input == "i" && prev_char == "h") {
				state = "q_exit"
				return ["hit", 1, state]
			}
			return ["miss", 0, state]
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}

export function automaton_THI(input: string, state: string, prev_char: string, next_kana: string){
	switch (state) {
		case "q_init":
			if(input == "t"){
				state = "q_1"
				return ["hit", 0, state]
			}
			return ["miss", 0, state]
		case "q_1":
			if(input == "h"){
				state = "q_2"
				return ["hit", 0, state]	
			}
			if(input == "e") {
				state = "q_exit"
				return ["hit", 1, state]	
			}
			return ["miss", 0, state]
		case "q_2":
			if(input == "i"){
				state = "q_exit";
				return ["hit", 2, state]
			}
			return ["miss", 0, state]
			default:
				console.log("unexpected error");
				return ["miss", 0, state];
	}
}