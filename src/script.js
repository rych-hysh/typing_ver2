window.addEventListener("load", init);
window.addEventListener("keydown", keydown)

var target_string;

var Wordlist;
var word_index = 0;

var prev_kana;
var target_kana;
var next_kana;

var prev_char;

var state = "q_init";

var kana_index = 0;

let type_snd = document.querySelector("#type");
let type_sound_buffer;
let miss_sound_buffer;
let correct_sound_buffer;

const WordListRequest = new Request('data/wordlist.json');
const BackendRequest = new Request('https://test.hryoichi.com/ver2/src/automaton.php')
function init() {


    //効果音の読み込み    
    try {
        audio_context = new AudioContext();
    }
    catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
    buffer_loader = new BufferLoader(audio_context, [
        '/snd/type.mp3',
        '/snd/miss.mp3',
        '/snd/correct.mp3'
    ], load_finished)
    buffer_loader.load();


    const GetHeader = new Headers();
    GetHeader.append('Content-Type', 'application/json')
    const GetInit = {
        method: "GET",
        headers: GetHeader
    }
    // const PostHeader = new Headers();
    // PostHeader.append('Content-Type', 'text/plain')
    // const PostInit = {
    //     method: "POST",
    //     headers: PostHeader,
    //     body: "wan"
    // }

    fetch(WordListRequest, GetInit).then(response => response.json()).then(data => {
        Wordlist = data;
        console.log(Wordlist);
        target_string = Wordlist[word_index]["displaykana"];
        displayTarget(word_index);
        displayDebugInfo();
    });

}

function keydown(e) {
    typed(e.key);
}

/*

target_string   仮名表記の課題文字列
prev_kana       仮名表記のひとつ前の課題文字
target_kana     仮名表記の課題文字
next_kana       仮名表記の次の課題文字
*/
function typed(input) {
    const inputDisplay = document.querySelector("#input");
    
    charUpdate();
    const automaton = setAutomaton(target_kana);
    let res = automaton(input);
    let latest = inputDisplay.querySelector(".latest")
    if (latest != null) latest.classList.remove("latest")
    if (res[0] == "hit") {
        document.querySelectorAll(".wrong_char").forEach(w => w.remove());
        prev_char = input;
        inputDisplay.innerHTML += "<span class='correct_char latest'>" + input + "</span>"
            if (kana_index >= target_string.length - 1 && state == "q_exit") {
            wordEnd();
        } else if (state == "q_exit") {
            kanaEnd(res[1]);
        } else {
            playSound(type_sound_buffer);
        }
    } else {
        playSound(miss_sound_buffer);
        const lastIndex = inputDisplay.innerHTML.lastIndexOf("<span class=\"wrong_char");
        if (lastIndex != -1)  inputDisplay.innerHTML = inputDisplay.innerHTML.slice(0, lastIndex);
        console.log(inputDisplay.innerHTML)
        inputDisplay.innerHTML += "<span class='wrong_char latest'>" + input + "</span>";

    };

    // target_string = Wordlist[word_index]["displaykana"];
    // prev_kana = target_string[kana_index - 1];
    // target_kana = target_string[kana_index];
    // next_kana = target_string[kana_index + 1];
    displayTarget(word_index);
    charUpdate();
    displayDebugInfo();
}

function displayTarget(index = 0) {
    document.querySelector("#display").innerHTML = Wordlist[index]["display"];
    document.querySelector("#displaykana").innerHTML = Wordlist[index]["displaykana"];
}

function displayDebugInfo() {
    let d = document.querySelector("#debugInfo");
    d.innerHTML = "";
    d.innerHTML += "prevChar: " + prev_kana + "<br />";
    d.innerHTML += "tryingChar: " + target_kana + "<br />";
    d.innerHTML += "nextChar: " + next_kana + "<br />";
    d.innerHTML += "kana_index: " + kana_index + "<br />";
    d.innerHTML += "word_index: " + word_index + "<br />";
    d.innerHTML += "state: " + state + "<br />";
}



function charUpdate(){
    target_string = Wordlist[word_index]["displaykana"];
    prev_kana = target_string[kana_index - 1];
    target_kana = target_string[kana_index];
    next_kana = target_string[kana_index + 1];
    displayDebugInfo();
}

function kanaEnd(skipKanaCount){
    kana_index += skipKanaCount;
    if(kana_index >= target_string.length){
        wordEnd();
        return;
    }
    playSound(type_sound_buffer);
    state = "q_init";
    displayDebugInfo();
}

function wordEnd(){
    playSound(correct_sound_buffer);
    kana_index = 0;
    state = "q_init"
    word_index++;
    document.querySelector("#input").innerHTML = "";
    displayDebugInfo();
}

function isVowel(kana) {
    if (kana == "あ" || kana == "い" || kana == "う" || kana == "え" || kana == "お") return true;
    return false;
}
function isNstart(kana) {
    if (kana == "な" || kana == "に" || kana == "ぬ" || kana == "ね" || kana == "の") return true;
    return false;
}

function playSound(buffer) {
    var source = audio_context.createBufferSource(); // creates a sound source
    source.buffer = buffer; // tell the source which sound to play
    source.connect(audio_context.destination); // connect the source to the context's destination (the speakers)
    source.start(0); // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
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

function setAutomaton(target_kana){
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
            if(next_kana == "ゃ"){
                automaton = automaton_KYA
                break;
            }
            if(next_kana == "ゅ"){
                automaton = automaton_KYU
                break;
            }
            if(next_kana == "ょ"){
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
            if(next_kana == "ゃ"){
                automaton = automaton_SHA
                break;
            }
            if(next_kana == "ゅ"){
                automaton = automaton_SHU
                break;
            }
            if(next_kana == "ょ"){
                automaton = automaton_SHO
                break;
            }
            if(next_kana == "ぇ"){
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
            automaton = automaton_HI;
            break;
        case "ふ":
            // 小さい「ぇ」
            if (next_kana == "ぇ") {    
                automaton = automaton_FE;
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
        case "ぇ":
            automaton = automaton_XE;
            break;
        case "っ":
            automaton = automaton_LTU;
            break;
        case "ー":
            automaton = automaton_LONG;
        default:
            break;
    }
    return automaton;
}