var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
let lazyimg = document.querySelectorAll('img.lazy');

lazyImages[0].setAttribute('alt', 'hello cat!');
lazyimg[0].setAttribute('alt', 'hello cat!');

document.addEventListener("DOMContentLoaded", function(){

    //create an array, and store NodeList
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

})