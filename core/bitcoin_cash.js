if (intervalBitcoin_cash != undefined && intervalBitcoin_cash != '') {
    clearInterval(intervalBitcoin_cash);
    intervalBitcoin_cash = ''
} else {
    var intervalBitcoin_cash = setInterval(() => {
        var $Bitcoin_cashDiv = $('<div class="rom-bitcoin_cash rain--item"></div>');
    var $leftpos = Math.random() * $(window).width();

    $('body').append($Bitcoin_cashDiv);
    $Bitcoin_cashDiv.css('left', $leftpos + 'px')
    $Bitcoin_cashDiv.css({
        top: $(document).scrollTop() - 100
    });
    $Bitcoin_cashDiv.animate({
        top: $(document).scrollTop() + $(window).height()
    }, 2000, "easeInQuad", () => {
        $(this).remove();
});
}, 100);
}