function isVowel(kana) {
	if (kana == "あ" || kana == "い" || kana == "う" || kana == "え" || kana == "お") return true;
	return false;
}
function isNstart(kana) {
	if (kana == "な" || kana == "に" || kana == "ぬ" || kana == "ね" || kana == "の") return true;
	return false;
}

//TODO: cha,chu,che,cho,fi,mya,myu,myo,rya,ryu,ryo,bya,byu,byo,pya,pyu,pyo,thi,dhi,dhu,wi,we,va,vi,vu,ve,vo
function setAutomaton(target_kana) {
	var automaton;
	switch (target_kana) {
		case "あ":
			automaton = automaton_A;
			break;
		case "い":
			automaton = automaton_I;
			break;
		case "う":
			automaton = automaton_U;
			break;
		case "え":
			automaton = automaton_E;
			break;
		case "お":
			automaton = automaton_O;
			break;
		case "か":
			automaton = automaton_KA;
			break;
		case "き":
			if (next_kana == "ゃ") {
				automaton = automaton_KYA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_KYU
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_KYO
				break;
			}
			automaton = automaton_KI;
			break;
		case "く":
			automaton = automaton_KU;
			break;
		case "け":
			automaton = automaton_KE;
			break;
		case "こ":
			automaton = automaton_KO;
			break;
		case "さ":
			automaton = automaton_SA;
			break;
		case "し":
			if (next_kana == "ゃ") {
				automaton = automaton_SHA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_SHU
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_SHO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = automaton_SHE
				break;
			}
			automaton = automaton_SI;
			break;
		case "す":
			automaton = automaton_SU;
			break;
		case "せ":
			automaton = automaton_SE;
			break;
		case "そ":
			automaton = automaton_SO;
			break;
		case "た":
			automaton = automaton_TA;
			break;
		case "ち":
			if (next_kana == "ゃ") {
				automaton = automaton_TYA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_TYU
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_TYO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = automaton_TYE
				break;
			}
			automaton = automaton_TI;
			break;
		case "つ":
			automaton = automaton_TU;
			break;
		case "て":
			automaton = automaton_TE;
			break;
		case "と":
			automaton = automaton_TO;
			break;
		case "な":
			automaton = automaton_NA;
			break;
		case "に":
			if (next_kana == "ゃ") {
				automaton = automaton_NYA;
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_NYU;
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_NYO;
				break;
			}
			automaton = automaton_NI;
			break;
		case "ぬ":
			automaton = automaton_NU;
			break;
		case "ね":
			automaton = automaton_NE;
			break;
		case "の":
			automaton = automaton_NO;
			break;
		case "は":
			automaton = automaton_HA;
			break;
		case "ひ":
			if (next_kana == "ゃ") {
				automaton = automaton_HYA;
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_HYU;
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_HYO;
				break;
			}
			automaton = automaton_HI;
			break;
		case "ふ":
			// 小さい「ぇ」
			if (next_kana == "ぁ") {
				automaton = automaton_FA;
				break;
			}
			if (next_kana == "ぇ") {
				automaton = automaton_FE;
				break;
			}
			if (next_kana == "ぉ") {
				automaton = automaton_FO;
				break;
			}
			automaton = automaton_FU;
			break;
		case "へ":
			automaton = automaton_HE;
			break;
		case "ほ":
			automaton = automaton_HO;
			break;
		case "ま":
			automaton = automaton_MA;
			break;
		case "み":
			automaton = automaton_MI;
			break;
		case "む":
			automaton = automaton_MU;
			break;
		case "め":
			automaton = automaton_ME;
			break;
		case "も":
			automaton = automaton_MO;
			break;
		case "や":
			automaton = automaton_YA;
			break;
		case "ゆ":
			automaton = automaton_YU;
			break;
		case "よ":
			automaton = automaton_YO;
			break;
		case "ら":
			automaton = automaton_RA;
			break;
		case "り":
			automaton = automaton_RI;
			break;
		case "る":
			automaton = automaton_RU;
			break;
		case "れ":
			automaton = automaton_RE;
			break;
		case "ろ":
			automaton = automaton_RO;
			break;
		case "わ":
			automaton = automaton_WA;
			break;
		case "を":
			automaton = automaton_WO;
			break;
		case "ん":
			automaton = automaton_NN;
			break;
		case "が":
			automaton = automaton_GA;
			break;
		case "ぎ":
			automaton = automaton_GI;
			break;
		case "ぐ":
			automaton = automaton_GU;
			break;
		case "げ":
			automaton = automaton_GE;
			break;
		case "ご":
			automaton = automaton_GO;
			break;
		case "ざ":
			automaton = automaton_ZA;
			break;
		case "じ":
			if (next_kana == "ゃ") {
				automaton = automaton_JA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = automaton_JU
				break;
			}
			if (next_kana == "ょ") {
				automaton = automaton_JO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = automaton_JE
				break;
			}
			automaton = automaton_ZI;
			break;
		case "ず":
			automaton = automaton_ZU;
			break;
		case "ぜ":
			automaton = automaton_ZE;
			break;
		case "ぞ":
			automaton = automaton_ZO;
			break;
		case "だ":
			automaton = automaton_DA;
			break;
		case "ぢ":
			automaton = automaton_DI;
			break;
		case "づ":
			automaton = automaton_DU;
			break;
		case "で":
			automaton = automaton_DE;
			break;
		case "ど":
			automaton = automaton_DO;
			break;
		case "ば":
			automaton = automaton_BA;
			break;
		case "び":
			automaton = automaton_BI;
			break;
		case "ぶ":
			automaton = automaton_BU;
			break;
		case "べ":
			automaton = automaton_BE;
			break;
		case "ぼ":
			automaton = automaton_BO;
			break;
		case "ぱ":
			automaton = automaton_PA;
			break;
		case "ぴ":
			automaton = automaton_PI;
			break;
		case "ぷ":
			automaton = automaton_PU;
			break;
		case "ぺ":
			automaton = automaton_PE;
			break;
		case "ぽ":
			automaton = automaton_PO;
			break;
		case "ぁ":
			automaton = automaton_LA;
			break;
		case "ぃ":
			automaton = automaton_LI;
			break;
		case "ぅ":
			automaton = automaton_LU;
			break;
		case "ぇ":
			automaton = automaton_LE;
			break;
		case "ぉ":
			automaton = automaton_LO;
			break;
		case "っ":
			automaton = automaton_LTU;
			break;
		case "ゃ":
			automaton = automaton_LYA;
			break;
		case "ゅ":
			automaton = automaton_LYU;
			break;
		case "ょ":
			automaton = automaton_LYO;
			break;
		case "ー":
			automaton = automaton_LONG;
			break;
		case "、":
			automaton = automaton_TOTEN;
			break;
		default:
			break;
	}
	return automaton;
}

function getConsonant(kana) {
	if (isVowel(kana)) return null;
	switch (kana) {
		case "か":
		case "き":
		case "く":
		case "け":
		case "こ":
			return ["k"]
		case "さ":
		case "し":
		case "す":
		case "せ":
		case "そ":
			return ["s"]
		case "た":
		case "つ":
		case "て":
		case "と":
			return ["t"]
		case "ち":
			return ["t", "c"]
		case "な":
		case "に":
		case "ぬ":
		case "ね":
		case "の":
			return ["n"]

		case "は":
		case "ひ":
		case "へ":
		case "ほ":
			return ["h"]
		case "ふ":
			return ["h", "f"]
		case "ま":
		case "み":
		case "む":
		case "め":
		case "も":
			return ["m"]

		case "や":
		case "ゆ":
		case "よ":
			return ["y"]

		case "ら":
		case "り":
		case "る":
		case "れ":
		case "ろ":
			return ["r"]
		case "わ":
		case "を":
			return ["w"]
		case "が":
		case "ぎ":
		case "ぐ":
		case "げ":
		case "ご":
			return ["g"]
		case "ざ":
		case "ず":
		case "ぜ":
		case "ぞ":
			return ["z"]
		case "じ":
			return ["j", "z"]
		case "だ":
		case "ぢ":
		case "づ":
		case "で":
		case "ど":
			return ["d"]
		case "ば":
		case "び":
		case "ぶ":
		case "べ":
		case "ぼ":
			return ["b"]
		case "ぱ":
		case "ぴ":
		case "ぷ":
		case "ぺ":
		case "ぽ":
			return ["p"]
		default:
			break;
	}
}

class BufferLoader {
	constructor(arg_context, arg_urlList, arg_callback) {
		this.context = arg_context;
		this.url_list = arg_urlList;
		this.onload = arg_callback;
		this.buffer_list = new Array();
		this.load_count = 0;
	}


	loadBuffer(snd_url, snd_index) {
		let loader = this;
		fetch(snd_url, {
			method: 'GET'
		}).then(response => response.arrayBuffer()).then(arrbuffer => {
			loader.context.decodeAudioData(arrbuffer, buffer => {
				if (!buffer) {
					alert('error decoding file data: ' + snd_url);
					return;
				}
				loader.buffer_list[snd_index] = buffer;
				this.load_count++;
				if (this.url_list.length == this.load_count) loader.onload(loader.buffer_list);
			})
		})
	}
	load() {
		for (var i = 0; i < this.url_list.length; ++i)
			this.loadBuffer(this.url_list[i], i);
	}
}
function load_finished(arg_buffer_list) {
	type_sound_buffer = arg_buffer_list[0];
	miss_sound_buffer = arg_buffer_list[1];
	correct_sound_buffer = arg_buffer_list[2];
}
function playSound(buffer, volume = 1) {
	var source = audio_context.createBufferSource(); // creates a sound source
	var gain = audio_context.createGain();
	gain.gain.value = volume;
	source.buffer = buffer; // tell the source which sound to play
	source.connect(gain);
	gain.connect(audio_context.destination); // connect the source to the context's destination (the speakers)
	source.start(0); // play the source now
	// note: on older systems, may have to use deprecated noteOn(time);
}

// function muteSound(){

// }

function getRankAndMessage(_score){
	if (_score < 50){
		return ["F", "がんばろう、、、"]
	}else if(_score < 100){
		return ["E", "まだまだだね、、、"]
	}else if(_score < 200){
		return ["D", "いい感じ！"]
	}else if(_score < 300){
		return ["C", "タイピングﾁｮｯﾄﾃﾞｷﾙ"]
	}else if(_score < 400){
		return ["B", "自信をもっていいレベル"]
	}else if(_score < 500){
		return ["A", "す、すごい、、、！！！"]
	}else{
		return ["S", "ス、スカウターが壊れた、、、！？"]
	}
};