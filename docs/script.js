// ランダムレバー
var mylink = new Array(
    // ここに各ページのidを入れる
"#suzuki",
"#mitsui",
"#sano",
"#yamasaki"
);
function random_jump() {
    var i = Math.floor(Math.random() * mylink.length);
    location.href = mylink[i];
}

// トップに戻る
$(function(){
    var pagetop = $('#page-top');
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


// suzukibutton
$(function() {
    var pagetop = $('#suzuki_button');
    pagetop.click(function () {
        var targetOffset = $('#suzuki').offset().top; // 目的のエリアのオフセット位置を取得
        $('body, html').animate({ scrollTop: targetOffset }, 500); // 指定したエリアにスクロール
        return false; // デフォルトのリンク動作を無効にする
    });
});

// mitsuibutton
$(function() {
    var pagetop = $('#mitsui_button');
    pagetop.click(function () {
        var targetOffset = $('#mitsui').offset().top; // 目的のエリアのオフセット位置を取得
        $('body, html').animate({ scrollTop: targetOffset }, 500); // 指定したエリアにスクロール
        return false; // デフォルトのリンク動作を無効にする
    });
});

// sanobutton
$(function() {
    var pagetop = $('#sano_button');
    pagetop.click(function () {
        var targetOffset = $('#sano').offset().top; // 目的のエリアのオフセット位置を取得
        $('body, html').animate({ scrollTop: targetOffset }, 500); // 指定したエリアにスクロール
        return false; // デフォルトのリンク動作を無効にする
    });
});

// yamasakibutton
$(function() {
    var pagetop = $('#yamasaki_button');
    pagetop.click(function () {
        var targetOffset = $('#yamasaki').offset().top; // 目的のエリアのオフセット位置を取得
        $('body, html').animate({ scrollTop: targetOffset }, 500); // 指定したエリアにスクロール
        return false; // デフォルトのリンク動作を無効にする
    });
});




//   左右ボタン_suzuki
var pics_src_1 = ["images/suzuki_1.png", "images/suzuki_2.png", "images/suzuki_3.png"];
var num_1 = 0;

function go_forward_1() {
    if (num_1 === 2) {
        num_1 = 0;
    } else {
        num_1++;
    }
    document.getElementById("mypic_suzuki").src = pics_src_1[num_1];
}

function go_back_1() {
    if (num_1 === 0) {
        num_1 = 2;
    } else {
        num_1--;
    }
    document.getElementById("mypic_suzuki").src = pics_src_1[num_1];
}

//   左右ボタン_mitsui
var pics_src_2 = ["images/mitsui_1.png", "images/mitsui_2.png", "images/mitsui_3.png"];
var num_2 = 0;

function go_forward_2() {
    if (num_2 === 2) {
        num_2 = 0;
    } else {
        num_2++;
    }
    document.getElementById("mypic_mitsui").src = pics_src_2[num_2];
}

function go_back_2() {
    if (num_2 === 0) {
        num_2 = 2;
    } else {
        num_2--;
    }
    document.getElementById("mypic_mitsui").src = pics_src_2[num_2];
}

//   左右ボタン_sano
var pics_src_3 = ["images/sano_1.png", "images/sano_2.png", "images/sano_3.png"];
var num_3 = 0;

function go_forward_3() {
    if (num_3 === 2) {
        num_3 = 0;
    } else {
        num_3++;
    }
    document.getElementById("mypic_sano").src = pics_src_3[num_3];
}

function go_back_3() {
    if (num_3 === 0) {
        num_3 = 2;
    } else {
        num_3--;
    }
    document.getElementById("mypic_sano").src = pics_src_3[num_3];
}

//   左右ボタン_yamasaki
var pics_src_4 = ["images/yamasaki_1.png", "images/yamasaki_2.png", "images/yamasaki_3.png"];
var num_4 = 0;

function go_forward_4() {
    if (num_4 === 2) {
        num_4 = 0;
    } else {
        num_4++;
    }
    document.getElementById("mypic_yamasaki").src = pics_src_4[num_4];
}

function go_back_4() {
    if (num_4 === 0) {
        num_4 = 2;
    } else {
        num_4--;
    }
    document.getElementById("mypic_yamasaki").src = pics_src_4[num_4];
}