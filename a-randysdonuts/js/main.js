const header = document.querySelector('header'),
      nav = document.querySelector('nav')
// nav에 마우스 올리면 header 높이가 300, 마우스 내리면 50으로 변경

nav.addEventListener('mouseover',function(){
    header.style.height = '380px'
})
nav.addEventListener('mouseout',function(){
    header.style.height = '120px'
})
