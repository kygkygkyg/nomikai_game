let uno_card_num = 108; // すべてのカードの枚数
let max_of_number = 10; // 各色のカードの最大数
let num_of_color = 4; // 色の種類数

var counter_total = 0;
var list_red = []; // 1 ~ 9は各数字が二枚ずつあり、0だけ一枚ずつある
var list_blu = [];
var list_yel = [];
var list_gre = [];


// とりあえず文字列を返却する
$("#btn1").on("click", function()  { // 参考文献: https://techacademy.jp/magazine/9650
    counter_total += 1;

    let random_num = Math.floor(Math.random() * max_of_number); // 0 ~ 9までの数字を決定
    let random_color = Math.floor(Math.random() * num_of_color); // 四色の色を適当に決定
    
    // >>>>>>> 色を文字列に変換 (デバッグ用なので、後から消す)
    var color_str = '';
    if (random_color==0) {
        let _tmp = list_red.filter(function(val) {return val == random_num}); // これの長さを図って2以上なら追加しないとみなす。

        list_red.push(random_num);
        color_str = '赤';

    } else if (random_color==1) {
        list_gre.push(random_num);
        color_str= '緑';

    } else if (random_color==2) {
        list_blu.push(random_num);
        color_str= '青';

    } else if (random_color==3) {
        list_yel.push(random_num);
        color_str= '黄';

    } else {
        color_str = `エラー ${random_color}`;
    }
    // <<<<<<<<<<


    var card_str = `${color_str}: ${random_num}, ${list_red[list_red.length-1]}, ${list_gre[list_gre.length-1]}, ${list_blu[list_blu.length-1]}, ${list_yel[list_yel.length-1]}`;
    
    if (counter_total > uno_card_num) {
        card_str = 'End game.Please reload.'
    }
    // jQueryを使って画面にメッセージを表示する
    $("#tBox").val(card_str);
  });