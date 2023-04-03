function automaton_LONG(input){
	switch(state){
			case "q_init":
					if(input == "-"){
							state = "q_exit"
							return ["hit", 1]
					}
					return ["miss", 0]
			default:
					return ["miss", 0]
	}
}
