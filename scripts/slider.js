document.getElementById("prev_button_nav").addEventListener("click", prevPic);
document.getElementById("next_button_nav").addEventListener("click", nextPic);

var listUrlBackground = ["url('/content/slide1.jpg')",
				"url('/content/slide2.jpg')",
				"url('/content/slide1(1).jpg')"];

var positionTab = 0;

function prevPic() {
    
    if(positionTab >= 1) {
        positionTab--;
        document.getElementById("headerBG").style.backgroundImage = listUrlBackground[positionTab];
        document.getElementById("next_button_nav").style.opacity = 1;
        document.getElementById("prev_button_nav").style.opacity = 1;
        if(positionTab == 0){
            document.getElementById("prev_button_nav").style.opacity = 0.5;
        }
    }
}

function nextPic() {
    if(positionTab < listUrlBackground.length-1){
        positionTab++;
        document.getElementById("headerBG").style.backgroundImage = listUrlBackground[positionTab];    
        document.getElementById("next_button_nav").style.opacity = 1;
        document.getElementById("prev_button_nav").style.opacity = 1;
        if(positionTab == listUrlBackground.length-1){
            document.getElementById("next_button_nav").style.opacity = 0.5;
        }
    }
}