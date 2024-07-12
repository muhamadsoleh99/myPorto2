$(document).ready(function() {
    // Event when a link with class 'page-scroll' is clicked
    $('.page-scroll').on('click', function(e) {
        // Get the href attribute
        var target = $(this).attr('href');
        // Get the target element
        var $targetElement = $(target);
        
        // Animate the scroll
        $('html, body').animate({
            scrollTop: $targetElement.offset().top - 50
        }, 1250, 'easeInOutExpo');
        
        // Prevent default link behavior
        e.preventDefault();
    });
});