$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hidden').each(function () {

            var bottom_of_object = $(this).position().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if ($(this).is("hr")) {
                $(this).animate({ 'opacity': '0.25' }, 500);
            } else if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 500);
            }
        });
    });
});