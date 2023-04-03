function automaton_TA(input) {
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
					return ["miss", 0];
	}
}
function automaton_TI(input) {
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
					return ["miss", 0];
	}
}
function automaton_TU(input) {
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
					return ["miss", 0];
	}
}
function automaton_TE(input) {
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
					return ["miss", 0];
	}
}

function automaton_TO(input) {
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
					return ["miss", 0];
	}
}

function automaton_DA(input){
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
					return ["miss", 0];
	}
}

function automaton_LTU(input){
	switch (state) {
		case "q_init":
			if(input == "l" || input == "x"){
				state = "q_1"
				return ["hit", 0]
			}
			var cons = getConsonant(next_kana);
			
			if(cons.length == 1 && input == getConsonant(next_kana)){
				state = "q_1'"
				return ["hit", 0]
			}
			if (cons.length > 1){
				cons.forEach(c => {
					if(input == c){
						state = "q_1'"
						return ["hit", 0]
					}
				})
			}
			return ["miss", 0]
		case "q_1":
			if(input == "t"){
				state = "q_2";
				return ["hit", 0]
			}
			return ["miss", 0]
		case "q_2":
			if(input == "s"){
				state = "q_3";
				return ["hit", 0]
			}
			if(input == "u") { 
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_3":
			if(input == "u") { 
				state = "q_exit"
				return ["hit", 1]
			}
			return ["miss", 0]
		case "q_1'":
			if(input == getConsonant(next_kana)){
				kanaEnd(1)
				typed(input);
				return ["hit", 0];
			}
		default:
			break;
	}
}