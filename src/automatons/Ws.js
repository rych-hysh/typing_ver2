function automaton_NN(input) {
	switch (state) {
		case "q_init":
			if (isVowel(next_kana) || isNstart(next_kana)) {
				if (input == "n" || input == "x") {
					state = "q_1a";
					return ["hit", 0];
				}
			} else if (input == "n") {
				state = "q_1b";
				return ["hit", 0];
			}
			return ["miss", 0];

		case "q_1b":
			// 次の文字の入力に入るため特別処理
			if (input == getConsonant(next_kana)) {
				kanaEnd(1)
				typed(input);
				return ["skip", 0];
			}
		case "q_1a":
			if (input == "n") {
				state = "q_exit";
				return ["hit", 1];
			}
			return ["miss", 0];
		default:
			return ["miss", 0];
	}
}