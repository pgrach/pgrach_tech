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


// This script prevents the default hyperlink behavior 
// and instead scrolls the .main-content to the appropriate 
// id when a link is clicked on the sidebar.
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
