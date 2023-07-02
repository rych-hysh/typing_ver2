# 変数とプログラム

- `TitleScene`
- `PlayScene`
- `ResultScene`

	それぞれタイトル画面、プレイ画面、結果表示画面に対応する`div`です。各クラスに`hide`クラスを付与・削除することで画面遷移を行います。

- `inputDisplay`

	プレイ画面で表示する、ユーザーの入力文字を表示する`div`です。この内側に一文字ごとに`span`を作成して入力文字を表示します。

- `resultChart`

	結果表示用のグラフオブジェクト。chart.jsを利用しています。

- `GameState`
ゲームの状態を示すEnumです。
	1. `loading`

		ページ読み込み後の初期状態です。
	2. `loaded`

		ページ読み込み後主にオーディオの読み込み後の状態です。出題文字列はまだロードしません。
	3. `playing`

		プレイを開始した状態です。
	4. `result`

		全ての出題を終え結果表示する状態です。

- `WordList`

	- `display`

		出題する文字列（漢字表記）です。プログラムには関係しません。
	- `displaykana`

		出題する文字列（ひらがな表記）です。このひらがなを取得して入力の正誤判定を行います。

- `RankAndMessage`

	結果として表示するランクと、そのランクに付随するコメントを保持するインターフェース

- `inputLog`

	詳細な結果の分析に用いる入力のログ用のインターフェースです。（１入力単位）

	- `input` 

		入力したキーです。
	- `expected`

		誤入力の場合に本来入力すべきキーを保持する目的の変数です。現状実装できていません。

	- `timeTillInput`

		前の入力からの経過時間です。

	- `hit : boolean`

		入力の正誤です。

- `inputHistory`

	1文字単位だった`inputLog`の配列です。

- `game_state`

	現在の状態です。

- `play_start_time`

	ゲームを始めたミリ秒です。

- `play_finish_time`

	ゲームを終えたミリ秒です。`play_start_time`との差でゲーム全体のプレイ時間（ミリ秒単位）がわかります。

- `prev_input_time`

	前の入力を行った時間（ミリ秒）です。新しく入力を行ったときにこの時間との差で入力までにかかった時間を計算します。

- `correct_key_count`

	正しい入力数（キー）です。

- `wrong_key_count`

	誤った入力数（キー）です。`correct_key_count`と併せて正答率を計算します。

- `dupulicate_wrong_guard`

	誤入力に気が付かず入力を続けた場合にそのすべてが誤入力扱いされないよう一度誤入力したらフラグをたてます。

- `Wordlist`

	出題する文字列のリストです。ゲーム開始後にバックエンドから`fetch`します

- `word_index`

	現在何番目の文字列に挑戦中かを示すWordListのインデックス

- `question_num`

	出題数

- `target_string`

	現在出題されている文字列です。

- `prev_kana`

	入力中のかなの一文字前のかなです。

- `target_kana`

	入力中のかなです。

- `next_kana`

	入力中のかなの一文字後のかなです。

- `prev_char`

	ひとつ前の入力で入力したキーです。

- `kana_index`

	出題中の文字列の何文字目を入力中か