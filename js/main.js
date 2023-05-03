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

if (document.documentElement.clientWidth > 715) {
  gsap.utils.toArray('.product-card__photo img').forEach(photo => {
    gsap.from(photo, {
      opacity: 0,
      scale: 0.5,
      // translateY: 50,
      translateX: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: photo,
        start: 'top 90%',
        end: 'bottom 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });

  gsap.utils.toArray('.product-card__details').forEach(photo => {
    gsap.from(photo, {
      opacity: 0,
      scale: 0.5,
      translateX: -50,
      // translateX: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: photo,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });
}


  gsap.fromTo('.first-screen__logo', {
    opacity: 0,
    y: -50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.fromTo(['.first-screen .title', '.first-screen .subtitle'], {
    opacity: 0,
    y: -50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
  });

  gsap.fromTo('.advantages__item', {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
  });

  // задаем начальное положение для изображений
  gsap.set('.first-screen__bg-images img', { y: -100, opacity: 0 });

  // анимируем появление изображений
  gsap.fromTo('.first-screen__bg-images img', {
    opacity: 0,
    y: -100,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
  });


});
