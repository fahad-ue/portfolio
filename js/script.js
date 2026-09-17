/* =====================================================
   MOHAMED FAHAD PORTFOLIO
   JavaScript
===================================================== */


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= SMOOTH NAVIGATION ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function () {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });