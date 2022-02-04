let uno_card_num = 108; // すべてのカードの枚数
let max_of_number = 10; // 各色のカードの最大数
let num_of_color = 4; // 色の種類数

var counter_total = 0;
var list_red = []; // 1 ~ 9は各数字が二枚ずつあり、0だけ一枚ずつある
var list_blu = [];
var list_yel = [];
var list_gre = [];

// 0があるかないか判断用の変数
var in_zero_red = false;
var in_zero_blu = false;
var in_zero_yal = false;
var in_zero_gre = false;

// とりあえず文字列を返却する
$("#btn1").on("click", function()  { // 参考文献: https://techacademy.jp/magazine/9650
    counter_total += 1;
    
    var random_num = 0;
    loop1: for(var _i = 0; _i < uno_card_num; _i++) { // 同じカードが出ないようにする。

        random_num = Math.floor(Math.random() * max_of_number); // 0 ~ 9までの数字を決定
        let random_color = Math.floor(Math.random() * num_of_color); // 四色の色を適当に決定
        
        // >>>>>>> 色を文字列に変換 (デバッグ用なので、後から消す)
        var color_str = '';
        console.log(list_red.length, list_blu.length, list_gre.length, list_yel.length)
        if (random_color==0) {
            let _tmp = list_red.filter(function(val) {return val == random_num; }); // これの長さを図って2以上なら追加しないとみなす。
            // console.log('赤: ' + random_num + ',  length: ' + _tmp.length);
            if (_tmp.length > 1) {continue loop1;}

            if (random_num==0 && _tmp.length==1) {continue loop1;} // すでに0が含まれているならループを最初に戻す
            list_red.push(random_num);
            color_str = '赤';
            break loop1;
        } else if (random_color==1) {
            let _tmp = list_gre.filter(function(val) {return val == random_num; }); // これの長さを図って2以上なら追加しないとみなす。
            // console.log('緑: ' + random_num + ',  length: ' + _tmp.length);
            if (_tmp.length > 1) {continue loop1;}

            if (random_num==0 && _tmp.length==1) {continue loop1;} // すでに0が含まれているならループを最初に戻す
            list_gre.push(random_num);
            color_str= '緑';
            break loop1;
        } else if (random_color==2) {
            let _tmp = list_blu.filter(function(val) {return val == random_num; }); // これの長さを図って2以上なら追加しないとみなす。
            // console.log('青: ' + random_num + ',  length: ' + _tmp.length);
            if (_tmp.length > 1) {continue loop1;}

            if (random_num==0 && _tmp.length==1) {continue loop1;} // すでに0が含まれているならループを最初に戻す
            list_blu.push(random_num);
            color_str= '青';
            break loop1;
        } else if (random_color==3) {
            let _tmp = list_yel.filter(function(val) {return val == random_num; }); // これの長さを図って2以上なら追加しないとみなす。
            // console.log('黄: ' + random_num + ',  length: ' + _tmp.length);
            if (_tmp.length > 1) {continue loop1;}

            if (random_num==0 && _tmp.length==1) {continue loop1;} // すでに0が含まれているならループを最初に戻す
            list_yel.push(random_num);
            color_str= '黄';
            break loop1;
        } else {
            color_str = `エラー ${random_color}`;
        }
    }
    // if (_i==uno_card_num) {console.log('HAAAAAAAAAAAAAAAAAA'); }
    if (color_str=='') {color_str = 'number card is ended.';}
    // <<<<<<<<<<


    var card_str = `${color_str}: ${random_num}`;
    
    if (counter_total > uno_card_num) {
        card_str = 'End game.Please reload.'
    }
    // jQueryを使って画面にメッセージを表示する
    console.log(card_str, ',  ', `TOTAL->   red: ${list_red.length}, blue: ${list_blu.length}, green: ${list_gre.length}, yallow: ${list_yel.length}`);
    $("#tBox").val(card_str);
  });