$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function () {

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});


//Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact form"); // Get the contact form
    const formInputs = contactForm.querySelectorAll(".box, textarea"); // Get form input fields
    const submitBtn = contactForm.querySelector(".btn"); // Get the form submit button


    function validateForm(event) {
        event.preventDefault();
        let isValid = true;


        formInputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add("error"); // Add error class for visual feedback
            } else {
                input.classList.remove("error");
            }
        });

        if (isValid) {
            // If all fields are filled, submit the form
            contactForm.submit();
        } else {
            // Show an error message or perform any desired action
            alert("Please fill in all fields.");
        }
    }

    submitBtn.addEventListener("click", validateForm); // Add click event listener to the submit button
});


//Smooth Scrolling
document.querySelectorAll('header .navbar ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');

        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Sticky Header
const header = document.querySelector('header');
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll', () => {
    stickyHeader();
});


//Image LightBox
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', function () {
        console.log(this);
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);

        lightbox.addEventListener('click', e => {
            if (e.target !== img) {
                lightbox.remove();
            }
        });
    });
});


