const body = document.querySelector("body");
let links = document.querySelectorAll("a");

const transitionClass = "fadeOut"

links.forEach(link => {
    link.addEventListener("click", e => {
        // Prevent instant page travel
        e.preventDefault();

        // Get link of page we're navigating to
        const href = e.currentTarget.href;

        // Alright, so this function basically just moving to the next page; it adds the class, then waits to move
        setTimeout(() => {
            if (body.classList.contains(transitionClass)) {
                // Move to next page
                window.location.href = href;
            }
        }, 500);

        // Adding the class lets the CSS transition play
        body.classList.add(transitionClass);
    })
});