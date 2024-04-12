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



var textos = [
  "Introducción:",
  "Andrés Castillo.",
  "Keren Ariana.",
  "Uriel Flores.",
  "El ardilla."
];


var elementoParaEscribir = document.querySelector('.escribir-texto');


function escribirTexto(texto, indice, callback) {
  if (indice < texto.length) {
      elementoParaEscribir.textContent += texto.charAt(indice);
      indice++;
      setTimeout(function() {
          escribirTexto(texto, indice, callback);
      }, 100); 
  } else if (callback) {
      setTimeout(callback, 1500);
  }
}


function borrarTexto(callback) {
  var texto = elementoParaEscribir.textContent;
  if (texto.length > 0) {
      elementoParaEscribir.textContent = texto.substring(0, texto.length - 1);
      setTimeout(function() {
          borrarTexto(callback);
      }, 50); 
  } else if (callback) {
      callback();
  }
}

function escribirYBorrarFrases(i) {
  if (i < textos.length) {
      escribirTexto(textos[i], 0, function() {
          borrarTexto(function() {
              escribirYBorrarFrases(i + 1); 
          });
      });
  } else {
      escribirYBorrarFrases(0);
  }
}


escribirYBorrarFrases(0);
