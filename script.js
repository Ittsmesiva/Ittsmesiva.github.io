document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll("h2");
    headings.forEach(heading => {
        heading.addEventListener("click", function() {
            heading.classList.toggle("underline");
        });
    });
});
