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
      html: `<span class='description'>Av. Bandeirantes</span>
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
        content: '150m'
      }
    },
    {
      id: 'marker2',
      longitude: -0.06,
      latitude: -0.48,
      html: `<span class='description'>Av. Ibirapuera</span>
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
        content: '140m'
      }
    },
    {
      id: 'marker3',
      longitude: 1.71,
      latitude: -0.36,
      html: `<span class='description'>Av. Vereador José Diniz</span>
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
        content: '900m'
      }
    },
    {
      id: 'marker4',
      longitude: -1.35,
      latitude: -0.18,
      html: `<span class='description'>Ponte Cidade Jardim</span>
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
        content: '12 min'
      }
    },
    {
      id: 'marker5',
      longitude: -0.78,
      latitude: -0.18,
      html: `<span class='description'>Faria Lima X Juscelino</span>
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
        content: '15 min'
      }
    },
    {
      id: 'marker6',
      longitude: -0.26,
      latitude: 0.01,
      html: `<span class='description'>Estação Eucaliptos</span>
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
        content: '950mts'
      }
    },
    {
      id: 'marker7',
      longitude: 1.91,
      latitude: 0.01,
      html: `<span class='description'>Estação Campo Belo</span>
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
        content: '1,9Km'
      }
    },
    {
      id: 'marker14',
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
        content: '1,8Km'
      }
    },
    // Gastronomia
    {
      id: 'marker8',
      longitude: 0.49,
      latitude: -0.14,
      html: `<span class='description'>Zi Tereza</span>
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
        content: '1,2km'
      }
    },
    {
      id: 'marker9',
      longitude: 0.37,
      latitude: -0.17,
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
        content: '2,3km'
      }
    },
    {
      id: 'marker10',
      longitude: -0.98,
      latitude: -0.08,
      html: `<span class='description'>Bar e Restaurante Jeitinho de Minas</span>
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
        content: '700m'
      }
    },
    {
      id: 'marker11',
      longitude: 1.13,
      latitude: -0.07,
      html: `<span class='description'>Agello Cucina</span>
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
        content: '1,8km'
      }
    },
    {
      id: 'marker12',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>La Paella</span>
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
        content: '800m'
      }
    },
    {
      id: 'marker121',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Sensi Gastronomia</span>
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
        content: '1,9km'
      }
    },
    {
      id: 'marker122',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>La Cucina di Casa</span>
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
        content: '1,9km'
      }
    },
    {
      id: 'marker123',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Pizzaria Leona</span>
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
        content: '650m'
      }
    },
    {
      id: 'marker124',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Padaria Firenze</span>
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
        content: '1km'
      }
    },
    {
      id: 'marker125',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Padaria Sta Marcelina</span>
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
        content: '1km'
      }
    },
    {
      id: 'marker126',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Padaria Trigueira</span>
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
        content: '450m'
      }
    },
    {
      id: 'marker127',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Padaria Alfamas</span>
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
        content: '1,5km'
      }
    },{
      id: 'marker128',
      longitude: -0.72,
      latitude: -0.38,
      html: `<span class='description'>Padaria Colonial</span>
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
        content: '1,2km'
      }
    },
    // Conveniência
    {
      id: 'static1',
      longitude: -1.21,
      latitude: -0.18,
      html: `<span class='description'>Shopping Ibirapuera</span>
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
        content: '900m'
      }
    },
    {
      id: 'static2',
      longitude: -1.10,
      latitude: -0.11,
      html: `<span class='description'>Pão de Açúcar (Vieira de Moraes)</span>
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
        content: '1,3 km'
      }
    },
    {
      id: 'static3',
      longitude: 1.51,
      latitude: -0.36,
      html: `<span class='description'>Pão de Açúcar (Maracatins)</span>
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
        content: '1,6 km'
      }
    },
    {
      id: 'static4',
      longitude: 0.92,
      latitude: -0.18,
      html: `<span class='description'>Natural da Terra (Nhambiquaras)</span>
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
        content: '800m'
      }
    },
    {
      id: 'static5',
      longitude: -1.58,
      latitude: -0.05,
      html: `<span class='description'>Mambo (Joaquim Nabuco)</span>
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
        content: '2,3km'
      }
    },{
      id: 'static35',
      longitude: -1.58,
      latitude: -0.05,
      html: `<span class='description'>Hortfruti Campo Belo</span>
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
        content: '1,2Km'
      }
    },
    // Academias
    {
      id: 'static6',
      longitude: 0.11,
      latitude: -0.16,
      html: `<span class='description'>Tecfit Campo Belo</span>
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
        content: '350m'
      }
    },
    {
      id: 'static71',
      longitude: 1.41,
      latitude: -0.06,
      html: `<span class='description'>Bio Ritmo</span>
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
        content: '850m'
      }
    },
    {
      id: 'static72',
      longitude: 1.41,
      latitude: -0.06,
      html: `<span class='description'>Parque Ibirapuera</span>
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
        content: '3,5Km'
      }
    },
    // Hospital
    {
      id: 'static81',
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
        content: '2,2Km'
      }
    },
    {
      id: 'static92',
      longitude: -0.91,
      latitude: -0.04,
      html: `<span class='description'>Hospital Alvorada</span>
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
        content: '2,5Km'
      }
    },
    {
      id: 'static93',
      longitude: -0.91,
      latitude: -0.04,
      html: `<span class='description'>Droga Raia</span>
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
        content: '450mts'
      }
    },
    {
      id: 'static94',
      longitude: -0.91,
      latitude: -0.04,
      html: `<span class='description'>Drogaria São Paulo</span>
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
        content: '300mts'
      }
    },
    // Escolas
    {
      id: 'static10',
      longitude: -0.47,
      latitude: -0.05,
      html: `<span class='description'>Colégio Magno</span>
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
        content: '900m'
      }
    },
    {
      id: 'static11',
      longitude: -1.72,
      latitude: -0.05,
      html: `<span class='description'>Vértice</span>
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
        content: '1,3Km'
      }
    },
    {
      id: 'static15',
      longitude: -2.11,
      latitude: -0.15,
      html: `<span class='description'>Consa</span>
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
        content: '2,8km'
      }
    },
    {
      id: 'static16',
      longitude: 0.87,
      latitude: -0.07,
      html: `<span class='description'>Augusto Laranja</span>
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
        content: '1km'
      }
    },
    {
      id: 'static17',
      longitude: 0.87,
      latitude: -0.07,
      html: `<span class='description'>Mobile</span>
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
        content: '3,1km'
      }
    },
    {
      id: 'static18',
      longitude: 0.87,
      latitude: -0.07,
      html: `<span class='description'>Stockler</span>
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
        content: '2km'
      }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
