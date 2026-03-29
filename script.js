function openfeatures() {
  let allelems = document.querySelectorAll(".elem");
  let fullelems = document.querySelectorAll(".fullelems");
  let btn = document.querySelectorAll(".fullelems .back");
  let main = document.querySelector("#main");
  allelems.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
      fullelems[index].style.display = "block";
    });
  });

  btn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      fullelems[index].style.display = "none";
    });
  });
}
openfeatures();

const allTasks = [
  {
    task: "Complete JavaScript revision",
    details: "Revise closures, promises, async-await",
    imp: true,
  },
  {
    task: "Build To-Do App UI",
    details: "Create responsive layout with HTML, CSS, JS",
    imp: true,
  },
  {
    task: "Practice DSA",
    details: "Solve 5 problems on arrays and strings",
    imp: false,
  },
  {
    task: "Update LinkedIn",
    details: "Post about 21-day frontend challenge",
    imp: false,
  },
  {
    task: "Learn API Integration",
    details: "Fetch data using fetch() and display UI",
    imp: true,
  },
];

let form = document.querySelector(".addtask form");
let Input = document.querySelector(".addtask form #task-input");
let textarea = document.querySelector(".addtask form textarea");
let checkbox = document.querySelector(".addtask form #check");
let alltask = document.querySelector(".alltask");
console.log(alltask);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
