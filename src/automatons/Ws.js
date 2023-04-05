function automaton_WA(input) {
	switch (state) {
		case "q_init":
			if (input == "w") {
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

function automaton_WO(input) {
	switch (state) {
		case "q_init":
			if (input == "w") {
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

function automaton_NN(input) {
	switch (state) {
		case "q_init":
			if (isVowel(next_kana) || isNstart(next_kana)) {
				if (input == "n" || input == "x") {
					state = "q_1a";
					return ["hit", 0];
				}
			} else if (input == "n" || input == "x") {
				state = "q_1b";
				return ["hit", 0];
			}
			return ["miss", 0];

		case "q_1b":
			if(input == "n"){
				state = "q_exit";
				return ["hit", 1]
			}else if(prev_char == "x"){
				return ["miss", 0]
			}
			
			// 次の文字の入力に入るため特別処理
			let next = getConsonant(next_kana);
			if (next_kana == undefined) return ["miss", 0];
			if(next.length ==1 ){
				if(next != input) return ["miss", 0];
				kanaEnd(1)
				typed(input);
				return ["skip", 0];
			}
			getConsonant(next_kana).forEach(consonant => {
				if (input == consonant) {
					kanaEnd(1)
					typed(input);
					return ["skip", 0];
				}
			})
			return ["miss", 0]
		case "q_1a":
			if (input == "n") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0];
		default:
			console.log("unexpected error");
			return ["miss", 0];
	}
}