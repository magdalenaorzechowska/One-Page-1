$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");
})

$('li a').on('click', function(){
    const goToSction = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSction).offset().top
    })
})

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 150) {
            $(".menu").css('background-color', 'rgb(250, 250, 250)');
            $(".menu").css('transition', '.3s');
            
        }
        if(scroll_pos < 150) {
            $(".menu").css('background-color', 'transparent');
          
        }
    });
});