import { kanaEnd, typed } from "../script";
import { getConsonant, isNstart, isVowel } from "../util/util";

export function automaton_WA(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "w") {
				state = "q_1"
				return ["hit", 0, state, state];
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

export function automaton_WO(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (input == "w") {
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

export function automaton_NN(input: string, state: string, prev_char: string, next_kana: string) {
	switch (state) {
		case "q_init":
			if (isVowel(next_kana) || isNstart(next_kana)) {
				if (input == "n" || input == "x") {
					state = "q_1a";
					return ["hit", 0, state];
				}
			} else if (input == "n" || input == "x") {
				state = "q_1b";
				return ["hit", 0, state];
			}
			return ["miss", 0, state];

		case "q_1b":
			if(input == "n"){
				state = "q_exit";
				return ["hit", 1, state]
			}else if(prev_char == "x"){
				return ["miss", 0, state]
			}
			
			// 次の文字の入力に入るため特別処理
			let next: string[] = getConsonant(next_kana);
			if (next_kana == undefined) return ["miss", 0, state];
			if(next!.length ==1 ){
				if(next[0] != input) return ["miss", 0, state];
				kanaEnd(1);
				typed(input);
				return ["skip", 0, state];
			}
			var i = 0;
			while(i < next.length){
				if (input == next[i]) {
					kanaEnd(1)
					typed(input);
					return ["skip", 0, state];
				}
				i++;
			}
			return ["miss", 0, state]
		case "q_1a":
			if (input == "n") {
				state = "q_exit";
				return ["hit", 1, state];
			}
			return ["miss", 0, state];
		default:
			console.log("unexpected error");
			return ["miss", 0, state];
	}
}