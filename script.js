function openfeatures() {
  let allelems = document.querySelectorAll(".elem");
  let fullelems = document.querySelectorAll(".fullelems");
  let btn = document.querySelectorAll(".fullelems .back");
  let main = document.querySelector("#main");
  allelems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullelems[elem.id].style.display = "block";
    });
  });

  btn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      fullelems[btn.id].style.display = "none";
    });
  });
}
openfeatures()