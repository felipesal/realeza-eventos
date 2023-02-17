const depoimentsSlidesContainer = document.getElementById("depoiments-slides-container");
const depoimentsSlide = document.getElementById("depoiments-slide");
const depoimentsPrevButton = document.getElementById("depoiments-slide-arrow-prev");
const depoimentsNextButton = document.getElementById("depoiments-slide-arrow-next");

depoimentsNextButton.addEventListener("click", () => {
  const slideWidth = depoimentsSlide.clientWidth;
  depoimentsSlidesContainer.scrollLeft += slideWidth;
});

depoimentsPrevButton.addEventListener("click", () => {
  const slideWidth = depoimentsSlide.clientWidth;
  depoimentsSlidesContainer.scrollLeft -= slideWidth;
});