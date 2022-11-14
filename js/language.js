
let title = document.getElementById("xx");

const arabic = document.querySelector(".btn-ar");
const english = document.querySelector(".btn-en");
const france = document.querySelector(".btn-fr");
arabic.addEventListener("click", () => {


//   location.reload();

  setLanguage("arabic");
  localStorage.setItem("Lang", "arabic");
  localStorage.setItem("Direct", "right");
  directText("right");
});

english.addEventListener("click", () => {
    // location.reload();

  setLanguage("english");
  localStorage.setItem("Lang", "english");
  localStorage.setItem("Direct", "left");
  directText("left");
});

france.addEventListener("click", () => {
    // location.reload();

  setLanguage("france");
  localStorage.setItem("Lang", "france");
  localStorage.setItem("Direct", "left");
  directText("left");
});
//   localStorage.clear();
//   ===========get value local Storage===========
onload = () => {
  setLanguage(localStorage.getItem("Lang"));
  directText(localStorage.getItem("Direct"));
};

//   console.log(localStorage.getItem("Lang"));

//   ===========direct parent text===========
function directText(direct) {
  if (direct === "right") {
    document.body.setAttribute("dir", "rtl");
  } else if (direct === "left") {
    document.body.setAttribute("dir", "ltr");
  }
}

//   ===========translate===========
function setLanguage(getLanguage) {
  if (getLanguage === "arabic") {
    title.innerHTML = "حميد بنشكير";
  } else if (getLanguage === "english") {
    title.innerHTML = "Hello, my name is";
  } else if (getLanguage === "france") {
    title.innerHTML = "boungour";
  }
}
