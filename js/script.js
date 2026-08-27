$(function(){
// 메뉴 슬라이드
    $('.menu>li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
        $('#bg').stop().slideDown(500);
    });
    $('.menu>li').mouseout(function(){
        $('.submenu').stop().slideUp(500);
        $('#bg').stop().slideUp(500);
    });



    // 이미지 슬라이드
    setInterval(function(){
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop:-350});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop:-700});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop:0});
    });

    // 탭교차

    $('#tab>li').click(function(){
        // 변수 선언
        var gong = $(this).index(); //li중 선택한 순번

        $('#recent>div').eq(gong).show().siblings('div').hide();
        // 선택한 순번의 div박스를 보여주고, 나머지는 숨긴다.

        $(this).addClass('active').siblings('li').removeClass('active');


    });


});