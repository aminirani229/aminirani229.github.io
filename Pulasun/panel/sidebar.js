$('.button-toggler').click(function(){
    $('.pnl-menu').css('right','0')
});

for(let licounter=1;licounter<30;licounter++){
    $('.pnlc-dropdown'+licounter).click(function(){
        $('.pnlc-dropdown'+licounter+" ul").toggleClass('show-menu')
    });
}
