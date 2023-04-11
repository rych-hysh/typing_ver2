import * as Vowels from "../automatons/Vowels"
import * as Ks from "../automatons/Ks"
import * as Ss from "../automatons/Ss"
import * as Ts from "../automatons/Ts"
import * as Ns from "../automatons/Ns"
import * as Hs from "../automatons/Hs"
import * as Ms from "../automatons/Ms"
import * as Ys from "../automatons/Ys"
import * as Rs from "../automatons/Rs"
import * as Ws from "../automatons/Ws"
import * as EXs from "../automatons/EXs";

export function isVowel(kana: string) {
	if (kana == "あ" || kana == "い" || kana == "う" || kana == "え" || kana == "お") return true;
	return false;
}
export function isNstart(kana: string) {
	if (kana == "な" || kana == "に" || kana == "ぬ" || kana == "ね" || kana == "の") return true;
	return false;
}

//TODO: cha,chu,che,cho,fi,mya,myu,myo,rya,ryu,ryo,bya,byu,byo,pya,pyu,pyo,thi,dhi,dhu,wi,we,va,vi,vu,ve,vo
export function setAutomaton(target_kana: string, next_kana: string) {
	var automaton;
	switch (target_kana) {
		case "あ":
			automaton = Vowels.automaton_A;
			break;
		case "い":
			automaton = Vowels.automaton_I;
			break;
		case "う":
			automaton = Vowels.automaton_U;
			break;
		case "え":
			automaton = Vowels.automaton_E;
			break;
		case "お":
			automaton = Vowels.automaton_O;
			break;
		case "か":
			automaton = Ks.automaton_KA;
			break;
		case "き":
			if (next_kana == "ゃ") {
				automaton = Ks.automaton_KYA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ks.automaton_KYU
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ks.automaton_KYO
				break;
			}
			automaton = Ks.automaton_KI;
			break;
		case "く":
			automaton = Ks.automaton_KU;
			break;
		case "け":
			automaton = Ks.automaton_KE;
			break;
		case "こ":
			automaton = Ks.automaton_KO;
			break;
		case "さ":
			automaton = Ss.automaton_SA;
			break;
		case "し":
			if (next_kana == "ゃ") {
				automaton = Ss.automaton_SHA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ss.automaton_SHU
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ss.automaton_SHO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = Ss.automaton_SHE
				break;
			}
			automaton = Ss.automaton_SI;
			break;
		case "す":
			automaton = Ss.automaton_SU;
			break;
		case "せ":
			automaton = Ss.automaton_SE;
			break;
		case "そ":
			automaton = Ss.automaton_SO;
			break;
		case "た":
			automaton = Ts.automaton_TA;
			break;
		case "ち":
			if (next_kana == "ゃ") {
				automaton = Ts.automaton_TYA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ts.automaton_TYU
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ts.automaton_TYO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = Ts.automaton_TYE
				break;
			}
			automaton = Ts.automaton_TI;
			break;
		case "つ":
			automaton = Ts.automaton_TU;
			break;
		case "て":
			if (next_kana == "ぃ") {
				automaton = Ts.automaton_THI;
				break;
			}
			automaton = Ts.automaton_TE;
			break;
		case "と":
			automaton = Ts.automaton_TO;
			break;
		case "な":
			automaton = Ns.automaton_NA;
			break;
		case "に":
			if (next_kana == "ゃ") {
				automaton = Ns.automaton_NYA;
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ns.automaton_NYU;
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ns.automaton_NYO;
				break;
			}
			automaton = Ns.automaton_NI;
			break;
		case "ぬ":
			automaton = Ns.automaton_NU;
			break;
		case "ね":
			automaton = Ns.automaton_NE;
			break;
		case "の":
			automaton = Ns.automaton_NO;
			break;
		case "は":
			automaton = Hs.automaton_HA;
			break;
		case "ひ":
			if (next_kana == "ゃ") {
				automaton = Hs.automaton_HYA;
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Hs.automaton_HYU;
				break;
			}
			if (next_kana == "ょ") {
				automaton = Hs.automaton_HYO;
				break;
			}
			automaton = Hs.automaton_HI;
			break;
		case "ふ":
			// 小さい「ぇ」
			if (next_kana == "ぁ") {
				automaton = Hs.automaton_FA;
				break;
			}
			if (next_kana == "ぇ") {
				automaton = Hs.automaton_FE;
				break;
			}
			if (next_kana == "ぉ") {
				automaton = Hs.automaton_FO;
				break;
			}
			automaton = Hs.automaton_FU;
			break;
		case "へ":
			automaton = Hs.automaton_HE;
			break;
		case "ほ":
			automaton = Hs.automaton_HO;
			break;
		case "ま":
			automaton = Ms.automaton_MA;
			break;
		case "み":
			automaton = Ms.automaton_MI;
			break;
		case "む":
			automaton = Ms.automaton_MU;
			break;
		case "め":
			automaton = Ms.automaton_ME;
			break;
		case "も":
			automaton = Ms.automaton_MO;
			break;
		case "や":
			automaton = Ys.automaton_YA;
			break;
		case "ゆ":
			automaton = Ys.automaton_YU;
			break;
		case "よ":
			automaton = Ys.automaton_YO;
			break;
		case "ら":
			automaton = Rs.automaton_RA;
			break;
		case "り":
			automaton = Rs.automaton_RI;
			break;
		case "る":
			automaton = Rs.automaton_RU;
			break;
		case "れ":
			automaton = Rs.automaton_RE;
			break;
		case "ろ":
			automaton = Rs.automaton_RO;
			break;
		case "わ":
			automaton = Ws.automaton_WA;
			break;
		case "を":
			automaton = Ws.automaton_WO;
			break;
		case "ん":
			automaton = Ws.automaton_NN;
			break;
		case "が":
			automaton = Ks.automaton_GA;
			break;
		case "ぎ":
			if (next_kana == "ゃ") {
				automaton = Ks.automaton_GYA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ks.automaton_GYU
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ks.automaton_GYO
				break;
			}
			automaton = Ks.automaton_GI;
			break;
		case "ぐ":
			automaton = Ks.automaton_GU;
			break;
		case "げ":
			automaton = Ks.automaton_GE;
			break;
		case "ご":
			automaton = Ks.automaton_GO;
			break;
		case "ざ":
			automaton = Ss.automaton_ZA;
			break;
		case "じ":
			if (next_kana == "ゃ") {
				automaton = Ss.automaton_JA
				break;
			}
			if (next_kana == "ゅ") {
				automaton = Ss.automaton_JU
				break;
			}
			if (next_kana == "ょ") {
				automaton = Ss.automaton_JO
				break;
			}
			if (next_kana == "ぇ") {
				automaton = Ss.automaton_JE
				break;
			}
			automaton = Ss.automaton_ZI;
			break;
		case "ず":
			automaton = Ss.automaton_ZU;
			break;
		case "ぜ":
			automaton = Ss.automaton_ZE;
			break;
		case "ぞ":
			automaton = Ss.automaton_ZO;
			break;
		case "だ":
			automaton = Ts.automaton_DA;
			break;
		case "ぢ":
			automaton = Ts.automaton_DI;
			break;
		case "づ":
			automaton = Ts.automaton_DU;
			break;
		case "で":
			automaton = Ts.automaton_DE;
			break;
		case "ど":
			automaton = Ts.automaton_DO;
			break;
		case "ば":
			automaton = Hs.automaton_BA;
			break;
		case "び":
			automaton = Hs.automaton_BI;
			break;
		case "ぶ":
			automaton = Hs.automaton_BU;
			break;
		case "べ":
			automaton = Hs.automaton_BE;
			break;
		case "ぼ":
			automaton = Hs.automaton_BO;
			break;
		case "ぱ":
			automaton = Hs.automaton_PA;
			break;
		case "ぴ":
			automaton = Hs.automaton_PI;
			break;
		case "ぷ":
			automaton = Hs.automaton_PU;
			break;
		case "ぺ":
			automaton = Hs.automaton_PE;
			break;
		case "ぽ":
			automaton = Hs.automaton_PO;
			break;
		case "ぁ":
			automaton = Vowels.automaton_LA;
			break;
		case "ぃ":
			automaton = Vowels.automaton_LI;
			break;
		case "ぅ":
			automaton = Vowels.automaton_LU;
			break;
		case "ぇ":
			automaton = Vowels.automaton_LE;
			break;
		case "ぉ":
			automaton = Vowels.automaton_LO;
			break;
		case "っ":
			automaton = Ts.automaton_LTU;
			break;
		case "ゃ":
			automaton = Ys.automaton_LYA;
			break;
		case "ゅ":
			automaton = Ys.automaton_LYU;
			break;
		case "ょ":
			automaton = Ys.automaton_LYO;
			break;
		case "ー":
			automaton = EXs.automaton_LONG;
			break;
		case "、":
			automaton = EXs.automaton_TOTEN;
			break;
		case "！":
			automaton = EXs.automaton_EXCLAMATION;
			break;
		case "？":
			automaton = EXs.automaton_QUESTION;
			break;
		default:
			break;
	}
	return automaton;
}

export function getConsonant(kana: string) : string[] {
	if (isVowel(kana)) return [];
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
			return [];
	}
}

export class BufferLoader {
	context: any
	url_list: any
	onload: any
	buffer_list: any[]
	load_count: number
	type_sound_buffer: any
	miss_sound_buffer: any
	correct_sound_buffer: any
	constructor(arg_context: any, arg_urlList: any) {
		this.context = arg_context;
		this.url_list = arg_urlList;
		this.buffer_list = new Array();
		this.load_count = 0;
	}


	loadBuffer(snd_url: string, snd_index: number) {
		let loader = this;
		fetch(snd_url, {
			method: 'GET'
		}).then(response => response.arrayBuffer()).then(arrbuffer => {
			loader.context.decodeAudioData(arrbuffer, (buffer: any) => {
				if (!buffer) {
					alert('error decoding file data: ' + snd_url);
					return;
				}
				loader.buffer_list[snd_index] = buffer;
				this.load_count++;
			})
		})
	}
	async load() {
		for (var i = 0; i < this.url_list.length; ++i)
			await this.loadBuffer(this.url_list[i], i);
		
		}
	load_finished(arg_buffer_list: any[]) {
		this.type_sound_buffer = arg_buffer_list[0];
		this.miss_sound_buffer = arg_buffer_list[1];
		this.correct_sound_buffer = arg_buffer_list[2];
	}
	playSound(buffer: any, audio_context: AudioContext, volume: number = 1) {
		var source = audio_context.createBufferSource(); // creates a sound source
		var gain = audio_context.createGain();
		gain.gain.value = volume;
		source.buffer = buffer; // tell the source which sound to play
		source.connect(gain);
		gain.connect(audio_context.destination); // connect the source to the context's destination (the speakers)
		source.start(0); // play the source now
		// note: on older systems, may have to use deprecated noteOn(time);
	}
}



// function muteSound(){

// }

export function getRankAndMessage(_score: number) {
	if (_score < 50) {
		return { Rank: "F", Message: "がんばろう、、、" }
	} else if (_score < 100) {
		return { Rank: "E", Message: "まだまだだね、、、" }
	} else if (_score < 200) {
		return { Rank: "D", Message: "いい感じ！" }
	} else if (_score < 300) {
		return { Rank: "C", Message: "タイピングﾁｮｯﾄﾃﾞｷﾙ" }
	} else if (_score < 400) {
		return { Rank: "B", Message: "自信をもっていいレベル" }
	} else if (_score < 500) {
		return { Rank: "A", Message: "す、すごい、、、！！！" }
	} else {
		return { Rank: "S", Message: "ス、スカウターが壊れた、、、！？" }
	}
};