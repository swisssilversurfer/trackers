// Central icon definitions (icons need to be defined before POIs in this file, else they cannot be found)

const poiIcons = {
  camping: L.divIcon({
    html: '<i class="fa-solid fa-campground" style="color: #aa0000; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  tunnel: L.divIcon({
    html: '<i class="fa-solid fa-car-tunnel" style="color: #0066cc; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  landmark: L.divIcon({
    html: '<i class="fa-solid fa-landmark-flag" style="color: #aa0000; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  nature: L.divIcon({
    html: '<i class="fa-solid fa-tree" style="color: #228B22; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  panorama: L.divIcon({
    html: '<i class="fa-solid fa-panorama" style="color: #1E90FF; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  mountain: L.divIcon({
    html: '<i class="fa-solid fa-mountain" style="color: #8B4513; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  bullseye: L.divIcon({
    html: '<i class="fa-solid fa-bullseye" style="color: #bb1b88ff; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  restaurant: L.divIcon({
    html: '<i class="fa-solid fa-utensils" style="color: #FF4500; font-size: 20px;"></i>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
};  


// POIs information

const pois = [

  // Camping & Hotels
  {
    name: "Bivacco Colle del Sommeiller",
    description: "Bivak zum Übernachten, keine Sanitäranlagen, nur Holzbetten.",
    type: "camping",
    lat: 45.134,
    lng: 6.845,
    maps: "https://maps.app.goo.gl/5BUmCbeD2kQ6dUTGA"
  },
  {
    name: "Camping Gran Bosco",
    description: "Campingplatz mit Restaurant. Zwei grosse Wiesen für Zelte",
    type: "camping",
    lat: 45.062,
    lng: 6.868,
    maps: "https://maps.app.goo.gl/GPKchdXoUFqtWHLu5"
  },
  {
    name: "Campeggio Roccastella",
    description: "Campingplatz",
    type: "camping",
    lat: 44.42179,
    lng: 7.32937,
    maps: "https://maps.app.goo.gl/QqLXPHBQx9zJgDWs6"
  },
  {
    name: "Campeggio il Sole",
    description: "Campingplatz",
    type: "camping",
    lat: 44.32814,
    lng: 7.29165,
    maps: "https://maps.app.goo.gl/gFSVmqoWoeSsviUu9"
  },
  {
    name: "Agricampeggio Monviso",
    description: "Campingplatz",
    type: "camping",
    lat: 44.55556,
    lng: 7.44127,
    maps: "https://maps.app.goo.gl/2y6PVnVH5qVS4hB36"
  },

  
  // Restaurants  
  {
    name: "La Barrica di Babbalacchio",
    description: "Restaurant",
    type: "restaurant",
    lat: 45.04187,
    lng: 6.834032,
    maps: "https://maps.app.goo.gl/q7n6VdA6Zybm71U2A"
  },
  


  // Bergpässe
  {
    name: "Colle Valcavera",
    description: "Bergpass",
    type: "mountain",
    lat: 44.38523,
    lng: 7.10043,
    maps: "https://maps.app.goo.gl/4cpjn7dpSQEkAHX6A"
  },



 
  {
    name: "Col de l'Iseran",
    description: "Col de l'Iseran",
    type: "mountain",
    lat: 45.41721,
    lng: 7.03067,
    maps: "https://www.google.com/maps?q=45.41721,7.03067"
  },
  {
    name: "Passo dello Stelvio, Stilfser Joch",
    description: "Passo dello Stelvio, Stilfser Joch",
    type: "mountain",
    lat: 46.52863,
    lng: 10.45308,
    maps: "https://www.google.com/maps?q=46.52863,10.45308"
  },
  {
    name: "Col d'Agnel, Colle dell'Agnello",
    description: "Col d'Agnel, Colle dell'Agnello",
    type: "mountain",
    lat: 44.68401,
    lng: 6.97967,
    maps: "https://www.google.com/maps?q=44.68401,6.97967"
  },
  {
    name: "Col de la Bonette",
    description: "Col de la Bonette",
    type: "mountain",
    lat: 44.32667,
    lng: 6.80744,
    maps: "https://www.google.com/maps?q=44.32667,6.80744"
  },
  {
    name: "Col du Galibier",
    description: "Col du Galibier",
    type: "mountain",
    lat: 45.06412,
    lng: 6.40785,
    maps: "https://www.google.com/maps?q=45.06412,6.40785"
  },
  {
    name: "Passo di Gavia",
    description: "Passo di Gavia",
    type: "mountain",
    lat: 46.34353,
    lng: 10.48761,
    maps: "https://www.google.com/maps?q=46.34353,10.48761"
  },
  {
    name: "Hochtor (Grossglockner Hochalpenstrasse)",
    description: "Hochtor (Grossglockner Hochalpenstrasse)",
    type: "mountain",
    lat: 47.08118,
    lng: 12.84262,
    maps: "https://www.google.com/maps?q=47.08118,12.84262"
  },
  {
    name: "Umbrailpass, Passo dell'Umbrail",
    description: "Umbrailpass, Passo dell'Umbrail",
    type: "mountain",
    lat: 46.54159,
    lng: 10.43315,
    maps: "https://www.google.com/maps?q=46.54159,10.43315"
  },
  {
    name: "Nufenenpass, Passo della Novena",
    description: "Nufenenpass, Passo della Novena",
    type: "mountain",
    lat: 46.47726,
    lng: 8.38704,
    maps: "https://www.google.com/maps?q=46.47726,8.38704"
  },
  {
    name: "Timmelsjoch, Passo Rombo",
    description: "Timmelsjoch, Passo Rombo",
    type: "mountain",
    lat: 46.90529,
    lng: 11.09744,
    maps: "https://www.google.com/maps?q=46.90529,11.09744"
  },
  {
    name: "Col du Grand Saint Bernard, Colle del Gran San Bernardo, Grosser Sankt Bernhard",
    description: "Col du Grand Saint Bernard, Colle del Gran San Bernardo, Grosser Sankt Bernhard",
    type: "mountain",
    lat: 45.86917,
    lng: 7.17031,
    maps: "https://www.google.com/maps?q=45.86917,7.17031"
  },
  {
    name: "Furkapass",
    description: "Furkapass",
    type: "mountain",
    lat: 46.57271,
    lng: 8.41521,
    maps: "https://www.google.com/maps?q=46.57271,8.41521"
  },
  {
    name: "Flüelapass",
    description: "Flüelapass",
    type: "mountain",
    lat: 46.75053,
    lng: 9.94718,
    maps: "https://www.google.com/maps?q=46.75053,9.94718"
  },



  // Others
  {
    name: "Galleria del Seguret",
    description: "Langer Tunner - unbeleuchtet und unbefestigt.",
    type: "tunnel",
    lat: 45.077,
    lng: 6.826,
    maps: "https://maps.app.goo.gl/hrHLAGSWzuV9yJ5i9"
  }
  
  ];
