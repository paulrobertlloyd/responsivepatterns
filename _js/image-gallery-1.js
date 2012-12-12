var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();

if (document.querySelector) {
    var gallery = document.querySelector('.gallery');
    if (gallery) {
        gallery.className += ' is-enhanced';
        var links = gallery.querySelectorAll('figure .gallery-link');        
        addEvent(links, 'click', function(e) {
            updateSlide(this);
            e.preventDefault();
        });
        var fullFig = document.createElement('figure'),
            fullImg = fullFig.appendChild(document.createElement('img')),
            fullCaption = fullFig.appendChild(document.createElement('figcaption'));
        gallery.parentNode.insertBefore(fullFig, gallery);
        
        function updateSlide(el) {
            console.log(el.parentNode);
            var loadImg = new Image();
            addEvent(loadImg, 'load', function(e) {
                fullImg.src = loadImg.src;
            });
            fullImg.src = el.querySelector('img').src;
            loadImg.src = el.href;
            fullCaption.innerHTML = el.parentNode.querySelector('figcaption').innerHTML;
        }
        updateSlide(links[0]);
        
    }
}