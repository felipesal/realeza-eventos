const bannerSlidesContainer = document.getElementById("banner-slides-container");
const bannerSlide = document.getElementById("banner-slide");
showSlides();

function showSlides() {
    let bannerWidth = bannerSlide.clientWidth;
    
    bannerSlidesContainer.scrollLeft += bannerWidth;
    console.log(bannerSlidesContainer.getElementsByTagName("li"));
    setTimeout(showSlides, 4000);
    console.log("banner length is "+bannerSlidesContainer.getElementsByTagName("li").length);
}