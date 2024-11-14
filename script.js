document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    function animateProgressBar(bar) {
        const targetWidth = bar.getAttribute("data-target-width");
        bar.style.width = targetWidth;
    }

    function checkProgressBars() {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isVisible) {
                animateProgressBar(bar);
            } else {
                bar.style.width = "0"; // Reset width for reanimation
            }
        });
    }

    window.addEventListener("scroll", checkProgressBars);
    checkProgressBars(); // Initial check in case some bars are already in view
});
