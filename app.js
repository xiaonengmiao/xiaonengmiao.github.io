var main = function() {
    
    
    
    $('.arrow-next').click(function() {
                           var currentSlide = $('.active-slide');
                           var nextSlide = currentSlide.next();
                           
                           var currentDot = $('.active-dot');
                           var nextDot = currentDot.next();
                           
                           if(nextSlide.length === 0) {
                           nextSlide = $('.slide').first();
                           nextDot = $('.dot').first();
                           }
                           
                           currentSlide.fadeOut(600).removeClass('active-slide');
                           nextSlide.fadeIn(600).addClass('active-slide');
                           
                           currentDot.removeClass('active-dot');
                           nextDot.addClass('active-dot');
                           });
    
    
    $('.arrow-prev').click(function() {
                           var currentSlide = $('.active-slide');
                           var prevSlide = currentSlide.prev();
                           
                           var currentDot = $('.active-dot');
                           var prevDot = currentDot.prev();
                           
                           if(prevSlide.length === 0) {
                           prevSlide = $('.slide').last();
                           prevDot = $('.dot').last();
                           }
                           
                           currentSlide.fadeOut(600).removeClass('active-slide');
                           prevSlide.fadeIn(600).addClass('active-slide');
                           
                           currentDot.removeClass('active-dot');
                           prevDot.addClass('active-dot');
                           });
    
    var myName = "xiaonengmiao";
    
    var red = [0, 100, 63];
    var orange = [40, 100, 60];
    var green = [75, 100, 40];
    var blue = [196, 77, 55];
    var purple = [280, 50, 60];
    var letterColors = [red, orange, green, blue, purple];
    
    drawName(myName, letterColors);
    
    if(10 < 3)
    {
        bubbleShape = 'square';
    }
    else
    {
        bubbleShape = 'circle';
    }
    
    bounceBubbles();
    
}

$(document).ready(main);