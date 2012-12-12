var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();

function loadImgs() {
    if (document.querySelectorAll) {
        var dataImgs = document.querySelectorAll('[data-img]');
        for (var i=0,len=dataImgs.length;i<len;++i) {
            (function(dataImg) {
                var dataImgParent = dataImg.parentNode,
                    fullSrc = dataImg.getAttribute('data-img');
                if (fullSrc == "") {
                    fullSrc = dataImg.getAttribute('href');
                }
                if (fullSrc !== "") {
                    var fullImg = new Image();
                    addEvent(fullImg, 'load', function(e) {
                        dataImgParent.insertBefore(fullImg, dataImg);
                        dataImgParent.removeChild(dataImg);
                    });
                    fullImg.src = fullSrc;
                }
            })(dataImgs[i]);
        }
    }
}

if (window.matchMedia && window.matchMedia("(min-width: 40em)").matches) {
    loadImgs();
}
/*
eg:
if (navigator.connection && navigator.connection.bandwidth >= 750) {
    loadImgs();
}
*/