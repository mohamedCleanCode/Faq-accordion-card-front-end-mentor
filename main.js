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
  if (document.querySelectorAll(".show").length > 1) {
    removeShow();
    e.target.parentElement.children[1].classList.add("show");
    addStyles(e);
  } else {
    removeShow();
    e.target.parentElement.children[1].classList.add("show");
    addStyles(e);
  }
};

qs.forEach((q) => {
  q.addEventListener("click", handelQ);
});
