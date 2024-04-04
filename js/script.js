const button = document.querySelector('.menuicon')
const menu = document.querySelector('.menu')
const items = document.querySelectorAll('.item')
let visible = true;

function init() {
  if(window.innerWidth >=1024) {
    visible = true;
  } else {
    visible = false;
  }
}

window.addEventListener('resize', init);
init()

const isVisible = () => {
  if (visible === true) {
    visible = false;
    menu.style.display = 'none';
  } else {
    visible = true;
    menu.style.display = 'block';
  }
}

button.addEventListener('click', () => {
  isVisible()
})
items.forEach(item => {
  
  item.addEventListener('click', e => {
    if(window.innerWidth<1200) {
      isVisible()
    }
  })
})