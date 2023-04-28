document.addEventListener("DOMContentLoaded", () => {
  // техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
  // получить в консоли элемент, по которому кликнули
  document.addEventListener('click', e => console.log(e.target));


  const elem = document.querySelector('.first-screen__bg-images');
  elem.addEventListener('mousemove', parallax);

  function parallax(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const depth = `${50 - mouseX * 0.01}% ${50 - mouseY * 0.01}%`;

    elem.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (50 - mouseX * speed * 0.01);
      const y = (50 - mouseY * speed * 0.01);

      const style = getComputedStyle(layer);
      const left = parseFloat(style.left);
      const top = parseFloat(style.top);

      layer.style.transform = `translateX(${x + left}px) translateY(${y + top}px)`;
    });

    elem.style.backgroundPosition = depth;
  }



});


