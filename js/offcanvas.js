document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.btn-drop').forEach(function (element) {
      element.addEventListener('click', function () {
          let drop= document.querySelector('.btn-drop');
          drop.classList.remove('iconly-Arrow-Right-2');
          drop.classList.add('iconly-Arrow-Down-2')
      });
    })
  });