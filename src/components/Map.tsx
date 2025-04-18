"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { LatLng, icon } from "leaflet";

const routeCoordinates = [
  new LatLng(19.0760, 72.8777),
  new LatLng(12.9716, 77.5946)
];

export default function MapComponent() {
  return (
    <MapContainer center={[19.0760, 72.8777]} zoom={6} style={{ width: "100%", height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[19.0760, 72.8777]} icon={icon({ iconUrl: "/marker.png", iconSize: [30, 30] })}>
        <Popup>Mumbai</Popup>
      </Marker>
      <Marker position={[12.9716, 77.5946]} icon={icon({ iconUrl: "/marker.png", iconSize: [30, 30] })}>
        <Popup>Bangalore</Popup>
      </Marker>
      <Polyline positions={routeCoordinates} color="blue" weight={4} opacity={0.7} />
    </MapContainer>
  );
}

