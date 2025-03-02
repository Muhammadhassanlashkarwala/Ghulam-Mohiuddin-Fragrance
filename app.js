// Menu Section
let menuIcons = document.querySelector("#menu-icons");
let navBar = document.querySelector(".navbar");
let section = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
      links.classList.remove("active");
      document.querySelector("header nav ul li a[href*=" + id + " ]" ).classList.add("active")
            })
        }
    })
}

menuIcons.onclick = () =>{
    console.log("Chal raha ho!");
    menuIcons.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}
