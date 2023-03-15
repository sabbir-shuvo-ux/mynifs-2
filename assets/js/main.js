const chekBox_one = document.querySelector(".chekBox_one");
const chekBox_two = document.querySelector(".chekBox_two");
const chekBox_three = document.querySelector(".chekBox_three");
const chekBox_four = document.querySelector(".chekBox_four");

chekBox_one.addEventListener("change", (e) => {
  if (e.target.checked) {
    chekBox_two.checked = false;
  }
});

chekBox_two.addEventListener("change", (e) => {
  if (e.target.checked) {
    chekBox_one.checked = false;
  }
});

chekBox_three.addEventListener("change", (e) => {
  if (e.target.checked) {
    chekBox_four.checked = false;
  }
});

chekBox_four.addEventListener("change", (e) => {
  if (e.target.checked) {
    chekBox_three.checked = false;
  }
});
