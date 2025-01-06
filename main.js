const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar-container");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    sidebar.classList.toggle("active");
});

document.addEventListener('click', e => {
    if (sidebar.classList.contains("active") && !e.target.isEqualNode(hamburgerMenu) 
        && !e.target.isEqualNode(sidebar) && !sidebar.contains(e.target)) {
            sidebar.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        }
});