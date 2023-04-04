window.addEventListener("load", init);
window.addEventListener("keydown", keydown);

var game_state = "loading";


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

function setState(new_state){
    state = "q_init";
    word_index = 0;
    resetInput();
    const TitleScene = document.querySelector("#title_scene");
    const PlayScene = document.querySelector("#playing_scene");
    const ResultScene = document.querySelector("#result_scene");
    switch (new_state) {
        case "loaded":
            PlayScene.classList.add("hide");
            TitleScene.classList.remove("hide");
            ResultScene.classList.add("hide");
            break;
        case "playing":
            charUpdate();
            displayTarget();
            PlayScene.classList.remove("hide");
            TitleScene.classList.add("hide");
            ResultScene.classList.add("hide");
            break;
        case "result":
            PlayScene.classList.add("hide");
            TitleScene.classList.add("hide");
            ResultScene.classList.remove("hide");
            break;
        default:
            new_state = "loaded";
            setState(new_state);
    }
    game_state = new_state;
}

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

    // const PostHeader = new Headers();
    // PostHeader.append('Content-Type', 'text/plain')
    // const PostInit = {
    //     method: "POST",
    //     headers: PostHeader,
    //     body: "wan"
    // }
    document.querySelector("#play_button").addEventListener("click", () => setState("playing"));
    document.querySelector("#back_button").addEventListener("click", () => setState("loaded"));
    setState("loaded");
    fetchWords()
}

function fetchWords(){
    const GetHeader = new Headers();
    GetHeader.append('Content-Type', 'application/json')
    const GetInit = {
        method: "GET",
        headers: GetHeader
    }
    fetch(WordListRequest, GetInit).then(response => response.json()).then(data => {
        Wordlist = data;
        target_string = Wordlist[word_index]["displaykana"];
        displayTarget(word_index);
        displayDebugInfo();
    });
}

function keydown(e) {
    if(game_state == "playing"){
        if(e.key == "Escape"){
            setState("loaded");
        }
        //大文字小文字を区別しない。英語入力時に困ったら修正する。
        typed(e.key.toLowerCase());
    }
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
        inputDisplay.innerHTML += "<span class='wrong_char latest'>" + input + "</span>";

    };

    // target_string = Wordlist[word_index]["displaykana"];
    // prev_kana = target_string[kana_index - 1];
    // target_kana = target_string[kana_index];
    // next_kana = target_string[kana_index + 1];
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
    resetInput();
    word_index++;
    if(word_index == Wordlist.length){
        setState("result");
        return;
    }
    displayTarget(word_index);
    charUpdate();
    displayDebugInfo();
}

function resetInput(){
    kana_index = 0;
    state = "q_init"
    document.querySelector("#input").innerHTML = "";
}

function isVowel(kana) {
    if (kana == "あ" || kana == "い" || kana == "う" || kana == "え" || kana == "お") return true;
    return false;
}
function isNstart(kana) {
    if (kana == "な" || kana == "に" || kana == "ぬ" || kana == "ね" || kana == "の") return true;
    return false;
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