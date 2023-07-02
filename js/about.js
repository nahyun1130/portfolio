$(document).ready(function(){
    $('.skill').mouseenter(function(e){
        function skill(id, percent) {
            let bar = new ProgressBar.Line(id, {           //line(선), circle(원) ...
                strokeWidth: 4, //앞배경
                trailWidth: 4,  //뒷배경
                color: 'yellow', 
                duration: 1400,
                easing: 'easeInOut',
                step: function(state, line) {
                    line.setText(Math.round(line.value() * 100)+'%')
                }
            })
            bar.animate(percent)
        }
        skill('#html',0.8);
        skill('#css',0.9);
        skill('#js',0.5);
        skill('#ps',0.7);
        skill('#ai',0.6);
        skill('#of',0.9);
    
        $(this).off(e)
    })
})