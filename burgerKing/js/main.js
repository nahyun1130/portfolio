//====header====
const header = document.querySelector('header'),
      $gnb = document.querySelector('.gnb')
      gnbMenu = document.querySelectorAll('.gnb > li'),
      subMenu = document.querySelectorAll('.sub')
// console.log(header, gnbMenu, subMenu)

// let B = A.offsetHeight : 보더까지의 높이
// let B = A.clientHeight : 패딩까지의 높이
let headerHeight = header.offsetHeight
let subHeight = 0

// submenu 높이 중 가장 높은 값을 subMenuHeight에 저장
for (let i = 0; i < subMenu.length; i++) {
    if (subMenu[i].offsetHeight > subHeight) {
        subHeight = subMenu[i].offsetHeight
    }
    console.log(subMenu[i].offsetHeight)
}
$gnb.addEventListener('mouseover', function () {
    header.style.height = headerHeight + subHeight + 80 + 'px'
})
$gnb.addEventListener('mouseout', function () {
    header.style.height = headerHeight + 'px'
})

//====visual====
$(document).ready(function () {
    const swiper_play = $('.swiper-play')
    swiper_play.click(function () {
        $(this).toggleClass("swiper-play-start");
        let temp = $(this).hasClass("swiper-play-start")
        if (temp) {
            //슬라이드 작동 안함
            swiper.autoplay.stop();
            console.log(temp)
        } else {
            //슬라이드 작동
            swiper.autoplay.start();
            console.log(temp)
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-nex",
      prevEl: ".swiper-button-pre",
    },
  });

// ====footer====
$(function () {
    $(window).scroll(function () {
        var scroll_height = $(document).scrollTop();
        if (600 <= scroll_height) {
            $(".gotop").addClass('active');
        }
        else {
            $(".gotop").removeClass('active');
        }
    });
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').stop().animate({scrollTop:0},0)
    })
});
