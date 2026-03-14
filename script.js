document.addEventListener("DOMContentLoaded", function() {
    // We select all elements that have the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');

    // We create an observer to watch when these elements enter the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is visible on the screen, add the 'show' class
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        // This triggers the animation when the element is 15% visible
        threshold: 0.15 
    });

    // Tell the observer to watch all our hidden elements
    hiddenElements.forEach((el) => observer.observe(el));
});
