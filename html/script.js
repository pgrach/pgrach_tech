// Menu links responsiveness
document.addEventListener("DOMContentLoaded", function () {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('#about-me, #experience, #projects')
    const navLinks = document.querySelectorAll('.nav-indicator')

    // Define the Intersection Observer for #about-me and #experience
    const standardObserver = new IntersectionObserver(entries => {
        handleIntersect(entries, 0.50);
    }, {
        threshold: 0.50
    });

    // Define the Intersection Observer for #projects
    const projectsObserver = new IntersectionObserver(entries => {
        handleIntersect(entries, 0.2);
    }, {
        threshold: 0.2
    });

    // Handle intersection
    function handleIntersect(entries, threshold) {
        entries.forEach(entry => {
            console.log(`Observing: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}, threshold: ${threshold}`);
            if (entry.isIntersecting) {
                // Get the corresponding navigation link
                const id = entry.target.id;
                const activeLink = document.querySelector(`.nav-indicator[href="#${id}"]`)

                // Add the active class to the navigation link
                activeLink.classList.add('active')

                // Remove the active class from all other links
                navLinks.forEach(link => {
                    if (link != activeLink) {
                        link.classList.remove('active')
                    }
                })
            }
        })
    }

    // Observe sections
    standardObserver.observe(document.querySelector('#about-me'));
    standardObserver.observe(document.querySelector('#experience'));
    projectsObserver.observe(document.querySelector('#projects'));
})


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
document.querySelectorAll('.nav-indicator').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});