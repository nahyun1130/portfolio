$(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    // spaceBetween: 10,
    loop: true,
    mousewheel: true,
    breakpoints: {
      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
      },
      1000: {
        slidesPerView : 3,

      },
      1700: {
        slidesPerView: 4,  //브라우저가 1024보다 클 때
      },
  
    }
  });

  const popup_img = [
    'image/popup1.jpg',
    'image/popup2.jpg',
    'image/popup3.jpg',
    'image/popup4.jpg',
    'image/popup5.jpg',
    'image/popup6.jpg',
    'image/popup7.jpeg',
    'image/popup8.png'
  ]
  // console.log(popup_img)
  $('.swiper-slide').each(function(index, item){
    $(this).find('button').click(function(){
      $('.popupmask, .popupBox').show();
      $('.popupimg img').attr('src', popup_img[index])
      // console.log(index)
      if(index == 3) {
        $('.original, .redesign, .mobile').show();
      } else if (index == 4) {
        $('.original, .redesign').show();
      } else if (index == 6 || index == 7){
        $('.original, .clone').show();
      } else {
        $('.original, .redesign').hide();
      }
    })
  })
  
  const original = [
    'https://www.bmw.co.kr/ko/index.html',
    'https://www.crashop.co.kr/',
    'http://randysdonuts.co.kr/',
    'https://www.burgerking.co.kr/#/home'
  ]

  console.log($('.link1'))
  $('.link1').each(function(index, item){
    $(this).click(function(){
        $('.original a').attr('href', original[index])
        console.log(index)
      })
    })

  const redesign = [
    'bmw/index.html',
    'crasangzum/responsive.html',
  ]

  console.log($('.link2'))
  $('.link2').each(function(index, item){
    $(this).click(function(){
        $('.redesign a').attr('href', redesign[index])
        console.log(index)
      })
    })

  const clone = [
    'a-randysdonuts/index.html',
    'burgerKing/index.html',
  ]

  console.log($('.link3'))
  $('.link3').each(function(index, item){
    $(this).click(function(){
        $('.clone a').attr('href', clone[index])
        console.log(index)
      })
    })
    
  $('.popupBox span, .popupmask').click(function(){
    $('.popupBox, .popupmask, .original, .redesign, .clone, .mobile').hide();
  })

})