let qs = document.querySelectorAll(".question"),
  as = document.querySelectorAll(".answer");

const removeShow = () => {
  as.forEach((a) => {
    a.classList.remove("show");
  });
};

const addStyles = (e) => {
  e.target.querySelector("span").style.borderColor =
    "transparent transparent red transparent";
  e.target.querySelector("span").style.top = "-5px";
};

const handelQ = (e) => {
  if (e.target.parentElement.children[1].classList.contains("show")) {
    e.target.parentElement.children[1].classList.remove("show");
    e.target.querySelector("span").style.borderColor =
      "red transparent transparent transparent";
    e.target.querySelector("span").style.top = "5px";
  } else {
    removeShow();
    e.target.parentElement.children[1].classList.add("show");
    addStyles(e);
    console.log("one");
  }
};

qs.forEach((q) => {
  q.addEventListener("click", handelQ);
});
