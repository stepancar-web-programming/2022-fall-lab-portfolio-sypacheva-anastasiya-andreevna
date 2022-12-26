let indexSlide = 1

function makeSlide(index_slide){
  const slides = document.getElementsByClassName('slide');
  if (indexSlide<1){
    indexSlide = slides.length;
  }
  else if (index_slide>slides.length){
    indexSlide=1
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[indexSlide - 1].style.display = 'block';

}


function changeSlidesLeft(){
   makeSlide(indexSlide-=1)
}

function changeSlidesRight(){
  makeSlide(indexSlide+=1)
}
