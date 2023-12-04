src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
crossorigin = "anonymous"

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var aboutSection = document.getElementById('about');
    var resumeSection = document.getElementById('resume');

    // Calculate the scroll position
    var scrollPosition = window.scrollY;

    // Adjust the background color based on the scroll position
    if (scrollPosition >= aboutSection.offsetTop && scrollPosition < resumeSection.offsetTop) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
});
