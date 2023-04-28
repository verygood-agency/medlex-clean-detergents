document.addEventListener("DOMContentLoaded", () => {
  // техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
  // получить в консоли элемент, по которому кликнули
  document.addEventListener('click', e => console.log(e.target));


  const imgGroup = document.querySelector('.first-screen__bg-images');
const imgPositions = {};

function updateImgPositions() {
  imgGroup.querySelectorAll('.layer').forEach(layer => {
    imgPositions[layer] = {
      x: layer.offsetLeft + layer.offsetWidth / 2,
      y: layer.offsetTop + layer.offsetHeight / 2,
    };
  });
}

function parallax(e) {
  imgGroup.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const pos = imgPositions[layer];
    const x = (pos.x - e.pageX) * speed / 100;
    const y = (pos.y - e.pageY) * speed / 100;

    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
};

if (screen.width > 1024) {
  updateImgPositions();
  document.addEventListener('mousemove', parallax);
  window.addEventListener('resize', updateImgPositions);
}


});


