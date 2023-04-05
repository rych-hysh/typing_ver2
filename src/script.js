window.addEventListener("load", init);
window.addEventListener("keydown", keydown);

var game_state = "loading";

var play_start_time;
var play_finish_time;
var correct_key_count = 0;
var wrong_key_count = 0;
var dupulicate_wrong_gurad = false;

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

const WordListRequest = new Request('data/testdata.json');
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
            kanaUpdate();
            displayTarget();
            PlayScene.classList.remove("hide");
            TitleScene.classList.add("hide");
            ResultScene.classList.add("hide");
            play_start_time = Date.now();
            break;
        case "result":
            play_finish_time = Date.now();
            calcScore(play_finish_time - play_start_time);
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
    if(e.key == "Escape"){
        setState("loaded");
        return;
    }
    if(game_state == "loaded"){
        if(e.key == "Enter"){
            setState("playing");
            return;
        }
    }
    if(game_state == "playing"){
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
    document.querySelectorAll(".wrong_char").forEach(w => w.remove());


    kanaUpdate();
    const automaton = setAutomaton(target_kana);
    let res = automaton(input);
    let latest = inputDisplay.querySelector(".latest")
    if (latest != null) latest.classList.remove("latest")
    if (res[0] == "skip") return;
    if (res[0] == "hit") {
        correct_key_count++;
        dupulicate_wrong_gurad = false;
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
        if(!dupulicate_wrong_gurad)wrong_key_count++;
        dupulicate_wrong_gurad = true;
        playSound(miss_sound_buffer);
        const lastIndex = inputDisplay.innerHTML.lastIndexOf("<span class=\"wrong_char");
        if (lastIndex != -1)  inputDisplay.innerHTML = inputDisplay.innerHTML.slice(0, lastIndex);
        inputDisplay.innerHTML += "<span class='wrong_char latest'>" + input + "</span>";

    };
    kanaUpdate();
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

function kanaUpdate() {
    target_string = Wordlist[word_index]["displaykana"];
    prev_kana = target_string[kana_index - 1];
    target_kana = target_string[kana_index];
    next_kana = target_string[kana_index + 1];
    displayDebugInfo();
}

function kanaEnd(skipKanaCount) {
    playSound(type_sound_buffer);
    kana_index += skipKanaCount;
    if(kana_index >= target_string.length){
        wordEnd();
        return;
    }
    playSound(type_sound_buffer);
    state = "q_init";

    displayDebugInfo();
}

function wordEnd() {
    playSound(correct_sound_buffer);
    resetInput();
    word_index++;
    if(word_index == Wordlist.length){
        setState("result");
        return;
    }
    displayTarget(word_index);
    kanaUpdate();
    displayDebugInfo();
}

function resetInput(){
    kana_index = 0;
    state = "q_init"
    document.querySelector("#input").innerHTML = "";
}

function calcScore(time){
    console.log(time);
    var kana_count = 0;
    Wordlist.forEach(word => {
        console.log(word["displaykana"].length);
        kana_count += word["displaykana"].length;
    })
    document.querySelector("#tpk").innerHTML = (time/kana_count).toFixed(3);
    document.querySelector("#kpm").innerHTML = (60*1000/(time/kana_count)).toFixed(3);
    document.querySelector("#crt").innerHTML = (100*correct_key_count/(correct_key_count + wrong_key_count)).toFixed(3);
    console.log(time/kana_count)
    console.log(correct_key_count);
    console.log(wrong_key_count);
    console.log(100*correct_key_count/(correct_key_count + wrong_key_count))
}