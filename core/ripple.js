if (intervalRipple != undefined && intervalRipple != '') {
    clearInterval(intervalRipple);
    intervalRipple = ''
} else {
    var intervalRipple = setInterval(() => {
        var $RippleDiv = $('<div class="rom-ripple rain--item"></div>');
    var $leftpos = Math.random() * $(window).width();

    $('body').append($RippleDiv);
    $RippleDiv.css('left', $leftpos + 'px')
    $RippleDiv.css({
        top: $(document).scrollTop() - 100
    });
    $RippleDiv.animate({
        top: $(document).scrollTop() + $(window).height()
    }, 2000, "easeInQuad", () => {
        $(this).remove();
});
}, 100);
}