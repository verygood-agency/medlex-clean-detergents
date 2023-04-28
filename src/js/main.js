document.addEventListener("DOMContentLoaded", () => {
  // техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
  // получить в консоли элемент, по которому кликнули
  document.addEventListener('click', e => console.log(e.target));


  const imgGroup = document.querySelector('.first-screen__bg-images');
  function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      console.log('Событие есть!');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
  };

  if (screen.width > 1024) {
      document.addEventListener('mousemove', parallax);
  }

});


