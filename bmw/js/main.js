$(document).ready(function() {
    $('#fullpage').fullpage({
        //헤더메뉴 눌렀을 때 해당 페이지로 이동하기
        // anchors: ['page1','page2', 'page3', 'page4', 'page5'],
       //options here
       autoScrolling: true, 
       scrollHorizontally: true,
       sectionsColor: ['#000819','#000819','#fff','#000819','#1e222a'], 
        //반응형--풀페이지 없애기
       responsiveWidth: 1680, 
       afterLoad: function (anchor, index) {
            $('.rotate-logo').css({transform:'rotate('+ (index-1) * 90 +'deg)'});
            console.log(index)
        },

    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);
    

});

const header = document.querySelector('header'),
      nav = document.querySelector('nav')
// nav에 마우스 올리면 header 높이가 300, 마우스 내리면 50으로 변경

nav.addEventListener('mouseover',function(){
    header.style.height = '320px'
})
nav.addEventListener('mouseout',function(){
    header.style.height = '100px'
})

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	}),
    $('.tab-content a').mouseenter(function(){
        $('.tab-conent a').removeClass('gga')
        $(this).addClass('gga')
        let href_ref=$(this).attr('href');
        console.log(href_ref)
        $('.car-desc').hide();        
         $(href_ref).show();
    })
    
    $('.tab-content a').click(function(e){
        e.preventDefault();
    })
    // let tabCar =$('.tab_car').bxSlider()
    // $('.tabs').tabs({
    //     activate: function(){
    //         tabCar.reloadSlider()
    //     }
    // })

})
$(function(){
    const no = $('.no')
    no.hide();
})
// const desktop_logo = $('.rotate-logo')
// $ (function () {
//     var rotate = function ( desktop_logo , angle ) {  
//      desktop_logo . css ({
//      "transform" : "rotate(" + angle + "deg)"  
//      });
//     }
//    $ ( window ). scroll ( function (){
//      rotate ( $ ( ".rotate-logo" ), $ ( window ). scrollTop ()* 0.2 );
//     })
//    });
