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
function playSound(buffer) {
	var source = audio_context.createBufferSource(); // creates a sound source
	source.buffer = buffer; // tell the source which sound to play
	source.connect(audio_context.destination); // connect the source to the context's destination (the speakers)
	source.start(0); // play the source now
	// note: on older systems, may have to use deprecated noteOn(time);
}