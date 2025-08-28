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
    "name": "Col de l'Iseran",
    "description": "Col de l'Iseran",
    "type": "mountain",
    "lat": 45.41721,
    "lng": 7.03067,
    "maps": "https://www.google.com/maps?q=45.41721,7.03067"
  },
  {
    "name": "Passo dello Stelvio, Stilfser Joch",
    "description": "Passo dello Stelvio, Stilfser Joch",
    "type": "mountain",
    "lat": 46.52863,
    "lng": 10.45308,
    "maps": "https://www.google.com/maps?q=46.52863,10.45308"
  },
  {
    "name": "Col des Aravis",
    "description": "Col des Aravis",
    "type": "mountain",
    "lat": 45.87229,
    "lng": 6.46488,
    "maps": "https://www.google.com/maps?q=45.87229,6.46488"
  },
  {
    "name": "Col de la Bonette",
    "description": "Col de la Bonette",
    "type": "mountain",
    "lat": 44.32667,
    "lng": 6.80744,
    "maps": "https://www.google.com/maps?q=44.32667,6.80744"
  },
  {
    "name": "Col du Galibier",
    "description": "Col du Galibier",
    "type": "mountain",
    "lat": 45.06412,
    "lng": 6.40785,
    "maps": "https://www.google.com/maps?q=45.06412,6.40785"
  },
  {
    "name": "Passo di Gavia",
    "description": "Passo di Gavia",
    "type": "mountain",
    "lat": 46.34353,
    "lng": 10.48761,
    "maps": "https://www.google.com/maps?q=46.34353,10.48761"
  },
  {
    "name": "Umbrailpass, Passo dell'Umbrail",
    "description": "Umbrailpass, Passo dell'Umbrail",
    "type": "mountain",
    "lat": 46.54159,
    "lng": 10.43315,
    "maps": "https://www.google.com/maps?q=46.54159,10.43315"
  },
  {
    "name": "Nufenenpass, Passo della Novena",
    "description": "Nufenenpass, Passo della Novena",
    "type": "mountain",
    "lat": 46.47726,
    "lng": 8.38704,
    "maps": "https://www.google.com/maps?q=46.47726,8.38704"
  },
  {
    "name": "Col du Grand Saint Bernard, Colle del Gran San Bernardo, Grosser Sankt Bernhard",
    "description": "Col du Grand Saint Bernard, Colle del Gran San Bernardo, Grosser Sankt Bernhard",
    "type": "mountain",
    "lat": 45.86917,
    "lng": 7.17031,
    "maps": "https://www.google.com/maps?q=45.86917,7.17031"
  },
  {
    "name": "Furkapass",
    "description": "Furkapass",
    "type": "mountain",
    "lat": 46.57271,
    "lng": 8.41521,
    "maps": "https://www.google.com/maps?q=46.57271,8.41521"
  },
  {
    "name": "Flüelapass",
    "description": "Flüelapass",
    "type": "mountain",
    "lat": 46.75053,
    "lng": 9.94718,
    "maps": "https://www.google.com/maps?q=46.75053,9.94718"
  },
  {
    "name": "Col d'Izoard",
    "description": "Col d'Izoard",
    "type": "mountain",
    "lat": 44.81974,
    "lng": 6.73499,
    "maps": "https://www.google.com/maps?q=44.81974,6.73499"
  },
  {
    "name": "Col de la Lombarde, Colle della Lombarda",
    "description": "Col de la Lombarde, Colle della Lombarda",
    "type": "mountain",
    "lat": 44.20257,
    "lng": 7.15011,
    "maps": "https://www.google.com/maps?q=44.20257,7.15011"
  },
  {
    "name": "Col de la Cayolle",
    "description": "Col de la Cayolle",
    "type": "mountain",
    "lat": 44.25919,
    "lng": 6.74397,
    "maps": "https://www.google.com/maps?q=44.25919,6.74397"
  },
  {
    "name": "Albulapass",
    "description": "Albulapass",
    "type": "mountain",
    "lat": 46.58253,
    "lng": 9.83782,
    "maps": "https://www.google.com/maps?q=46.58253,9.83782"
  },
  {
    "name": "Colle di Sampeyre",
    "description": "Colle di Sampeyre",
    "type": "mountain",
    "lat": 44.55098,
    "lng": 7.11959,
    "maps": "https://www.google.com/maps?q=44.55098,7.11959"
  },
  {
    "name": "Julierpass",
    "description": "Julierpass",
    "type": "mountain",
    "lat": 46.47224,
    "lng": 9.72766,
    "maps": "https://www.google.com/maps?q=46.47224,9.72766"
  },
  {
    "name": "Col d'Allos",
    "description": "Col d'Allos",
    "type": "mountain",
    "lat": 44.29726,
    "lng": 6.59422,
    "maps": "https://www.google.com/maps?q=44.29726,6.59422"
  },
  {
    "name": "Passo Sella, Sellajoch",
    "description": "Passo Sella, Sellajoch",
    "type": "mountain",
    "lat": 46.50824,
    "lng": 11.76719,
    "maps": "https://www.google.com/maps?q=46.50824,11.76719"
  },
  {
    "name": "Passo Giau",
    "description": "Passo Giau",
    "type": "mountain",
    "lat": 46.48258,
    "lng": 12.05362,
    "maps": "https://www.google.com/maps?q=46.48258,12.05362"
  },
  {
    "name": "Sustenpass",
    "description": "Sustenpass",
    "type": "mountain",
    "lat": 46.73046,
    "lng": 8.44933,
    "maps": "https://www.google.com/maps?q=46.73046,8.44933"
  },
  {
    "name": "Passo Valparola",
    "description": "Passo Valparola",
    "type": "mountain",
    "lat": 46.52511,
    "lng": 11.99748,
    "maps": "https://www.google.com/maps?q=46.52511,11.99748"
  },
  {
    "name": "Col du Petit Saint Bernard, Colle del Piccolo San Bernardo",
    "description": "Col du Petit Saint Bernard, Colle del Piccolo San Bernardo",
    "type": "mountain",
    "lat": 45.67978,
    "lng": 6.88338,
    "maps": "https://www.google.com/maps?q=45.67978,6.88338"
  },
  {
    "name": "Grimselpass",
    "description": "Grimselpass",
    "type": "mountain",
    "lat": 46.56122,
    "lng": 8.33665,
    "maps": "https://www.google.com/maps?q=46.56122,8.33665"
  },
  {
    "name": "Ofenpass, Pass dal Fuorn",
    "description": "Ofenpass, Pass dal Fuorn",
    "type": "mountain",
    "lat": 46.63969,
    "lng": 10.29241,
    "maps": "https://www.google.com/maps?q=46.63969,10.29241"
  },
  {
    "name": "Splügenpass, Passo dello Spluga",
    "description": "Splügenpass, Passo dello Spluga",
    "type": "mountain",
    "lat": 46.50551,
    "lng": 9.33036,
    "maps": "https://www.google.com/maps?q=46.50551,9.33036"
  },
  {
    "name": "Col de Vars",
    "description": "Col de Vars",
    "type": "mountain",
    "lat": 44.53886,
    "lng": 6.70278,
    "maps": "https://www.google.com/maps?q=44.53886,6.70278"
  },
  {
    "name": "Gotthardpass, Passo San Gottardo",
    "description": "Gotthardpass, Passo San Gottardo",
    "type": "mountain",
    "lat": 46.55884,
    "lng": 8.56211,
    "maps": "https://www.google.com/maps?q=46.55884,8.56211"
  },
  {
    "name": "Passo Giovo, Jaufenpass",
    "description": "Passo Giovo, Jaufenpass",
    "type": "mountain",
    "lat": 46.83939,
    "lng": 11.32109,
    "maps": "https://www.google.com/maps?q=46.83939,11.32109"
  },
  {
    "name": "Col du Mont Cenis, Colle del Moncenisio",
    "description": "Col du Mont Cenis, Colle del Moncenisio",
    "type": "mountain",
    "lat": 45.25989,
    "lng": 6.90074,
    "maps": "https://www.google.com/maps?q=45.25989,6.90074"
  },
  {
    "name": "San-Bernardino-Pass",
    "description": "San-Bernardino-Pass",
    "type": "mountain",
    "lat": 46.49587,
    "lng": 9.17063,
    "maps": "https://www.google.com/maps?q=46.49587,9.17063"
  },
  {
    "name": "Col du Lautaret",
    "description": "Col du Lautaret",
    "type": "mountain",
    "lat": 45.03542,
    "lng": 6.40521,
    "maps": "https://www.google.com/maps?q=45.03542,6.40521"
  },
  {
    "name": "Simplonpass",
    "description": "Simplonpass",
    "type": "mountain",
    "lat": 46.24998,
    "lng": 8.03145,
    "maps": "https://www.google.com/maps?q=46.24998,8.03145"
  },
  {
    "name": "Col de la Madeleine",
    "description": "Col de la Madeleine",
    "type": "mountain",
    "lat": 45.43489,
    "lng": 6.37547,
    "maps": "https://www.google.com/maps?q=45.43489,6.37547"
  },
  {
    "name": "Passo San Marco",
    "description": "Passo San Marco",
    "type": "mountain",
    "lat": 46.04714,
    "lng": 9.62282,
    "maps": "https://www.google.com/maps?q=46.04714,9.62282"
  },
  {
    "name": "Cormet de Roselend",
    "description": "Cormet de Roselend",
    "type": "mountain",
    "lat": 45.69132,
    "lng": 6.69063,
    "maps": "https://www.google.com/maps?q=45.69132,6.69063"
  },
  {
    "name": "Lukmanierpass, Passo del Lucomagno",
    "description": "Lukmanierpass, Passo del Lucomagno",
    "type": "mountain",
    "lat": 46.56366,
    "lng": 8.80134,
    "maps": "https://www.google.com/maps?q=46.56366,8.80134"
  },
  {
    "name": "Passe del Tonale",
    "description": "Passe del Tonale",
    "type": "mountain",
    "lat": 46.25787,
    "lng": 10.58051,
    "maps": "https://www.google.com/maps?q=46.25787,10.58051"
  },
  {
    "name": "Col de la Madeleine (Route de l'Iseran)",
    "description": "Col de la Madeleine (Route de l'Iseran)",
    "type": "mountain",
    "lat": 45.30065,
    "lng": 6.94745,
    "maps": "https://www.google.com/maps?q=45.30065,6.94745"
  },
  {
    "name": "Col de la Colombière",
    "description": "Col de la Colombière",
    "type": "mountain",
    "lat": 45.99224,
    "lng": 6.47574,
    "maps": "https://www.google.com/maps?q=45.99224,6.47574"
  },
  {
    "name": "Gurnigel (Passhöhe Stierenhütte)",
    "description": "Gurnigel (Passhöhe Stierenhütte)",
    "type": "mountain",
    "lat": 46.73203,
    "lng": 7.44789,
    "maps": "https://www.google.com/maps?q=46.73203,7.44789"
  },
  {
    "name": "Col de Turini",
    "description": "Col de Turini",
    "type": "mountain",
    "lat": 43.97758,
    "lng": 7.39158,
    "maps": "https://www.google.com/maps?q=43.97758,7.39158"
  },
  {
    "name": "Col de l'Arpettaz",
    "description": "Col de l'Arpettaz",
    "type": "mountain",
    "lat": 45.79691,
    "lng": 6.43368,
    "maps": "https://www.google.com/maps?q=45.79691,6.43368"
  },
  {
    "name": "Col du Télégraphe",
    "description": "Col du Télégraphe",
    "type": "mountain",
    "lat": 45.20272,
    "lng": 6.44463,
    "maps": "https://www.google.com/maps?q=45.20272,6.44463"
  },
  {
    "name": "Jaunpass",
    "description": "Jaunpass",
    "type": "mountain",
    "lat": 46.59121,
    "lng": 7.34081,
    "maps": "https://www.google.com/maps?q=46.59121,7.34081"
  },
  {
    "name": "Col du Grand Colombier",
    "description": "Col du Grand Colombier",
    "type": "mountain",
    "lat": 45.90345,
    "lng": 5.76111,
    "maps": "https://www.google.com/maps?q=45.90345,5.76111"
  },
  {
    "name": "Col des Mosses",
    "description": "Col des Mosses",
    "type": "mountain",
    "lat": 46.39724,
    "lng": 7.10146,
    "maps": "https://www.google.com/maps?q=46.39724,7.10146"
  },
  {
    "name": "Col du Mollendruz",
    "description": "Col du Mollendruz",
    "type": "mountain",
    "lat": 46.65054,
    "lng": 6.36458,
    "maps": "https://www.google.com/maps?q=46.65054,6.36458"
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
