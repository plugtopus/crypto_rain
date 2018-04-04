if (intervalEthereum != undefined && intervalEthereum != '') {
    clearInterval(intervalEthereum);
    intervalEthereum = ''
} else {
    var intervalEthereum = setInterval(() => {
        var $EthereumDiv = $('<div class="rom-ethereum rain--item"></div>');
    var $leftpos = Math.random() * $(window).width();

    $('body').append($EthereumDiv);
    $EthereumDiv.css('left', $leftpos + 'px')
    $EthereumDiv.css({
        top: $(document).scrollTop() - 100
    });
    $EthereumDiv.animate({
        top: $(document).scrollTop() + $(window).height()
    }, 2000, "easeInQuad", () => {
        $(this).remove();
});
}, 100);
}