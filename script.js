/* =========================================
   NEXORA LEARN JAVASCRIPT
========================================= */



/* =========================================
   1. LAUNCH COUNTDOWN
========================================= */

const launchDate =
    new Date("Nov 9,2026 00:00:00").getTime();

const countdown =
    setInterval(function () {

        const now =
            new Date().getTime();

        const distance =
            launchDate - now;

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );

        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");

        if (distance < 0) {

            clearInterval(countdown);

        }

    }, 1000);



/* =========================================
   2. PRICING TOGGLE
========================================= */



const priceToggle = document.getElementById("priceToggle");
const starterPrice = document.getElementById("starterPrice");
const proPrice = document.getElementById("proPrice");

priceToggle.addEventListener("change", function () {

    if (this.checked) {

        // Yearly pricing
        starterPrice.textContent = "36000";
        proPrice.textContent = "46800";

        starterPrice.parentElement.querySelector("small").textContent = "/year";
        proPrice.parentElement.querySelector("small").textContent = "/year";

    } else {

        // Monthly pricing
        starterPrice.textContent = "3000";
        proPrice.textContent = "3900";

        starterPrice.parentElement.querySelector("small").textContent = "/month";
        proPrice.parentElement.querySelector("small").textContent = "/month";

    }

});

/* =========================================
   3. ENROLLMENT FORM VALIDATION
========================================= */

const enrollForm =
    document.getElementById("enrollForm");


enrollForm.addEventListener(
    "submit",
    function (event) {


        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const course =
            document.getElementById(
                "course"
            ).value;


        let valid = true;


        document.getElementById(
            "nameError"
        ).textContent = "";


        document.getElementById(
            "emailError"
        ).textContent = "";


        document.getElementById(
            "courseError"
        ).textContent = "";


        document.getElementById(
            "successMessage"
        ).textContent = "";


        if (name === "") {

            document.getElementById(
                "nameError"
            ).textContent =
                "Please enter your name.";

            valid = false;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            document.getElementById(
                "emailError"
            ).textContent =
                "Please enter your email.";

            valid = false;

        }

        else if (
            !emailPattern.test(email)
        ) {

            document.getElementById(
                "emailError"
            ).textContent =
                "Please enter a valid email.";

            valid = false;

        }


        if (course === "") {

            document.getElementById(
                "courseError"
            ).textContent =
                "Please select a course.";

            valid = false;

        }


        if (valid) {


            document.getElementById(
                "successMessage"
            ).textContent =
                "🎉 Enrollment submitted successfully!";


            enrollForm.reset();


        }

    }
);



/* =========================================
   4. NEWSLETTER
========================================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    function (event) {


        event.preventDefault();


        const email =
            document.getElementById(
                "newsletterEmail"
            ).value.trim();


        const message =
            document.getElementById(
                "newsletterMessage"
            );


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(email)
        ) {


            message.textContent =
                "Please enter a valid email.";


            message.style.color =
                "#dc2626";


            return;

        }


        message.textContent =
            "🎉 Thank you for subscribing!";


        message.style.color =
            "#16a34a";


        newsletterForm.reset();


    }
);



/* =========================================
   5. SCROLL TO TOP
========================================= */

const scrollTopBtn =
    document.getElementById(
        "scrollTopBtn"
    );


window.addEventListener(
    "scroll",
    function () {


        if (
            window.scrollY > 500
        ) {


            scrollTopBtn.style.display =
                "block";


        } else {


            scrollTopBtn.style.display =
                "none";


        }

    }
);


scrollTopBtn.addEventListener(
    "click",
    function () {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================
   6. SCROLL REVEAL
========================================= */

function revealElements() {


    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    elements.forEach(
        function (element) {


            const elementTop =
                element.getBoundingClientRect()
                .top;


            if (
                elementTop <
                window.innerHeight - 100
            ) {


                element.classList.add(
                    "active"
                );


            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealElements
);


window.addEventListener(
    "load",
    revealElements
);



/* =========================================
   7. MOBILE NAVBAR CLOSE
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const navbar =
    document.getElementById(
        "navbarNav"
    );


navLinks.forEach(
    function (link) {


        link.addEventListener(
            "click",
            function () {


                if (
                    navbar.classList.contains(
                        "show"
                    )
                ) {


                    const collapse =
                        bootstrap.Collapse
                        .getInstance(navbar);


                    if (collapse) {

                        collapse.hide();

                    }

                }

            }
        );

    }
);

/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Get values
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        // Validation
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        // Show success message on page
        const successMessage = document.getElementById("contactSuccess");

        if (successMessage) {
            successMessage.textContent =
                "✅ Thank you, " + name + "! Your message has been sent successfully.";
            successMessage.style.color = "#16a34a";
        }

        // Reset form
        contactForm.reset();

    });

}