// loading and background white ==>refreach
// const fadeOut = () => {
    setTimeout(() => {
        const loaderWrapper = document.querySelector('.wrapper')
        loaderWrapper.classList.add('fade')
    }, 300);
// }
// window.addEventListener('load', fadeOut)


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)




//==================== typing animation =============================
let typed = new Typed(".typing", {
    strings: [
        "",
        "",
        "Frontend developer",
        "Backend developer",
        "UI/UX design",
        "Web Designer",
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
});






// language ar / en / fr
const navBtn = document.querySelector(" button.navBtn");
const navBtnItems = document.querySelector("div.navBtnItems");


const btn11 = document.querySelectorAll('.navBtnItems button')
console.log(btn11)

btn11.forEach(x=>{
    x.addEventListener('click',()=>{
        // console.log(this)
        iconClose();
        setTimeout(() => {
            navBtnItems.classList.remove("open");
        }, 300);
    })
})

navBtn.addEventListener("click", () => {
    if (navBtnItems.classList.contains("open")) {
        iconClose();
        setTimeout(() => {
            navBtnItems.classList.remove("open");
        }, 300);
    } else {
        navBtnItems.classList.add("open");
    }
});

function iconClose() {
    const navLinkContent = document.querySelectorAll(
        "div.navBtnItems a .animateText"
    );

    navLinkContent.forEach((ele) => {
        ele.style.transform = "translateY(50px)";
        ele.style.transitionDelay = "0s";
    });

    setTimeout(() => {
        navLinkContent.forEach((ele) => {
            ele.style.transform = null;
            ele.style.transitionDelay = null;
        });
    }, 250);
}