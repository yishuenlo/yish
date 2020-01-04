document.addEventListener("DOMContentLoaded", function(){

    //create an array, and store NodeList
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    //do this only if intersectionObserver is supported
    if("IntersectionObserver" in window){

        //create new observer object
        let LazyImageObserver = new IntersectionObserver(function(entries, observer){
            entries.forEach(function(entry){
                //do these if the target intersects with the root
                if(entry.isIntersecting){
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');

                    //stop observing this image
                    LazyImageObserver.unobserve(lazyImage);
                }
            })
        });

        //loop through and observe each image
        lazyImages.forEach(function(lazyImages){
            LazyImageObserver.observe(lazyImages);
        })
    }

})