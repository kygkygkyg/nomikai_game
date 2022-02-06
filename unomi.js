let uno_card_num = 300; // すべてのカードの枚数
let max_of_number = 16; // 各色のカードの最大数 (10, 11, 12, 13は役カード)
let num_of_color = 4; // 色の種類数

/*
    10: draw two
    11: draw four
    12: skip
    13: reverse
    14: wild
    15: wild four
*/

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

// 役カードの枚数
wild_max = 4;
wild_draw_four_max = 4;
wild_num = 0;
wild_draw_four_num = 0;


// とりあえず文字列を返却する
$("#btn1").on("click", function() {
    var remaining_of_1_doc = document.getElementById("remaining-num1");
    var remaining_of_1 = Number(remaining_of_1_doc.innerText);

    if (remaining_of_1==0) {remaining_of_1_doc.textContent = `${remaining_of_1}`;}
    else {
        what_card();
        remaining_of_1 -= 1;
        remaining_of_1_doc.textContent = `${remaining_of_1}`;
    }
});
$("#btn2").on("click", function() {
    var remaining_of_2_doc = document.getElementById("remaining-num2");
    var remaining_of_2 = Number(remaining_of_2_doc.innerText);
    if (remaining_of_2==0) {remaining_of_2_doc.textContent = `${remaining_of_2}`;}
    else {
        what_card();
        remaining_of_2 -= 1;
        remaining_of_2_doc.textContent = `${remaining_of_2}`;
    }
});
$("#btn3").on("click", function() {
    var remaining_of_3_doc = document.getElementById("remaining-num3");
    var remaining_of_3 = Number(remaining_of_3_doc.innerText);
    if (remaining_of_3==0) {remaining_of_3_doc.textContent = `${remaining_of_3}`;}
    else {
        what_card();
        remaining_of_3 -= 1;
        remaining_of_3_doc.textContent = `${remaining_of_3}`;
    }
});
$("#btn4").on("click", function() {
    var remaining_of_4_doc = document.getElementById("remaining-num4");
    var remaining_of_4 = Number(remaining_of_4_doc.innerText);
    if (remaining_of_4==0) {remaining_of_4_doc.textContent = `${remaining_of_4}`;}
    else {
        what_card();
        remaining_of_4 -= 1;
        remaining_of_4_doc.textContent = `${remaining_of_4}`;
    }
});





function what_card() {
    counter_total += 1;

    var random_num = 0;
    var color_str = '';

    loop1: for(var _i = 0; _i < uno_card_num; _i++) { // 同じカードが出ないようにする。

        random_num = Math.floor(Math.random() * max_of_number); // 0 ~ 9までの数字を決定
        let random_color = Math.floor(Math.random() * num_of_color); // 四色の色を適当に決定

        if(random_num==14 || random_num==15) {
            if(random_num==14 && wild_num < wild_max){wild_num += 1; color_str="wild"; break loop1;}
            if(random_num==15 && wild_draw_four_num < wild_draw_four_max){wild_draw_four_num += 1; color_str="wild"; break loop1;}
            continue loop1;
        }

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
    if (color_str=='') {color_str = 'End game.Please reload.';}
    // <<<<<<<<<<


    if(random_num==10) {
        random_num = 'draw two';
    }else if(random_num==11) {
        random_num = 'draw four';
    }else if(random_num==12) {
        random_num = 'skip';
    }else if(random_num==13) {
        random_num = 'reverse';
    }else if(random_num==14) {
        random_num = 'wild';
    }else if(random_num==15) {
        random_num = 'wild draw four';
    }
    var card_str = `${color_str}: ${random_num}`;

    // if (counter_total > uno_card_num) {
    //     card_str = 'End game.Please reload.'
    // }
    // jQueryを使って画面にメッセージを表示する
    console.log(card_str, ',  ', `TOTAL->   red: ${list_red.length}, blue: ${list_blu.length}, green: ${list_gre.length}, yallow: ${list_yel.length}`);
    $("#tBox").val(card_str);
}