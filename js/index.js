$(function(){
    setInterval(function(){
        $('.slideitem').animate({
            'margin-top':'-50%'
        },function(){
            $('.slide:first').appendTo('.slideitem')
            $('.slideitem').css({
                'margin-top': '0%',
            })
        })
    }, 3000)
})