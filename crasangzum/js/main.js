//JQuery fullpage
$(document).ready(function(){
    // 모바일메뉴
    $('.mb-btn').click(function(){
        $('.mb-btn').toggleClass('on')
        $('.mb-menu').toggleClass('on')
        $('.window').fadeToggle();
    })
    $(window).resize(function(){
        let temp = $(window).width();
        if(temp > 640){
            $('.mb-btn').removeClass('on')
            $('.mb-menu').removeClass('on')
            $('.window').fadeOut()
        }
    })

    // 풀페이지
    const section = $('.wrap > section')
    const footer = $('.footer')

    let sectionSpeed = 300;
    let sectionPos = [];
    let sectionIndex = 0;

    let scrolling  = false;

    let wheeling = true;
    const sectionMenu = $('.section-menu')

    function wheelCheckFn(){
        let windowWidth = window.innerWidth;
        if(windowWidth <=1000){
            wheeling = false;
            sectionMenu.hide();
        }else {
            wheeling = true;
            sectionMenu.show();
        }
    }
    wheelCheckFn();
    function resetSection(){
        sectionPos=[];
        $.each(section,function(index, item) {
            let tempY = $(this).offset().top;
            // console.log(index + ":" + tempY)
            tempY = Math.ceil(tempY);
            sectionPos[index] = tempY;
            console.log(sectionPos)

        })
        sectionPos[sectionPos.length] =Math.ceil(footer.offset().top)
    }
    resetSection();
    let sectionTotal = sectionPos.length;
    console.log("sectionTotal : " + sectionTotal)

    //resizeTimer
    let resizeTimer;
    $(window).bind('resize',function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resizeFunction,500)
    })
    function resizeFunction (){
        wheelCheckFn();
        resetSection();
        if(wheeling){
            gsap.to($('html'),sectionSpeed/1000,{
                scrollTop:sectionPos[sectionIndex],
                onComplete:function(){
                    scrolling = false; 
                }
            })
        }
    }
    // $(window).resize(function(){
    //     wheelCheckFn();
    //     resetSection();
    //     if(wheeling){
    //         gsap.to($('html'),sectionSpeed/1000,{
    //             scrollTop:sectionPos[sectionIndex],
    //             onComplete:function(){
    //                 scrolling = false; 
    //             }
    //         })
    //     }
    // })

    $(window).bind('mousewheel DOMMouseScroll',function(event){
        let distance = event.originalEvent.wheelDelta;
        if (distance == null) {
            distance = event.originalEvent.detail * -1;
        }
        console.log(distance)
        if (wheeling != true) {
            return;
        }
        if (scrolling) {
            return;
        }
        scrolling=true;
        if(distance < 0){
            sectionIndex++;
            if(sectionIndex >=sectionTotal){
                sectionIndex = sectionTotal-1;
            }
            console.log(sectionIndex)
        }else {
            sectionIndex--;
            if(sectionIndex <=0){
                sectionIndex=0;
            }
            console.log(sectionIndex)
        }
        gsap.to($('html'), sectionSpeed / 1000, {
            scrollTo: sectionPos[sectionIndex],
            onComplete: function(){
                scrolling = false;
                sectionColor();
            }
        })
    })
    const sectionLink = $('.section-menu a')
    console.log(sectionLink)
    $.each(sectionLink,function(index, item){
        $(this).click(function(e){
            e.preventDefault();
            moveSection(index)
            sectionColor();
        })
    })
    function moveSection(_index){
        sectionIndex = _index;
        gsap.to($('html'), sectionSpeed / 1000, {
            scrollTo: sectionPos[sectionIndex],
            onComplete: function(){
                scrolling = false;
            }
        })
    }
    function sectionColor() {
        // 포커스 표현
        sectionLink.removeClass('section-menu-active')
        sectionLink.eq(sectionIndex).addClass
        ('section-menu-active')
        //색상표현
        sectionLink.removeClass('section-menu-green')
        sectionLink.eq(sectionIndex).addClass('section-menu-green')
    }
    sectionColor();
})

$(function(){
    $('html,body').animate({scrollTop : 0})
})
// vanilla Javascript
window.onload = function(){
    //store
    let swStore = new Swiper('.sw-store', {
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.sw-pg',
            clickable: true,
        },
    })
    let swMini = new Swiper('.swmini', {
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
        delay: 2000,
    })
};
