document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bar = entry.target;
                    const targetWidth = bar.dataset.targetWidth;

                    if (entry.isIntersecting) {
                        // Animate the progress bar
                        bar.style.transition = "width 2s ease-in-out"; // Ensure smooth animation
                        bar.style.width = targetWidth;
                    } else {
                        // Reset the progress bar with a small delay to allow retriggering
                        bar.style.transition = "none"; // Disable transition for immediate reset
                        bar.style.width = "0";

                        // Force reflow for the retrigger
                        setTimeout(() => {
                            bar.style.transition = "width 2s ease-in-out"; // Re-enable transition
                        }, 100);
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
