const items = document.querySelectorAll(".item");
let focusedIndex = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    focusedIndex = Math.max(focusedIndex - 1, 0);
  } else if (event.key === "ArrowRight") {
    focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
  }

  updateCarousel();
});

// Handle mouse scrolling (horizontal)
document.querySelector(".carousel").addEventListener("wheel", (event) => {
  if (event.deltaX > 0) {
    focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
  } else if (event.deltaX < 0) {
    focusedIndex = Math.max(focusedIndex - 1, 0);
  }

  updateCarousel();
});

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === focusedIndex) {
      item.classList.add("focused");
    } else {
      item.classList.remove("focused");
    }
  });

  console.log(items[0]);
  const itemWidth = items[0].offsetWidth;
  const translateXValue = -focusedIndex * (itemWidth + 20); // 20 added because of margin
  document.querySelector(
    ".carousel-items"
  ).style.transform = `translateX(${translateXValue}px)`;
}
