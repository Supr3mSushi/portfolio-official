/*============= Menu icon navbar =============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*============= Scroll section active link =============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(current => {
        let top = window.scrollY;
        let offset= current.offsetTop - 150;
        let height = current.offsetHeight;
        let id = current.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });




/*============= Sticky navbar =============*/
let header = document.querySelector("header");

header.classList.toggle('sticky', window.scrollY > 100);

/*============= Remove menu icon navbar when click navbar link (scroll) =============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



};


