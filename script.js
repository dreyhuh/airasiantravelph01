// =========================================
// PHILIPPINES AIR ASIAN TRAVEL & TOUR
// WEBSITE JAVASCRIPT
// =========================================



document.addEventListener("DOMContentLoaded", function () {



    // Mobile Navigation

    const menuToggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");



    if (menuToggle && navLinks) {


        menuToggle.addEventListener("click", function () {


            navLinks.classList.toggle("active");


            menuToggle.classList.toggle("open");


        });


    }





    // Close Mobile Menu When Clicking Link


    const navItems = document.querySelectorAll(".nav-links a");


    navItems.forEach(function(item){


        item.addEventListener("click", function(){


            if(navLinks){


                navLinks.classList.remove("active");


            }


        });


    });








    // Header Scroll Effect


    const header = document.querySelector(".header");



    function headerScroll(){


        if(window.scrollY > 80){


            header.classList.add("scrolled");


        } else {


            header.classList.remove("scrolled");


        }


    }



    window.addEventListener("scroll", headerScroll);



    headerScroll();






    // Fade Animation On Load


    document.body.classList.add("loaded");



});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================


const revealElements = document.querySelectorAll(
    ".service-card, .package-card, .destination-card, .benefit-card, .mission-card"
);



function revealOnScroll(){


    revealElements.forEach(function(element){


        const elementTop = element.getBoundingClientRect().top;


        const windowHeight = window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.classList.add("reveal", "active");


        }


    });


}



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();








// =========================================
// SMOOTH SCROLL LINKS
// =========================================


const smoothLinks = document.querySelectorAll(
    'a[href^="#"]'
);



smoothLinks.forEach(function(link){


    link.addEventListener(
        "click",
        function(event){



            const target = document.querySelector(
                this.getAttribute("href")
            );



            if(target){


                event.preventDefault();



                target.scrollIntoView({

                    behavior: "smooth"

                });


            }



        }
    );


});








// =========================================
// CONTACT FORM DEMO
// =========================================

/*
const contactForm = document.querySelector(
    ".contact-form"
);



if(contactForm){


    contactForm.addEventListener(
        "submit",
        function(event){


            event.preventDefault();



            alert(
                "Thank you for contacting Philippines Air Asian Travel & Tour Agency LLC. Our team will get back to you soon."
            );



            contactForm.reset();



        }

    );


}
*/






// =========================================
// IMAGE LOADING EFFECT
// =========================================


const images = document.querySelectorAll("img");



images.forEach(function(image){


    image.addEventListener(
        "load",
        function(){


            image.style.opacity = "1";


        }
    );


});

// =========================================
// FLOATING BUTTON INTERACTIONS
// =========================================


const floatingButtons = document.querySelectorAll(
    ".floating-buttons a"
);



floatingButtons.forEach(function(button){


    button.addEventListener(
        "mouseenter",
        function(){


            button.style.transform = "scale(1.1)";


        }
    );



    button.addEventListener(
        "mouseleave",
        function(){


            button.style.transform = "scale(1)";


        }
    );


});








// =========================================
// CURRENT YEAR AUTO UPDATE
// =========================================


const yearElements = document.querySelectorAll(
    ".footer-bottom p"
);



const currentYear = new Date().getFullYear();



yearElements.forEach(function(element){


    element.innerHTML = element.innerHTML.replace(
        "2026",
        currentYear
    );


});








// =========================================
// ACTIVE PAGE HIGHLIGHT
// =========================================


const currentPage = window.location.pathname
    .split("/")
    .pop();



const menuLinks = document.querySelectorAll(
    ".nav-links a"
);



menuLinks.forEach(function(link){



    const linkPage = link
        .getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }



});








// =========================================
// PREVENT EMPTY LINK JUMPS
// =========================================


const emptyLinks = document.querySelectorAll(
    'a[href="#"]'
);



emptyLinks.forEach(function(link){


    link.addEventListener(
        "click",
        function(event){


            event.preventDefault();


        }
    );


});








// =========================================
// WEBSITE READY
// =========================================


console.log(
    "Philippines Air Asian Travel & Tour Agency LLC website loaded successfully."
);
