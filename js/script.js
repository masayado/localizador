mapa();
filtrarTiendas();

function filtrarTiendas(){
    $( ".event-type-select" ).change(function() {
        var selectedEventType = this.options[this.selectedIndex].value;
        if (selectedEventType == "todas") {
          $('.tiendas__lista .texto').removeClass('hidden');
        } else {
          $('.tiendas__lista .texto').addClass('hidden');
          $('.tiendas__lista .texto[data-eventtype="' + selectedEventType + '"]').removeClass('hidden');
        }
      });
};

function mapa(){

  L.mapbox.accessToken = 'pk.eyJ1IjoibXNheWFkbyIsImEiOiJja2p1NWJ6ZnEwNGpnMnludzM2YXNpdGlpIn0.jvqHa9Cu2DD7OLGsYC8tMw';
  var geojson = [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.3089763,
              -18.4702559
              ]
            },
            "properties": {
              "phone": "22 578 1543",
              "name": "Coliseum Arica",
              "address": "Avenida Diego Portales 640. Local Nº A-1154 / A-1158, Mall Plaza Arica, Arica.",
              "mail": "coliseum.arica@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "arica"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.1449784,
              -20.2327283
              ]
            },
            "properties": {
              "phone": "22 578 1594",
              "name": "Coliseum Iquique",
              "address": "Av. Heroes de la Concepción 2555. Local N° 2555, Mall Plaza Iquique, Iquique.",
              "mail": "coliseum.iquique@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "iquique"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.403598,
              -23.6474839
              ]
            },
            "properties": {
              "phone": "22 578 1590",
              "name": "Converse Plaza Antofagasta",
              "address": "Avda. Balmaceda 2355. Local N° L-216b / L-218b / L-220b / L-284, Mall Plaza Antofagasta, Antofagasta.",
              "mail": "converse.antofagasta@cdepor.cl",
              "brands": "Converse",
              "region": "antofagasta"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -71.2604044,
              -29.9144443
              ]
            },
            "properties": {
              "phone": "22 578 1591",
              "name": "Converse Plaza La Serena",
              "address": "Huanhualí 105. Local N° BA-178. Mall Plaza La Serena, La Serena.",
              "mail": "converse.serena@cdepor.cl",
              "brands": "Converse",
              "region": "la-serena"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -71.339852,
              -29.9580132
              ]
            },
            "properties": {
              "phone": "22 578 1540",
              "name": "Coliseum Coquimbo",
              "address": "Varela 1524. Local N° 3128, Mall Vivo Coquimbo, Coquimbo.",
              "mail": "coliseum.coquimbo@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "coquimbo"
              
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -71.5505878,
              -33.0087063
              ]
            },
            "properties": {
              "phone": "22 578 1596",
              "name": "Converse Marina Arauco",
              "address": "Av. Libertad 1348. Local N° 203, Mall Marina Arauco, Viña del Mar.",
              "mail": "converse.marina@cdepor.cl",
              "brands": "Converse",
              "region": "vina-del-mar"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6567814,
              -33.4251454
              ]
            },
            "properties": {
              "phone": "22 578 1545",
              "name": "Converse Barrio Independencia",
              "address": "Av. Independencia 565. Local N° TM 314, Mall Barrio Independencia, Independencia.",
              "mail": "converse.independencia@cdepor.cl",
              "brands": "Converse",
              "region": "barrio-independencia"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.5424449,
              -33.4155275
              ]
            },
            "properties": {
              "phone": "22 578 1598",
              "name": "Coliseum Plaza Los Dominicos",
              "address": "Avenida Padre Hurtado Sur N° 875. Local N° B-3088 / B-3092 / B-3096B-3100, Mall Plaza Los Dominicos, Las Condes.",
              "mail": "coliseum.dominicos@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "dominicos"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.5424449,
              -33.4155275
              ]
            },
            "properties": {
              "phone": "22 578 1597",
              "name": "Converse Plaza Los Dominicos",
              "address": "Avenida Padre Hurtado Sur 875. Local: N° B-3040 / B-3044 / B-3048, Mall Plaza Los Dominicos, Las Condes.",
              "mail": "converse.dominicos@cdepor.cl",
              "brands": "Converse",
              "region": "dominicos"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.5174551,
              -33.3575796
              ]
            },
            "properties": {
              "phone": "22 578 1575",
              "name": "Converse Portal La Dehesa",
              "address": "Avda. La Dehesa 1445. Local N° 2043, Lo Barnechea, Santiago.",
              "mail": "converse.dehesa@cdepor.cl",
              "brands": "Converse",
              "region": "la-dehesa"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.54839,
              -33.3908833
              ]
            },
            "properties": {
              "phone": "22 578 1583",
              "name": "Converse Alto Las Condes",
              "address": "Avda. Presidente Kennedy 9001. Local N° 3025, Las Condes, Santiago.",
              "mail": "converse.alc@cdepor.cl",
              "brands": "Converse",
              "region": "alto-las-condes"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.5804381,
              -33.4021934
              ]
            },
            "properties": {
              "phone": "22 578 1579",
              "name": "Converse Parque Arauco",
              "address": "Avda. Presidente Kennedy 5413. Local N° 384, Las Condes, Santiago.",
              "mail": "converse.parauco@cdepor.cl",
              "brands": "Converse",
              "region": "parque-arauco"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.609716,
              -33.4178988
              ]
            },
            "properties": {
              "phone": "22 578 1582",
              "name": "Converse Costanera Center",
              "address": "Avda. Andrés Bello 2425. Local N° 41220, Providencia, Santiago.",
              "mail": "converse.costanera@cdepor.cl",
              "brands": "Converse",
              "region": "costanera-center"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6087972,
              -33.5113257
              ]
            },
            "properties": {
              "phone": "22 578 1589",
              "name": "Converse Florida Center",
              "address": "Av. Vicuña Mackenna Ote. 6100. Local N° 3062, La Florida, Santiago.",
              "mail": "converse.florida@cdepor.cl",
              "brands": "Converse",
              "region": "florida-center"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6024868,
              -33.5190272
              ]
            },
            "properties": {
              "phone": "22 578 1578",
              "name": "Converse Plaza Vespucio",
              "address": "Avda. Vicuña Mackenna 7110. Local N° 380B-381B-402-403, La Florida, Santiago.",
              "mail": "converse.vespucio@cdepor.cl",
              "brands": "Converse",
              "region": "plaza-vespucio"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6024868,
              -33.5190272
              ]
            },
            "properties": {
              "phone": "22 578 1573",
              "name": "Umbro / Hi Tec Plaza Vespucio",
              "address": "Avda. Vicuña Mackenna 7110. Local N° 414-415, La Florida, Santiago.",
              "mail": "uh.vespucio@cdepor.cl",
              "brands": "Umbro y Hi Tec",
              "region": "plaza-vespucio"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6504964,
              -33.4396499
              ]
            },
            "properties": {
              "phone": "22 578 1541",
              "name": "Converse Imperio",
              "address": "Huérfanos 830. Local N° 209-2011, Santiago, Santiago.",
              "mail": "converse.imperop@cdepor.cl",
              "brands": "Converse",
              "region": "imperio"
            }
          },          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.7195414,
              -33.5172485
              ]
            },
            "properties": {
              "phone": "22 578 1571",
              "name": "Coliseum Plaza Oeste",
              "address": "Avda. Americo Vespucio 1501. Local N° BA-205 / BA-209, Cerrillos, Santiago.",
              "mail": "coliseum.oeste@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "plaza-oeste"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.7195414,
              -33.5172485
              ]
            },
            "properties": {
              "phone": "22 578 1580",
              "name": "Converse Plaza Oeste",
              "address": "Avda. Americo Vespucio 1501. Local N° A 341-345, Cerrillos, Santiago.",
              "mail": "converse.oeste@cdepor.cl",
              "brands": "Converse",
              "region": "plaza-oeste"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6804972,
              -33.3661533
              ]
            },
            "properties": {
              "phone": "22 578 1595",
              "name": "Coliseum Plaza Norte",
              "address": "Avenida Américo Vespucio 1737. Local N° P268 278, Huechuraba, Santiago.",
              "mail": "coliseum.pzanorte@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "plaza-norte"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.6844652,
              -33.4526736
              ]
            },
            "properties": {
              "phone": "22 578 1572",
              "name": "Coliseum Plaza Alameda",
              "address": "Avda. Bernardo O'Higgins 3470. Local N° 318-320, Santiago, Santiago.",
              "mail": "coliseum.alameda@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "plaza-alameda"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -70.7103234,
              -33.3322602
              ]
            },
            "properties": {
              "phone": "22 578 1576",
              "name": "Coliseum Outlet Buenaventura",
              "address": "San Ignacio 300. Local N° 156, Quilicura, Santiago.",
              "mail": "outlet.buenaventura@cdepor.cl",
              "brands": "Converse, Umbro y Hi Tec",
              "region": "buenaventura"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -73.0473283,
              -36.8248521
              ]
            },
            "properties": {
              "phone": "22 578 1584",
              "name": "Converse Mall del Centro Concepción",
              "address": "Barros Arana 1068. Local N° 24_03, Concepción.",
              "mail": "converse.concepcion@cdepor.cl",
              "brands": "Converse",
              "region": "concepcion"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -73.0688673,
              -36.7918325
              ]
            },
            "properties": {
              "phone": "22 578 1581",
              "name": "Converse Plaza Trébol",
              "address": "Jorge Alessandri 3177. Local N° H 241-24, Talcahuano, Concepción.",
              "mail": "converse.divebol@cdepor.cl",
              "brands": "Converse",
              "region": "concepcion"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -72.6128504,
              -38.7335708
              ]
            },
            "properties": {
              "phone": "22 578 1586",
              "name": "Coliseum Portal Temuco",
              "address": "Avda. Alemania 0671. Local N° 330, Temuco.",
              "mail": "coliseum.temuco@cdepor.cl",
              "brands": "Converse, Fila, Umbro y Hi Tec",
              "region": "temuco"
            }
          },
        ]
      }
  ];

var map = L.mapbox.map('map')
.setView([-33.447487, -70.673676], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 20,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
})
.addTo(map);

var listings = document.getElementById('listings');
var locations = L.mapbox.featureLayer().addTo(map);

  locations.setGeoJSON(geojson);

function setActive(el) {
    var siblings = listings.getElementsByTagName('div');
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].className = siblings[i].className
      .replace(/active/, '').replace(/\s\s*$/, '');
    }

    el.className += ' active';
}

locations.eachLayer(function(locale) {

  // Shorten locale.feature.properties to just `prop` so we're not
  // writing this long form over and over again.
var prop = locale.feature.properties;

// Each marker on the map.
  var popup = '<h3>' + prop.name +'</h3><div>' + '<b>Dirección: </b>' + prop.address + '<br>' + '<b>Marcas: </b>' + prop.brands + '<br>';

  var listing = listings.appendChild(document.createElement('div'));
  listing.className = 'texto';
  listing.setAttribute('data-eventtype', prop.region);

  var link = listing.appendChild(document.createElement('div'));
  var button = listing.appendChild(document.createElement('button'))
    button.href = '#';
    button.className = 'tiendas__descripcion-botton';
    button.innerHTML = "Ver ubicación";

    link.innerHTML =  '<h6 class="tiendas__lista-titulo">' + prop.name + '</h6>';
    if (prop.address) {
      link.innerHTML += '<p class="tiendas__descripcion">Dirección: ' + prop.address + '</p>';
      //popup += '<small class="tiendas__descripcion">' + prop.address + '</small>';
    }
    if (prop.phone) {
      link.innerHTML += '<p class="tiendas__descripcion">Telefono: ' + prop.phone + '</p>';
    }
    if (prop.mail) {
      link.innerHTML += '<p class="tiendas__descripcion">Email: ' + prop.mail + '</p>';
    }
    if (prop.brands) {
      link.innerHTML += '<p class="tiendas__descripcion">Marcas: ' + prop.brands + '</p>';
    };

    //var details = listing.appendChild(document.createElement('div'));
    //details.innerHTML = prop.city;
    //if (prop.phone) {
    //  details.innerHTML += ' &middot; ' + prop.phone;
    //}

    button.onclick = function() {
      setActive(listing);

      // When a menu item is clicked, animate the map to center
      // its associated locale and open its popup.
      map.setView(locale.getLatLng(), 16);
      locale.openPopup();
      return false;
    };

    // Marker interaction
    locale.on('click', function(e) {
      // 1. center the map on the selected marker.
      map.panTo(locale.getLatLng());

      // 2. Set active the markers associated listing.
      setActive(listing);
    });

    popup += '</div>';
    locale.bindPopup(popup);

    locale.setIcon(L.icon({
      iconUrl: 'https://coliseumstorecl.vteximg.com.br/arquivos/markercoliseum.svg',
      iconSize: [56, 56],
      iconAnchor: [28, 28],
      popupAnchor: [0, -34]
    }));
});

};
