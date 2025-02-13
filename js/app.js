const menu = document.querySelector(".menu");

document.querySelector("#toggler").addEventListener("click", () => {
    console.log("clicked");
    menu.classList.toggle("active");
    
});