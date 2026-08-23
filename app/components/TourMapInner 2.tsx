"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

// Leaflet CSS setup fix
import "leaflet/dist/leaflet.css";

// Custom pin marker icon fix for Next.js asset bundling
const customIcon = L.divIcon({
  className: "custom-map-pin",
  html: `<div style="background-color: #003366; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export interface MapStop {
  name: string;
  lat: number;
  lng: number;
  description?: string;
}

interface TourMapInnerProps {
  stops: MapStop[];
}

export default function TourMapInner({ stops }: TourMapInnerProps) {
  if (!stops || stops.length === 0) return null;

  // Calculate default center position
  const centerLat = stops.reduce((acc, s) => acc + s.lat, 0) / stops.length;
  const centerLng = stops.reduce((acc, s) => acc + s.lng, 0) / stops.length;

  const polylineCoordinates = stops.map(
    (stop) => [stop.lat, stop.lng] as [number, number],
  );

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={10}
      scrollWheelZoom={false}
      className="w-full h-full rounded-2xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Connected Tour Route Line */}
      <Polyline
        positions={polylineCoordinates}
        pathOptions={{ color: "#CE1126", weight: 4, dashArray: "6, 8" }}
      />

      {/* Location Markers */}
      {stops.map((stop, idx) => (
        <Marker key={idx} position={[stop.lat, stop.lng]} icon={customIcon}>
          <Popup>
            <div className="p-1 max-w-xs">
              <span className="text-[10px] font-bold uppercase text-gambia-red block">
                Stop {idx + 1}
              </span>
              <h4 className="font-bold text-gambia-blue text-sm mb-1">
                {stop.name}
              </h4>
              {stop.description && (
                <p className="text-xs text-black/70 leading-normal">
                  {stop.description}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
