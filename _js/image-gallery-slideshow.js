if (document.querySelector) {
	var carousel = document.querySelector('.gallery');
	if (carousel) {
		carousel.className += ' is-enhanced';
		var slide,
			figures = carousel.querySelectorAll('figure');
		var prev = document.createElement('a');
		prev.rel = 'prev';
		prev.href = '#';
		prev.innerHTML = '&#9664;';
		prev.title = 'Previous Image';
		carousel.appendChild(prev);
		var next = document.createElement('a');
		next.rel = 'next';
		next.href = '#';
		next.innerHTML = '&#9654;';
		next.title = 'Next Image';
		carousel.appendChild(next);
		
		addEvent(prev, 'click', function(e) {
			var newSlide = slide - 1;
			if (newSlide < 0) {
				newSlide = figures.length-1;
			}
			revealSlide(newSlide);
			e.preventDefault();
		});
		addEvent(next, 'click', function(e) {
			var newSlide = slide + 1;
			if (newSlide > figures.length-1) {
				newSlide = 0;
			}
			revealSlide(newSlide);
			e.preventDefault();			
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