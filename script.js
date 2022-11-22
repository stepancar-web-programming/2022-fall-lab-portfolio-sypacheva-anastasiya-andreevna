
function changeSlidesLeft(){
    let index_block = 0
    var slides = document.getElementsByClassName("slide");
    for(var i=0; i<slides.length; i++){
        if (slides[i].style.display==="block"){
            if (i==0){
                index_block=slides.length-1
            }
            else index_block=i-1
            slides[i].style.display= "none";
            slides[index_block].style.display="block";
            break;
        }
    }
}



function changeSlidesRight(){
    let index_block = 0
    var slides = document.getElementsByClassName("slide");
    for(var i=0; i<slides.length; i++){
        if (slides[i].style.display==="block"){

            if (i+1==slides.length){
                index_block=0
            }
            else index_block=i+1
            slides[i].style.display= "none";
            slides[index_block].style.display="block";
            break;
        }
    }


}
