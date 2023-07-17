//toggle icon navbar

//acroll section
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top window.scrollY;
        let offset = sec.offsetTop - 100;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar link
            navLink.forEach(links =>) {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + + ']')
            }
        }

    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}