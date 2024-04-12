document.addEventListener('DOMContentLoaded', function () {
  var animation = bodymovin.loadAnimation({
    container: document.querySelector('.animacion-molecular'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './files/Animation - 1712866009566.json'
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const listaElementos = document.querySelectorAll('.lista');

  listaElementos.forEach(element => {
      element.addEventListener('click', function() {

          listaElementos.forEach(el => {
              el.classList.remove('seleccionado');
          });

          this.classList.add('seleccionado');
          console.log(this.classList);
      });
  });
});
