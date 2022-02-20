//STICKY NAVBAR
window.onscroll = function() { sticky_nav() };
var nav = document.getElementById("navbar"); //get the element

var sticky = nav.offsetTop; //get the offset position of navbar from top

//adding a sticky class to navbar upon reaching its scroll function
function sticky_nav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
}




// SIDE EFFECT IN  SIDENAV

function open_sidenav() {
    document.getElementById("side_nav").style.width = "15em"; // MAKE WIDTH 15EM WHEN SIDENAV IS NEEDED 
}

function close_sidenav() {
    document.getElementById("side_nav").style.width = "0"; //MAKE WIDTH 0 WHEN SIDENAV IS NOT NEEDED
}



// SCROLL ANIMATIONS
function TransX_Left() {
    var reveals = document.querySelectorAll(".TransX_Left") //selects all elements with given class name
    for (var i = 0; i < reveals.length; i++) {
        var win_height = window.innerHeight; //Height of viewport
        var ele_top = reveals[i].getBoundingClientRect().top; //getBoundingClientRect().top gives the hieght of the elemnt form top
        var ele_visible = 150;
        if (ele_top < win_height - ele_visible) //checking if distance between elemnt and top is less than 150 px
        { reveals[i].classList.add("active") } // the element will be visible only if the above condition is true
        else {
            reveals[i].classList.remove("active")
        }
    }
}
window.addEventListener("scroll", TransX_Left) // calls the function everytime the user srolss near to the elemnt

// SCROLL ANIMATIONS
function TransX_Right() {
    var reveals = document.querySelectorAll(".TransX_Right")
    for (var i = 0; i < reveals.length; i++) {
        var win_height = window.innerHeight;
        var ele_top = reveals[i].getBoundingClientRect().top;
        var ele_visible = 150;
        if (ele_top < win_height - ele_visible) { reveals[i].classList.add("active") } else {
            reveals[i].classList.remove("active")
        }
    }
}
window.addEventListener("scroll", TransX_Right)


// SCROLL ANIMATIONS
function TransY_Up() {
    var reveals = document.querySelectorAll(".TransY_Up")
    for (var i = 0; i < reveals.length; i++) {
        var win_height = window.innerHeight;
        var ele_top = reveals[i].getBoundingClientRect().top;
        var ele_visible = 150;
        if (ele_top < win_height - ele_visible) { reveals[i].classList.add("active") } else {
            reveals[i].classList.remove("active")
        }
    }
}
window.addEventListener("scroll", TransY_Up)

// SLIDESHOW
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500); // Change image every 2 seconds

    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}