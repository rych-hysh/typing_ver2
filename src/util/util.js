function getConsonant(kana) {
	if (isVowel(kana)) return null;
	switch (kana) {
		case "か":
		case "き":
		case "く":
		case "け":
		case "こ":
			return "k"
		case "さ":
		case "し":
		case "す":
		case "せ":
		case "そ":
			return "s"
		case "た":
		case "ち":
		case "つ":
		case "て":
		case "と":
			return "t"
		case "な":
		case "に":
		case "ぬ":
		case "ね":
		case "の":
			return "n"

		case "は":
		case "ひ":
		case "ふ":
		case "へ":
		case "ほ":
			return "h"
		case "ま":
		case "み":
		case "む":
		case "め":
		case "も":
			return "m"

		case "や":
		case "ゆ":
		case "よ":
			return "y"

		case "ら":
		case "り":
		case "る":
		case "れ":
		case "ろ":
			return "r"
		case "わ":
		case "を":
			return "w"
		case "が":
		case "ぎ":
		case "ぐ":
		case "げ":
		case "ご":
			return "g"
		case "ざ":
		case "ず":
		case "ぜ":
		case "ぞ":
			return "z"
		case "じ":
			return ["j", "z"]
		case "だ":
		case "ぢ":
		case "づ":
		case "で":
		case "ど":
			return "d"
		default:
			break;
	}
}