
document.addEventListener('DOMContentLoaded', function () {
  var animation = bodymovin.loadAnimation({
    container: document.querySelector('.animacion-molecular'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './files/Animation - 1712866009566.json'
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
    setTimeout(function () {
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
    setTimeout(function () {
      borrarTexto(callback);
    }, 50);
  } else if (callback) {
    callback();
  }
}

function escribirYBorrarFrases(i) {
  if (i < textos.length) {
    escribirTexto(textos[i], 0, function () {
      borrarTexto(function () {
        escribirYBorrarFrases(i + 1);
      });
    });
  } else {
    escribirYBorrarFrases(0);
  }
}


escribirYBorrarFrases(0);




const modalBackdrop = document.createElement('div');
modalBackdrop.className = 'modal-backdrop';
document.body.appendChild(modalBackdrop);

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('open');
  modalBackdrop.classList.add('open');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('open');
  });
  modalBackdrop.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.lineal.figura-v').addEventListener('click', function() {
    openModal('modalLineal');
  });

  document.querySelector('.trigonal.figura-v').addEventListener('click', function() {
    openModal('modalTrigonal');
  });

  document.querySelector('.tetraedrica.figura-v').addEventListener('click', function() {
    openModal('modalTetraedrica');
  });

  document.querySelector('.bitrigonal.figura-v').addEventListener('click', function() {
    openModal('modalBitrigonal');
  });

  document.querySelector('.octaedrica.figura-v').addEventListener('click', function() {
    openModal('modalOctaedrica');
  });


  modalBackdrop.addEventListener('click', closeModal);


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const listaElementos = document.querySelectorAll('.lista');
  const element = document.querySelector('#contenedor');
  const config = { backgroundColor: '0xf0f8ff' };
  let viewer = $3Dmol.createViewer(element, config);

  function addSingleSphere() {
    viewer.removeAllModels();
    viewer.removeAllShapes();
    viewer.addSphere({
      center: { x: 0, y: 0, z: 0 },
      radius: 1.0,
      color: '0x0f4f99'
    });
    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }

  function addLinearGeometry() {

    viewer.removeAllModels();
    viewer.removeAllShapes();


    const sphereColor = '0x0472F1';
    const cylinderColor = '0xffffff';


    viewer.addSphere({ center: { x: -2.5, y: 0, z: 0 }, radius: 1.0, color: sphereColor });
    viewer.addSphere({ center: { x: 0, y: 0, z: 0 }, radius: 1.2, color: 0x0f4f99 });
    viewer.addSphere({ center: { x: 2.5, y: 0, z: 0 }, radius: 1.0, color: sphereColor });


    viewer.addCylinder({
      start: { x: -1.5, y: 0, z: 0 },
      end: { x: 0, y: 0, z: 0 },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });
    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 1.5, y: 0, z: 0 },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });
  }

  function addTrigonalPlanarGeometry() {

    viewer.removeAllModels();
    viewer.removeAllShapes();


    const sphereColor = '0x0472F1';
    const cylinderColor = '0xffffff';


    viewer.addSphere({ center: { x: 0, y: 0, z: 0 }, radius: 1.2, color: 0x0f4f99 });


    const radius = 2.5;
    const angle = 120;
    const radiansConversion = Math.PI / 180;


    for (let i = 0; i < 3; i++) {
      const x = radius * Math.cos(i * angle * radiansConversion);
      const y = radius * Math.sin(i * angle * radiansConversion);
      viewer.addSphere({ center: { x: x, y: y, z: 0 }, radius: 1.0, color: sphereColor });


      viewer.addCylinder({
        start: { x: 0, y: 0, z: 0 },
        end: { x: x, y: y, z: 0 },
        radius: 0.1,
        color: cylinderColor,
        fromCap: 0,
        toCap: 0
      });
    }


    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }

  function addTetrahedralGeometry() {
    viewer.removeAllModels();
    viewer.removeAllShapes();

    const sphereColor = '0x0472F1';
    const cylinderColor = '0xffffff';
    const centralSphereColor = '0x0f4f99';

    viewer.addSphere({ center: { x: 0, y: 0, z: 0 }, radius: 1.2, color: centralSphereColor });

    const radius = 2.5;
    const angle = 109.5;
    const radiansConversion = Math.PI / 180;

    const points = [
      { x: Math.sqrt(8 / 9), y: 0, z: -1 / 3 },
      { x: -Math.sqrt(2 / 9), y: Math.sqrt(2 / 3), z: -1 / 3 },
      { x: -Math.sqrt(2 / 9), y: -Math.sqrt(2 / 3), z: -1 / 3 },
      { x: 0, y: 0, z: 1 }
    ];

    points.forEach(point => {
      const x = point.x * radius;
      const y = point.y * radius;
      const z = point.z * radius;
      viewer.addSphere({ center: { x: x, y: y, z: z }, radius: 1.0, color: sphereColor });
      viewer.addCylinder({
        start: { x: 0, y: 0, z: 0 },
        end: { x: x, y: y, z: z },
        radius: 0.1,
        color: cylinderColor,
        fromCap: 0,
        toCap: 0
      });
    });

    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }

  function addTrigonalBipyramidalGeometry() {
    viewer.removeAllModels();
    viewer.removeAllShapes();

    const sphereColor = '0x0472F1';
    const cylinderColor = '0xffffff';
    const centralSphereColor = '0x0f4f99';


    viewer.addSphere({ center: { x: 0, y: 0, z: 0 }, radius: 1.2, color: centralSphereColor });

    const radius = 2.5;
    const planeAngle = 120;
    const radiansConversion = Math.PI / 180;


    for (let i = 0; i < 3; i++) {
      const x = radius * Math.cos(i * planeAngle * radiansConversion);
      const y = radius * Math.sin(i * planeAngle * radiansConversion);
      viewer.addSphere({ center: { x: x, y: y, z: 0 }, radius: 1.0, color: sphereColor });
      viewer.addCylinder({
        start: { x: 0, y: 0, z: 0 },
        end: { x: x, y: y, z: 0 },
        radius: 0.1,
        color: cylinderColor,
        fromCap: 0,
        toCap: 0
      });
    }

    viewer.addSphere({ center: { x: 0, y: 0, z: radius }, radius: 1.0, color: sphereColor });
    viewer.addSphere({ center: { x: 0, y: 0, z: -radius }, radius: 1.0, color: sphereColor });
    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 0, y: 0, z: radius },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });
    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 0, y: 0, z: -radius },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });

    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }


  function addOctahedralGeometry() {
    viewer.removeAllModels();
    viewer.removeAllShapes();

    const sphereColor = '0x0472F1';
    const cylinderColor = '0xffffff';
    const centralSphereColor = '0x0f4f99';


    viewer.addSphere({ center: { x: 0, y: 0, z: 0 }, radius: 1.2, color: centralSphereColor });

    const radius = 2.5;


    const squareAngle = 90;
    const radiansConversion = Math.PI / 180;


    for (let i = 0; i < 4; i++) {
      const x = radius * Math.cos(i * squareAngle * radiansConversion);
      const y = radius * Math.sin(i * squareAngle * radiansConversion);
      viewer.addSphere({ center: { x: x, y: y, z: 0 }, radius: 1.0, color: sphereColor });
      viewer.addCylinder({
        start: { x: 0, y: 0, z: 0 },
        end: { x: x, y: y, z: 0 },
        radius: 0.1,
        color: cylinderColor,
        fromCap: 0,
        toCap: 0
      });
    }

    viewer.addSphere({ center: { x: 0, y: 0, z: radius }, radius: 1.0, color: sphereColor });
    viewer.addSphere({ center: { x: 0, y: 0, z: -radius }, radius: 1.0, color: sphereColor });
    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 0, y: 0, z: radius },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });
    viewer.addCylinder({
      start: { x: 0, y: 0, z: 0 },
      end: { x: 0, y: 0, z: -radius },
      radius: 0.1,
      color: cylinderColor,
      fromCap: 0,
      toCap: 0
    });

    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }



  addSingleSphere();

  listaElementos.forEach((element, index) => {
    element.addEventListener('click', function () {

      listaElementos.forEach(el => {
        el.classList.remove('seleccionado');
      });


      this.classList.add('seleccionado');


      switch (index) {
        case 0:
          addSingleSphere();
          break;
        case 1:
          addLinearGeometry();
          break;
        case 2:
          addTrigonalPlanarGeometry();
          break;
        case 3:
          addTetrahedralGeometry();
          break;
        case 4:
          addTrigonalBipyramidalGeometry();
          break;
        case 5:
          addOctahedralGeometry();
          break;
      }

      viewer.zoomTo();
      viewer.render();
      viewer.zoom(0.8, 2000);
    });
  });
});
