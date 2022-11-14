// ==========================

const header = document.querySelector("header");
function stickyNavbar() {
  //   console.log("hello");
  //   header.classList.toggle("scrolled");
  //   header.classList.toggle("scrolled", true);
  //   header.classList.toggle("scrolled", false);
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  //   console.log(window.pageYOffset);
  //   console.log(window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});


sr.reveal(`.social_container `, {
  origin: "bottom",
  delay: 200,
  interval: 200,
});

sr.reveal(".cta a", { origin: "left", delay: 200 , interval: 200, });
sr.reveal(".hero-banner", { origin: "top", delay: 300 });

sr.reveal(`.sub-heading `, { distance: "300px", origin: "right", delay: 200 });
sr.reveal(`.heading`, { distance: "300px", origin: "right", delay: 400 });
sr.reveal(`.text:not(.swiper-slide .text)`, {
  distance: "300px",
  origin: "right",
  delay: 600,
});
sr.reveal(`.my_social`, {
  distance: "300px",
  interval: 200,
  origin: "left",
  delay: 1000,
});
sr.reveal(`.my-contact `, { distance: "300px", origin: "right", delay: 800 });
sr.reveal(`.about-card`, {
  distance: "250px",
  interval: 300,
  origin: "top",
  delay: 800,
});

sr.reveal(`.service-item`, { distance: "300px", interval: 400, origin: "top" });
sr.reveal(`.ml`, { distance: "300px", origin: "bottom" });

sr.reveal(`.filter-btn`, { distance: "100px", interval: 100, origin: "top" });

sr.reveal(`.prt-card`, { origin: "top", interval: 200, delay: 200 });

sr.reveal(`.contact-form`, { origin: "right", distance: "200px", delay: 200 });
sr.reveal(`.section_li`, {
  distance: "200px",
  origin: "top",
  interval: 200,
  delay: 100,
});

/*=======================skills progress bar animation==================================*/
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom_icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");
/* --------------- active style links of scroll --------------- */

// ========================
let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".prt-card",
  },
  animation: {
    duration: 500,
    nudge: true,
    reverseOut: true,
    effects:
      "fade scale(0.01) translateX(20%) translateZ(-100px) rotateZ(180deg) stagger(30ms)",
  },
});

/* --------------- Modal Pop Up Animation Animation --------------- */

let currentIndex = 0;

zoom_icons.forEach((icn, i) =>
  icn.addEventListener("click", () => {
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex);
  })
);

modal_overlay.addEventListener("click", () => {
  prt_section.classList.remove("open");
  document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 5;
  } else {
    currentIndex--;
  }
  // console.log(currentIndex);
  changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
  if (currentIndex === 5) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  // console.log(currentIndex);
  changeImage(currentIndex);
});

function changeImage(index) {
  images.forEach((img) => img.classList.remove("showImage"));
  // console.log(images[index]);
  images[index].classList.add("showImage");
}

// swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* --------------- Change Active Link On Scroll --------------- */
window.addEventListener("scroll", () => {
  activeLink();
});

function activeLink() {
  // console.log("scroll");
  let sections = document.querySelectorAll("section[id]");
  // console.log(sections);
  // console.log(Array.from(sections));
  let passedSections = Array.from(sections)
    .map((sct, i) => {
      return {
        y: sct.getBoundingClientRect().top - header.offsetHeight,
        id: i,
      };
    })
    .filter((sct) => sct.y <= 0);
  // console.log(passedSections);

  let currSectionID = passedSections.at(-1).id;
  // console.log(currSectionID);

  links.forEach((l) => l.classList.remove("active"));
  links[currSectionID].classList.add("active");
}

activeLink();

/* --------------- Change Page Theme --------------- */

let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);

function changeTheme(isDark) {
  // if (!document.body.classList.contains("dark")) {
  if (isDark) {
    document.body.classList.add("dark");
    // <i class="uil uil-sun"></i>
    toggle_btn.classList.replace("uil-moon", "uil-sun");
    localStorage.setItem("dark", 1);
  } else {
    document.body.classList.remove("dark");
    toggle_btn.classList.replace("uil-sun", "uil-moon");
    localStorage.setItem("dark", 0);
  }
}
toggle_btn.addEventListener("click", () => {
  changeTheme(!document.body.classList.contains("dark"));
});

/* --------------- Open & Close Navbar Menu --------------- */

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("opened");
  menu.setAttribute("aria-expanded", menu.classList.contains("opened"));
  document.body.classList.toggle("stopScrolling");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
    menu.classList.remove("opened");
  })
);

//=========================== <!-- custom cursors  --> =============================

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");
const btn_submit = document.querySelector(".btn");
const btn_button = document.querySelectorAll("button");
const link_cursor = document.querySelectorAll("a");
const not_link_cursor = document.querySelectorAll(".section_ul .section_li a");
// console.log(not_link_cursor);
// console.log("ss");
let list_event_cursor = [btn_submit, menu, toggle_btn];
// console.log(link_cursor);

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

list_event_cursor.forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

link_cursor.forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

btn_button.forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

not_link_cursor.forEach((notLink) => {
  notLink.onmouseenter = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

window.addEventListener("mousedown", () => {
  cursor1.style.width = "45px";
  cursor1.style.height = "45px";
  cursor2.style.width = "55px";
  cursor2.style.height = "55px";
});
window.addEventListener("mouseup", () => {
  cursor1.style.width = null;
  cursor1.style.height = null;
  cursor2.style.width = null;
  cursor2.style.height = null;
});

//Javacript for the scroll
window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");

  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;

  indicatorBar.style.width = scrollValue + "%";
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});



// =============================
