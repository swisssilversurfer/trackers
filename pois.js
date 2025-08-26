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
