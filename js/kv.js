var wrapper = document.querySelector('.kvtop svg')


// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  if (wrapper !== null) {
    wrapper.classList.add('active');
  }
}

// Play draw animation once
setTimeout(draw, 300)





