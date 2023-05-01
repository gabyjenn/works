function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.home-intro',
        triggerHook: 0
    })
    .setPin('.home-intro')
    .addTo(controller);
}

splitScroll();
