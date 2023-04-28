document.addEventListener("DOMContentLoaded", () => {
  // Float animation
  function floatAnimation(layer) {
    const amplitude = 5;
    const period = parseFloat(layer.getAttribute('data-float-period')) * 1000;
    const startTime = performance.now();

    function updateFloat() {
      const elapsedTime = performance.now() - startTime;
      const progress = (elapsedTime % period) / period;
      const angle = progress * 2 * Math.PI;
      const y = -amplitude * Math.sin(angle);

      layer.style.transform = `translateY(${y}px)`;

      requestAnimationFrame(updateFloat);
    }

    requestAnimationFrame(updateFloat);
  }

  // техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
  // получить в консоли элемент, по которому кликнули
  document.addEventListener('click', e => console.log(e.target));

  const imgGroup = document.querySelector('.first-screen__bg-images');

  // Запускаем анимацию для всех слоев
  imgGroup.querySelectorAll('.layer').forEach(layer => {
    floatAnimation(layer);
  });

});
