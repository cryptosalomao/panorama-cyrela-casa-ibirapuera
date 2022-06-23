const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const markers = [
  ['park', -1.44, -0.18, 'Parque Ibirapuera', 'green', '3min'],
  ['park', 3.25, -0.18, 'Parque das Bicicletas', 'green', '8min'],
  ['park', -1.92, -0.68, 'Clube Ipê', 'green', '6min'],
  ['park', -2.76, -0.12, 'Clube Monte Líbano', 'green', '7min'],
  
  ['culture', 0.24, -0.31, 'Cinemateca', 'purple', '3min'],
  ['culture', 1.49, -0.32, 'Teatro Popular João Caetano', 'purple', '4min'],
  ['culture', 3.36, -0.04, 'Shopping Ibirapuera', 'purple', '11min'],
  ['culture', 1.31, -0.05, 'Shopping Santa Cruz', 'purple', '7min'],
  
  ['health', 2.95, -0.45, 'Hospital AACD', 'red', '6min'],
  ['health', -2.68, -0.28, 'Hospital do Servidor', 'red', '6min'],
  ['health', -2.72, -0.68, 'Hospital Edmundo de Vasconcelos', 'red', '6min'],
  ['health', 1.73, -0.28, 'Drogaria São Paulo', 'red', '8min'],
  ['health', 1.50, -0.26, 'Droga Raia', 'red', '6min'],
  ['health', 1.87, -0.21, 'Drogasil', 'red', '6min'],
  ['health', -0.42, -0.34, 'Farma Life', 'red', '4min'],
  
  ['school', -0.84, -0.1, 'Colégio São Luís', 'blue', '2min'],
  ['school', 0.68, -0.18, 'Belas Artes', 'blue', '7min'],
  ['school', 0.72, -0.08, 'ESPM', 'blue', '6min'],
  
  ['food', -0.82, -0.18, 'Vista Restaurante', 'orange', '2min'],
  ['food', 0.48, -0.21, 'Pizzaria Quintal do Braz', 'orange', '4min'],
  ['food', 1.12, -0.25, 'Pizzaria 1900', 'orange', '3min'],
  ['food', 1.81, -0.18, 'Padaria Villa Grano', 'orange', '5min'],
  
  ['market', 0.59, -0.10, 'Natural da Terra', 'yellow', '5min'],
  ['market', 1.50, -0.03, 'Oba Hortifruti', 'yellow', '10min'],
  ['market', 0.76, -0.05, 'Supermercado Pastorinho', 'yellow', '5min'],
  ['market', 2.59, -0.21, 'Pão de Açúcar', 'yellow', '7min'],
  
  ['subway', 2.95, -0.33, 'Metrô AACD Servidor', 'purple', '5min'],
  
  ['access', 2.95, -0.11, 'Av. República do Líbano', 'purple', '-'],
  ['access', 3.42, -0.06, 'Av. Ibirapuera', 'purple', '-'],
  ['access', 2.51, -0.02, 'Av. Indianópolis', 'purple', '-'],
  ['access', 2.79, -0.02, 'Av. dos Bandeirantes', 'purple', '-'],
  ['access', -0.63, -0.08, 'Av. 23 de Maio', 'purple', '-'],
  ['access', -0.10, -0.54, 'Av. Sena Madureira', 'purple', '-'],
  ['access', 1.01, -0.05, 'Av. Domingos de Moraes', 'purple', '-'],
  ['access', -0.63, -1.22, 'Rua Estado de Israel', 'purple', '-'],
  ['access', 2.56, -1.09, 'Rua Diogo de Faria', 'purple', '-'],
  ['access', 2.56, -0.58, 'Rua Borges Lagoa', 'purple', '-'],
  ['access', 2.58, -0.41, 'Rua Pedro de Toledo', 'purple', '-'],
  ['access', 2.46, -0.32, 'Rua Loefgreen', 'purple', '-'],
];

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/tbd-map.jpg',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  markers: markers.map((marker, id) => {
    return {
      id: `marker-${id}`,
      longitude: marker[1],
      latitude: marker[2],
      html: `<span class='description'>${marker[3]}</span>
            <img src='./img/pin-${marker[4]}.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: marker[0],
      tooltip: {
        content: marker[5]
      }
    }
  })
});
