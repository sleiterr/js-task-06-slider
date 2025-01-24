const carouselBox = document.querySelector(".carousel-box");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

document.querySelector(".arrow-right").onclick = function () {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    centerItem();
  }
};

document.querySelector(".arrow-left").onclick = function () {
  if (currentIndex > 0) {
    currentIndex--;
    centerItem();
  }
};

function centerItem() {
  const widthItem = items[currentIndex].offsetWidth;
  const scrollPosition =
    items[currentIndex].offsetLeft -
    (carouselBox.offsetWidth / 2 - widthItem / 2);
  carouselBox.scrollTo({ left: scrollPosition, behavior: "smooth" });
}
