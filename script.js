function changeSlidesLeft() {
  let indexBlock = 0;
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i += 1) {
    if (slides[i].style.display === 'block') {
      if (i === 0) {
        indexBlock = slides.length - 1;
      } else indexBlock = i - 1;
      slides[i].style.display = 'none';
      slides[indexBlock].style.display = 'block';
      break;
    }
  }
}

function changeSlidesRight() {
  let indexBlock = 0;
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i += 1) {
    if (slides[i].style.display === 'block') {
      if (i + 1 === slides.length) {
        indexBlock = 0;
      } else indexBlock = i + 1;
      slides[i].style.display = 'none';
      slides[indexBlock].style.display = 'block';
      break;
    }
  }
}

