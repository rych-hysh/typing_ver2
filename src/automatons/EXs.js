function automaton_LONG(input) {
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

function automaton_TOTEN(input){
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
