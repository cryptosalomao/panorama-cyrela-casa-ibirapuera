const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/bothanic.jpg',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  markers: [
    // Acessos
    {
      id: 'marker1',
      longitude: 1.03,
      latitude: -0.24,
      html: `<span class='description'>Metrô Brooklin</span>
             <img src='./img/pin-yellow.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
      tooltip: {
        content: '6min caminhando | 450m'
      }
    },
    {
      id: 'marker2',
      longitude: -0.06,
      latitude: -0.48,
      html: `<span class='description'>Avenida Roque Petroni Júnior</span>
             <img src='./img/pin-yellow.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
      tooltip: {
        content: '1min de carro | 300m'
      }
    },
    {
      id: 'marker3',
      longitude: 1.71,
      latitude: -0.36,
      html: `<span class='description'>Avenida Santo Amaro</span>
              <img src='./img/pin-yellow.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
      tooltip: {
        content: '1min de carro | 300m'
      }
    },
    {
      id: 'marker4',
      longitude: -1.35,
      latitude: -0.18,
      html: `<span class='description'>Avenida Chucri Zaidan</span>
             <img src='./img/pin-yellow.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
      tooltip: {
        content: '4 minutos | 1,2km'
      }
    },
    {
      id: 'marker5',
      longitude: -0.78,
      latitude: -0.18,
      html: `<span class='description'>Avenida Berrini</span>
             <img src='./img/pin-yellow.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso hide-show',
      tooltip: {
        content: '6min de carro | 2,2km'
      }
    },
    {
      id: 'marker6',
      longitude: -0.26,
      latitude: 0.01,
      html: `<span class='description'>Núcleo Faria Lima</span>
             <img src='./img/pin-yellow.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
      tooltip: {
        content: '13min | 6,7km'
      }
    },
    {
      id: 'marker7',
      longitude: 1.91,
      latitude: 0.01,
      html: `<span class='description'>Aeroporto de Congonhas</span>
             <img src='./img/pin-yellow.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso hide-show',
      tooltip: {
        content: '12min | 4,6km'
      }
    },
    // Gastronomia
    {
      id: 'marker8',
      longitude: 0.49,
      latitude: -0.14,
      html: `<span class='description'>Portucho</span>
             <img src='./img/pin-purple.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'gastronomia hide-show',
      tooltip: {
        content: '3min | 750m'
      }
    },
    {
      id: 'marker9',
      longitude: 0.37,
      latitude: -0.17,
      html: `<span class='description'>Vicolo Nostro</span>
             <img src='./img/pin-purple.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'gastronomia',
      tooltip: {
        content: '3min | 750m'
      }
    },
    {
      id: 'marker10',
      longitude: -0.98,
      latitude: -0.08,
      html: `<span class='description'>Fazenda Churrascada</span>
             <img src='./img/pin-purple.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'gastronomia hide-show',
      tooltip: {
        content: '11min | 4km'
      }
    },
    {
      id: 'marker11',
      longitude: 1.13,
      latitude: -0.07,
      html: `<span class='description'>Bar do Juarez</span>
             <img src='./img/pin-purple.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'gastronomia',
      tooltip: {
        content: '6min | 2,1km'
      }
    },
    {
      id: 'marker12',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Churrascaria South's Place</span>
             <img src='./img/pin-purple.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'gastronomia',
      tooltip: {
        content: '4min | 1,1km'
      }
    },
    // Conveniência
    {
      id: 'static1',
      longitude: -1.21,
      latitude: -0.18,
      html: `<span class='description'>Shopping Morumbi</span>
             <img src='./img/pin-blue.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
      tooltip: {
        content: '4min | 1,0km'
      }
    },
    {
      id: 'static2',
      longitude: -1.10,
      latitude: -0.11,
      html: `<span class='description'>Shopping Market Place</span>
             <img src='./img/pin-blue.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: '8min | 2,4km'
      }
    },
    {
      id: 'static3',
      longitude: 1.51,
      latitude: -0.36,
      html: `<span class='description'>Pão de Açúcar</span>
             <img src='./img/pin-blue.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
      tooltip: {
        content: '2min | 600m'
      }
    },
    {
      id: 'static4',
      longitude: 0.92,
      latitude: -0.18,
      html: `<span class='description'>Carrefour</span>
             <img src='./img/pin-blue.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
      tooltip: {
        content: '5min | 1,5km'
      }
    },
    {
      id: 'static5',
      longitude: -1.58,
      latitude: -0.05,
      html: `<span class='description'>Extra</span>
             <img src='./img/pin-blue.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
      tooltip: {
        content: '10min | 3,8km'
      }
    },
    // Academias
    {
      id: 'static6',
      longitude: 0.11,
      latitude: -0.16,
      html: `<span class='description'>Smart Fit</span>
             <img src='./img/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'hospital hide-show',
      tooltip: {
        content: '4min | 1,1km'
      }
    },
    {
      id: 'static7',
      longitude: 1.41,
      latitude: -0.06,
      html: `<span class='description'>Brooklin Tennis</span>
             <img src='./img/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'hospital hide-show',
      tooltip: {
        content: '7min | 2,5km'
      }
    },
    // Hospital
    {
      id: 'static8',
      longitude: 0.67,
      latitude: -0.07,
      html: `<span class='description'>Hospital Santa Paula</span>
             <img src='./img/pin-orange.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'hospital hide-show',
      tooltip: {
        content: '12min | 4,8km'
      }
    },
    {
      id: 'static9',
      longitude: -0.91,
      latitude: -0.04,
      html: `<span class='description'>Hospital Albert Einstein Morumbi</span>
             <img src='./img/pin-orange.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'hospital hide-show',
      tooltip: {
        content: '15min | 5,7km'
      }
    },
    // Parques
    {
      id: 'static10',
      longitude: -0.47,
      latitude: -0.05,
      html: `<span class='description'>Parque do Povo</span>
             <img src='./img/pin-green.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'parque hide-show',
      tooltip: {
        content: '12min | 6,0km'
      }
    },
    {
      id: 'static11',
      longitude: -1.72,
      latitude: -0.05,
      html: `<span class='description'>Parque Burle Marx</span>
             <img src='./img/pin-green.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'parque',
      tooltip: {
        content: '12min | 5,8km'
      }
    },
    {
      id: 'static15',
      longitude: -2.11,
      latitude: -0.15,
      html: `<span class='description'>Parque Severo Gomes</span>
             <img src='./img/pin-green.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'parque hide-show',
      tooltip: {
        content: '7min | 2,4km'
      }
    },
    {
      id: 'static16',
      longitude: 0.87,
      latitude: -0.07,
      html: `<span class='description'>Parque Ibirapuera</span>
             <img src='./img/pin-green.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'parque',
      tooltip: {
        content: '16min | 6,7km'
      }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
