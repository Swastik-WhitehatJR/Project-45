const preloader = document.getElementById('loader')

window.addEventListener('load',
  function () {
    setTimeout(() => {
      preloader.style.transition = "1s ease"
      preloader.style.opacity = "0"
      preloader.style.zIndex = "-10000"
      setTimeout(() => {
        preloader.parentNode.removeChild(preloader);
      }, 1000);
    }, 2500);
  });