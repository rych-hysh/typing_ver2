import { DEBUG_MODE } from "../ENV/develop";
import { mockWordlist } from "../data/mock";
import { BufferLoader, getRankAndMessage, setAutomaton } from "./util/util"

import { Chart } from 'chart.js/auto'

window.addEventListener("load", init);
window.addEventListener("keydown", keydown);
var TitleScene: HTMLElement | null;
var PlayScene: HTMLElement | null;
var ResultScene: HTMLElement | null;
var ResultDisplay: HTMLElement | null;
var inputDisplay: HTMLElement | null;

var resultChart: Chart;

enum GameState {
    "loading",
    "loaded",
    "playing",
    "result"
}

interface WordList {
    display: string,
    displaykana: string
}

interface RankAndMesssage {
    Rank: string,
    Message: string
}

interface inputs {
    prev_char: string,
    input: string,
    next_kana: string
}

interface inputLog {
    input: string,
    expected: string | undefined, //TODO: 未実装。実装の可否も含めて検討する
    timeTillInput: number,
    kpm: number,
    hit: boolean,
    wordEnd: boolean
}
var inputHistory: inputLog[] = [];
var History: inputLog[][] = [];
var game_state: GameState = GameState.loading;

var play_start_time: number;
var play_finish_time: number;
var prev_input_time: number;
var correct_key_count: number = 0;
var wrong_key_count: number = 0;
var dupulicate_wrong_guard: boolean = false;



var Wordlist: WordList[] = [];
var word_index: number = 0;
var question_num: number = 10;
var target_string: string;
var prev_kana: string;
var target_kana: string;
var next_kana: string;

var prev_char: string;

var state = "q_init";

var kana_index: number = 0;

var buffer_loader: BufferLoader;

let type_sound_buffer: any;
let miss_sound_buffer: any;
let correct_sound_buffer: any;

var audio_context: AudioContext;
var sound_volume: number = 1;

var result_word_index: number = 0;

const WordListRequest = new Request('data/wordlist.json');

function setState(new_state: GameState) {
    state = "q_init";
    word_index = 0;
    resetInput();
    switch (new_state) {
        case GameState.loaded:
            PlayScene?.classList.add("hide");
            TitleScene?.classList.remove("hide");
            ResultScene?.classList.add("hide");
            break;
        case GameState.playing:
            startGame();
            break;
        case GameState.result:
            showResult();
            break;
        default:
            new_state = GameState.loaded;
            setState(new_state);
    }
    game_state = new_state;
}

function startGame() {
    fetchWords(question_num).then(() => {
        kanaUpdate();
        displayTarget();
        PlayScene?.classList.remove("hide");
        TitleScene?.classList.add("hide");
        ResultScene?.classList.add("hide");
    })
    initGame();
}

function showResult() {
    play_finish_time = Date.now();
    calcScore(play_finish_time - play_start_time);
    PlayScene?.classList.add("hide");
    TitleScene?.classList.add("hide");
    ResultScene?.classList.remove("hide");
}
function init() {
    TitleScene = document.querySelector("#title_scene");
    PlayScene = document.querySelector("#playing_scene");
    ResultScene = document.querySelector("#result_scene");
    ResultDisplay = document.querySelector("#result_display_block");
    inputDisplay = document.querySelector("#input");

    //効果音の読み込み    
    try {
        audio_context = new AudioContext();
    }
    catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
    buffer_loader = new BufferLoader(audio_context, [
        '/resources/snd/type.mp3',
        '/resources/snd/miss.mp3',
        '/resources/snd/correct.mp3'
    ])

    buffer_loader.load().then(() => {
        type_sound_buffer = buffer_loader.type_sound_buffer;
        correct_sound_buffer = buffer_loader.correct_sound_buffer;
        miss_sound_buffer = buffer_loader.miss_sound_buffer;
    });

    // const PostHeader = new Headers();
    // PostHeader.append('Content-Type', 'text/plain')
    // const PostInit = {
    //     method: "POST",
    //     headers: PostHeader,
    //     body: "wan"
    // }
    document.querySelector("#play_button")?.addEventListener("click", () => setState(GameState.playing));
    document.querySelector("#back_button")?.addEventListener("click", () => setState(GameState.loaded));
    document.querySelector("#mute_button")?.addEventListener("click", () => {
        sound_volume = 0;
        document.querySelector('#mute_button')?.classList.add('volume_active');
        document.querySelector('#unmute_button')?.classList.remove('volume_active');
    });
    document.querySelector("#unmute_button")?.addEventListener("click", () => {
        sound_volume = 1;
        document.querySelector('#unmute_button')?.classList.add('volume_active');
        document.querySelector('#mute_button')?.classList.remove('volume_active');
    });
    document.querySelector("#detail_button")?.addEventListener("click", () => {
        var detailScoreClassList = document.querySelector("#detail_score")?.classList;
        if(detailScoreClassList?.contains("hide")){
            detailScoreClassList.remove("hide");
            ResultDisplay?.classList.add("hide");
        }else{
            detailScoreClassList?.add("hide");
            ResultDisplay?.classList.remove("hide");
        }
    })

    document.querySelector("#to_prev_word_chart")?.addEventListener("click", () => {
        if(result_word_index != 0){
            result_word_index--; 
            showDetailedResult();  
        } 
    })    
    document.querySelector("#to_next_word_chart")?.addEventListener("click", () => {
        if(result_word_index != question_num - 1) {
            result_word_index++; 
            showDetailedResult();
        }
    })

    document.querySelector('#credit')!.innerHTML = "©2023-" + new Date().getFullYear() + ", Hayashi Ryoichi";
    setState(GameState.loaded);
}

async function fetchWords(_question_num: number) {
    // if (DEBUG_MODE) {
    //     Wordlist = mockWordlist;
    //     target_string = Wordlist[word_index]["displaykana"];
    //     displayTarget(word_index);
    //     displayDebugInfo();
    //     return;
    // }
    const GetHeader = new Headers();
    GetHeader.append('Content-Type', 'application/json')
    const GetInit = {
        method: "GET",
        headers: GetHeader
    }
    await fetch(WordListRequest, GetInit).then(response => response.json()).then(data => {
        var allWordlist = data;
        var length = allWordlist.length;
        var indexList: number[] = [];
        Wordlist = [];
        if (length < question_num) return;
        while (indexList.length < question_num) {
            var index = Math.floor(Math.random() * length);
            if (indexList.includes(index)) {
                continue;
            }
            indexList.push(index);
            Wordlist.push(allWordlist[index]);
        }
        target_string = Wordlist[word_index]["displaykana"];
        displayTarget(word_index);
        displayDebugInfo();
        return;
    });
}

function keydown(e: KeyboardEvent) {
    if (e.key == "Escape") {
        setState(GameState.loaded);
        return;
    }
    switch (game_state) {
        case GameState.loaded:
            if (e.key == "Enter") {
                setState(GameState.playing);
                return;
            } 
            break;
        case GameState.playing:
            //大文字小文字を区別しない。英語入力時に困ったら修正する。
            typed(e.key.toLowerCase());
            break;
        case GameState.result:
            if (e.key == "Escape") {
                setState(GameState.loaded);
                return;
            }
        default:
            break;
    }

}

/*

target_string   仮名表記の課題文字列
prev_kana       仮名表記のひとつ前の課題文字
target_kana     仮名表記の課題文字
next_kana       仮名表記の次の課題文字
*/
export function typed(input: string, initState: boolean = false) {
    document.querySelectorAll(".wrong_char").forEach(w => w.remove());


    kanaUpdate();
    // const automaton: (t: string, n:string) =>  = setAutomaton(target_kana, next_kana);
    const automaton: any = setAutomaton(target_kana, next_kana);
    if(initState)state="q_init";
    let res = automaton(input, state, prev_char, next_kana);
    let latest = inputDisplay!.querySelector(".latest")
    if (latest != null) latest.classList.remove("latest")
    if (res[0] == "skip") {
        const lastIndex = inputDisplay!.innerHTML.lastIndexOf("<span class=\"correct_char");
        if (lastIndex != -1) inputDisplay!.innerHTML = inputDisplay!.innerHTML.slice(0, lastIndex);
        inputDisplay!.innerHTML += "<span class='correct_char latest'>" + input + "</span>";
        return;
    }
    var time_delta = performance.now() - prev_input_time;
    prev_input_time = performance.now();
    inputHistory.push({input: input, expected: latest?.innerHTML, timeTillInput: time_delta, kpm: 60*1000/time_delta, hit: res[0] == "hit", wordEnd: false})
    state = res[2]
    if (res[0] == "hit") {
        keyHit(input, res[1])
    } else {
        keyMiss(input)
    };

    if (DEBUG_MODE) console.log(res)
    kanaUpdate();
    displayDebugInfo();
}

function keyHit(input: string, skipKanaCount: number){
    correct_key_count++;
    dupulicate_wrong_guard = false;
    prev_char = input;
    inputDisplay!.innerHTML += "<span class='correct_char latest'>" + input + "</span>"
    if (kana_index >= target_string.length - 1 && state == "q_exit") {
        wordEnd();
    } else if (state == "q_exit") {
        kanaEnd(skipKanaCount);
    } else {
        buffer_loader.playSound(type_sound_buffer, audio_context, sound_volume);
    }
}

function keyMiss(input: string){
    if (!dupulicate_wrong_guard) wrong_key_count++;
    dupulicate_wrong_guard = true;

    buffer_loader.playSound(miss_sound_buffer, audio_context, sound_volume);
    
    const lastIndex = inputDisplay!.innerHTML.lastIndexOf("<span class=\"wrong_char");
    if (lastIndex != -1) inputDisplay!.innerHTML = inputDisplay!.innerHTML.slice(0, lastIndex);
    inputDisplay!.innerHTML += "<span class='wrong_char latest'>" + input + "</span>";
}

function displayTarget(index = 0) {
    document.querySelector("#display")!.innerHTML = Wordlist[index]["display"];
    document.querySelector("#displaykana")!.innerHTML = Wordlist[index]["displaykana"];
}

function displayDebugInfo() {
    if (!DEBUG_MODE) return;
    let d = document.querySelector("#debugInfo");
    d!.innerHTML = "";
    d!.innerHTML += "prevChar: " + prev_kana + "<br />";
    d!.innerHTML += "tryingChar: " + target_kana + "<br />";
    d!.innerHTML += "nextChar: " + next_kana + "<br />";
    d!.innerHTML += "kana_index: " + kana_index + "<br />";
    d!.innerHTML += "word_index: " + word_index + "<br />";
    d!.innerHTML += "state: " + state + "<br />";
}

function kanaUpdate() {
    target_string = Wordlist[word_index]["displaykana"];
    prev_kana = target_string[kana_index - 1];
    target_kana = target_string[kana_index];
    next_kana = target_string[kana_index + 1];
    displayDebugInfo();
}

export function kanaEnd(skipKanaCount: number) {
    buffer_loader.playSound(type_sound_buffer, audio_context, sound_volume);
    kana_index += skipKanaCount;
    if (kana_index >= target_string.length) {
        wordEnd();
        return;
    }
    state = "q_init";

    displayDebugInfo();
}

function wordEnd() {
    buffer_loader.playSound(correct_sound_buffer, audio_context,  sound_volume);
    History.push(inputHistory);
    inputHistory = [];
    //inputHistory[inputHistory.length - 1].wordEnd = true;
    resetInput();
    word_index++;
    if (word_index == Wordlist.length) {
        setState(GameState.result);
        return;
    }
    displayTarget(word_index);
    kanaUpdate();
    displayDebugInfo();
    prev_input_time = performance.now();
}

function resetInput() {
    kana_index = 0;
    state = "q_init"
    document.querySelector("#input")!.innerHTML = "";
}

function calcScore(time: number) {
    var kana_count = 0;
    Wordlist.forEach(word => {
        kana_count += word["displaykana"].length;
    })
    let kpm = 60 * 1000 * (kana_count * 2) / time ;
    let correctness = 100 * correct_key_count / (correct_key_count + wrong_key_count);
    let score = kpm * correctness / 100;
    let res: RankAndMesssage = getRankAndMessage(score);
    document.querySelector("#rank")!.innerHTML = res.Rank;
    document.querySelector("#message")!.innerHTML = res.Message;
    document.querySelector("#tpk")!.innerHTML = (time / kana_count).toFixed(3);
    document.querySelector("#kpm")!.innerHTML = kpm.toFixed(3);
    document.querySelector("#kps")!.innerHTML = (kpm/60).toFixed(3);
    document.querySelector("#crt")!.innerHTML = correctness.toFixed(3);
    showDetailedResult();
}

function showDetailedResult(){
    if(DEBUG_MODE)console.log(History)
    document.querySelector("#question_word")!.innerHTML = Wordlist[result_word_index]["display"];
    let Canv : HTMLCanvasElement = document.querySelector<HTMLCanvasElement>("#score_chart")!;
    if(resultChart != undefined)resultChart.destroy();
    resultChart = new Chart(Canv, 
        {
            type: 'line', 
            data: { 
                labels: History[result_word_index].map(row => row.input), 
                datasets: [{
                    label: 'KPM',
                    data: History[result_word_index].map(row => row.kpm)
                }]
            },
            options: {
                scales: {
                    y: {
                        suggestedMax: 2000                       
                    }
                },
                plugins: {
                    legend: {
                        position: 'chartArea'
                    }
                }
            }
        }
    )
}

function initGame() {
    play_start_time = Date.now();
    play_finish_time;
    correct_key_count = 0;
    wrong_key_count = 0;
    dupulicate_wrong_guard = false;

    target_string = "";

    Wordlist = [];
    word_index = 0;

    prev_kana = "";
    target_kana = "";
    next_kana = "";

    prev_char = "";

    state = "q_init";

    kana_index = 0;
    inputHistory = [];
    History = [];
    result_word_index = 0;
    prev_input_time = performance.now();
}