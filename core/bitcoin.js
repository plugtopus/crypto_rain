if (intervalBitcoin != undefined && intervalBitcoin != '') {
    clearInterval(intervalBitcoin);
    intervalBitcoin = ''
} else {
    var intervalBitcoin = setInterval(() => {
        var $BitcoinDiv = $('<div class="rom-bitcoin rain--item"></div>');
    var $leftpos = Math.random() * $(window).width();

    $('body').append($BitcoinDiv);
    $BitcoinDiv.css('left', $leftpos + 'px')
    $BitcoinDiv.css({
        top: $(document).scrollTop() - 100
    });
    $BitcoinDiv.animate({
        top: $(document).scrollTop() + $(window).height()
    }, 2000, "easeInQuad", () => {
        $(this).remove();
});
}, 100);
}