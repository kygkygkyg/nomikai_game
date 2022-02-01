// とりあえず文字列を返却する
$("#btn1").on("click", function()  {
    let message = 'Joker' // 参考文献: https://techacademy.jp/magazine/9650
    // jQueryを使って画面にメッセージを表示する
    $("#tBox").val(message);
  });