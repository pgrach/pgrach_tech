window.addEventListener("wheel", function (e) {
    // Only activate for screens wider than 768px
    if (window.innerWidth <= 768) return;

    const mainContent = document.querySelector(".main-content");

    // The wheel event gives a deltaY property
    // that tells you how far the wheel was scrolled
    const distanceToScroll = e.deltaY;

    // Then, you can simply add that to .main-content's current scroll position
    mainContent.scrollTop += distanceToScroll;

    // Prevent the default scrolling behaviour
    e.preventDefault();
}, { passive: false }); // "passive: false" makes it so you can call preventDefault inside the handler
