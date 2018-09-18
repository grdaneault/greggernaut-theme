/**
 * Helper to turn the ghost gallery card into a fancybox gallery with expanding images
 */
(function($) {
    function wrapImage(el, gallery) {
        wrapper = document.createElement('a');
        $(wrapper).attr('href', el.src);
        $(wrapper).attr('data-fancybox', gallery);
        $(wrapper).insertBefore($(el));
        $(wrapper).append($(el))
    }

    $(".kg-gallery-image img").each(function(i, elem) {
        console.log(elem);
        wrapImage(elem, "gallery");
    });
})($);
