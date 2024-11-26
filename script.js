document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bar = entry.target;
                    if (entry.isIntersecting) {
                        const targetWidth = bar.dataset.targetWidth;
                        bar.style.width = targetWidth; // Animate when in view
                    } else {
                        bar.style.width = "0"; // Reset when out of view
                    }
                });
            },
            {
                threshold: 0.5, // Trigger animation when 50% of the element is visible
            }
        );

        progressBars.forEach((bar) => observer.observe(bar));
    }
});
