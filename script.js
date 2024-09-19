const button = document.querySelector('.buttons');

const displayButton = () => {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);

        if (window.scrollY > 1000) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

const scrollToTop = () => {
    button.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        console.log(event);
    });
};

displayButton();
scrollToTop();

// sticky nav bar 

let navLinks = document.querySelector(".menus")

function showMenu(){
    navLinks.style.right = "0"
}
function hideMenu(){
    navLinks.style.right = "-70%"
}