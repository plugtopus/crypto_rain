if (intervalLitecoin != undefined && intervalLitecoin != '') {
    clearInterval(intervalLitecoin);
    intervalLitecoin = ''
} else {
    var intervalLitecoin = setInterval(() => {
        var $LitecoinDiv = $('<div class="rom-litecoin rain--item"></div>');
    var $leftpos = Math.random() * $(window).width();

    $('body').append($LitecoinDiv);
    $LitecoinDiv.css('left', $leftpos + 'px')
    $LitecoinDiv.css({
        top: $(document).scrollTop() - 100
    });
    $LitecoinDiv.animate({
        top: $(document).scrollTop() + $(window).height()
    }, 2000, "easeInQuad", () => {
        $(this).remove();
});
}, 100);
}