const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("prev_button_nav");
const nextButton = document.getElementById("next_button_nav");

var nbSlideIterator = 1;
showSlides();

function nextSlides(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
    nbSlideIterator = nbSlideIterator + 1;

    if(nbSlideIterator >= 4) {
        nbSlideIterator = 3;
    } else {
        if(nbSlideIterator < 3){
            prevButton.style.opacity = 1;
            prevButton.style.cursor = "pointer";
        }
        else{ 
            nextButton.style.opacity = 0;
            nextButton.style.cursor = "auto";
        }
    }
    showSlides();
}

function prevSlides(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
    nbSlideIterator = nbSlideIterator - 1;
  
    if(nbSlideIterator <= 0){
      nbSlideIterator = 1;
    } else{
      if(nbSlideIterator > 1){
          nextButton.style.opacity = 1;
          nextButton.style.cursor = "pointer";
      } else {
          prevButton.style.opacity = 0;
          prevButton.style.cursor = "auto";
      }
    }
    showSlides();
}

function showSlides() {
  let i;
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  dots[nbSlideIterator-1].className += " active";
}
