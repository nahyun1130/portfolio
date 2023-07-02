$(function(){
    // 모바일메뉴
    $('.menubtn').click(function(){
        $('nav').slideToggle(500)
        $('.menubtn').toggleClass('on')
    })
    $('li.depth1').click(function(){
        $(this).stop().find('ul.depth2').slideToggle();
        $(this).stop().siblings().find('.depth2').slideUp();
    })

    // 배너슬라이드
    $('.slidebanner:gt(0)').hide()
    setInterval(function(){
        $('.slidebanner:first').fadeOut(1500).next().fadeIn(1500)
        $('.slidebanner:first').appendTo('.slide')
    }, 3000)

    //탭푸터
    $('.footergnb li').click(function(){
        $('.footergnb li').removeClass('on')
        $(this).addClass('on')

        const idx = $(this).index()
        $('.tabitem > *').hide().removeClass('on')
        $('.tabitem > *').eq(idx).show().addClass('on')
    })
    
})