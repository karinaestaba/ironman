const animatedElements = document.getElementsByClassName('listening');

const loadImage = (inputs, observer) => {
  inputs.forEach(input => {
    if(input.isIntersecting)    {
      input.target.classList.add('animated');
    }
  });
}

const observer = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.1
});

for(const nodeElement of animatedElements) {
  observer.observe(nodeElement);
}