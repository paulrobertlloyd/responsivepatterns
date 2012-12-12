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
        var featured = document.createElement('figure');
        featured.className = 'featured'
        var featuredImg = featured.appendChild(document.createElement('img')),
            featuredCaption = featured.appendChild(document.createElement('figcaption'));
            
        gallery.parentNode.insertBefore(featured, gallery);
        
        function updateSlide(el) {
            var fullImg = new Image();
            addEvent(fullImg, 'load', function(e) {
                featuredImg.src = fullImg.src;
            });
            featuredImg.src = el.querySelector('img').src;
            fullImg.src = el.href;
            featuredCaption.innerHTML = el.parentNode.querySelector('figcaption').innerHTML;
        }
        updateSlide(links[0]);
        
    }
}