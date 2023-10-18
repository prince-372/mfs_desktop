let a = document.getElementById("nav-bar");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuIcon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");
let solution = document.querySelector(".solution");
let cases = document.querySelector(".cases");
let about = document.querySelector(".about");
let blog = document.querySelector(".blog");
let contact = document.querySelector(".contact");
let touch = document.querySelector(".touch");


menuIcon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
solution.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
cases.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
about.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
contact.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
blog.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
touch.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
// backToTop
let backToTop = document.getElementById('backtotop')
 backToTop.addEventListener("click", function () {
 window.scrollTo(0, 0)
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.classList.remove('display_none');
        backToTop.classList.add('display_block');
    } else {
        backToTop.classList.remove('display_block');
        backToTop.classList.add('display_none');
    }
});
