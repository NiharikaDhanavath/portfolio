document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const bar = entry.target;
            if (entry.isIntersecting) {
                const targetWidth = bar.getAttribute("data-target-width");
                bar.style.width = targetWidth;
            } else {
                bar.style.width = "0"; // Reset width for reanimation
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

