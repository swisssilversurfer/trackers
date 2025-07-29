<?php
$tracks = [];

// Manuelle Metadaten für jede GPX-Datei
$meta = [
  "IT Bardonecchia-Colle-del-Sommeiller.gpx" => [
    "name" => "Bardonecchia Colle del Sommeiller",
    "region" => "Piemont",
    "schwierigkeit" => "Mittel",
    "untergrund" => "Off-road",
    "laenge" => "75 km"
  ],
  "IT Monte-Jafferau.gpx" => [
    "name" => "IT Monte Jafferau",
    "region" => "Piemont",
    "schwierigkeit" => "Mittel",
    "untergrund" => "Off-road",
    "laenge" => "52 km"
  ]
  // Weitere Routen hier ergänzen
];

foreach (glob("gpx/*.gpx") as $file) {
  $basename = basename($file);
  if (isset($meta[$basename])) {
    $tracks[] = array_merge([
      "file" => $file
    ], $meta[$basename]);
  }
}

header("Content-Type: application/json");
echo json_encode($tracks);
