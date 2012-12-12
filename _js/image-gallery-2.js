if (document.querySelector) {
    var carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.className += ' is-enhanced';
        var slide,
            figures = carousel.querySelectorAll('figure');
        var prev = document.createElement('a');
        prev.rel = 'prev';
        prev.href = '#';
        prev.innerHTML = 'Previous Image';
        carousel.appendChild(prev);
        var next = document.createElement('a');
        next.rel = 'next';
        next.href = '#';
        next.innerHTML = 'Next Image';
        carousel.appendChild(next);
        
        addEvent(prev, 'click', function() {
            var newSlide = slide - 1;
            if (newSlide < 0) {
                newSlide = figures.length-1;
            }
            revealSlide(newSlide);
        });
        addEvent(next, 'click', function() {
            var newSlide = slide + 1;
            if (newSlide > figures.length-1) {
                newSlide = 0;
            }
            revealSlide(newSlide);
        });
        
        function revealSlide(newSlide) {
            if (newSlide !== slide) {
                if (figures[slide]) {
                    figures[slide].className = figures[slide].className.replace(' active', '');
                }
                figures[newSlide].className += ' active';
                slide = newSlide;
            }
        }
        
        revealSlide(0);
    }
}