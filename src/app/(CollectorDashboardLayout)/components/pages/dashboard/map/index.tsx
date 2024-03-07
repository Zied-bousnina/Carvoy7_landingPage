import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapLoader from "@/app/component/ui/loaders/mapLoader";
import { binsIsFilled } from "@/utils/methods/bins";
import CustomCircularProgress from "@/app/component/ui/progress";

const myLocationIcon = new L.Icon({
  iconUrl: "/images/markers/my-location-marker.png",
  iconSize: [38, 38],
});

const blueBinIcon = new L.Icon({
  iconUrl: "/images/markers/blue-bin-marker.png",
  iconSize: [30, 38],
});

const redBinIcon = new L.Icon({
  iconUrl: "/images/markers/red-bin-marker.png",
  iconSize: [30, 38],
});

function getClosestBin(currentLocation, binsPointsData) {
  let closest = null;
  let closestDistance = Infinity;

  binsPointsData.forEach((binPoint) => {
    const distance = L.latLng(binPoint.lat, binPoint.long).distanceTo([currentLocation.latitude, currentLocation.longitude]);
    const maxNivBin = binPoint.bins.reduce((max, bin) => bin.niv > max.niv ? bin : max, {niv: -1});
    if (distance < closestDistance && maxNivBin.niv >= 80) {
      closest = binPoint;
      closestDistance = distance;
    }
  });

  return closest;
}

function Routing({ currentLocation, closestBin }) {
  const map = useMap();

  useEffect(() => {
    if (!closestBin) return;
    async function loadRouting() {
      // Dynamically import the leaflet-routing-machine
      const LRM = await import('leaflet-routing-machine');
      if (currentLocation.isFetched && LRM) {
        const routingControl = (L as any).Routing.control({
          waypoints: [
            L.latLng(currentLocation.latitude, currentLocation.longitude),
            L.latLng(closestBin.lat, closestBin.long)
          ],
          createMarker: () => null, // No markers for waypoints
          routeWhileDragging: false,
          showAlternatives: false,
          fitSelectedRoutes: true,
          show: true
        }).addTo(map);

        return () => map.removeControl(routingControl);
      }
      return undefined
    }

    loadRouting();
  }, [map, currentLocation, closestBin]);

  return null;
}

export default function CollectorDashboardMap({ binsPointsData, isBinsLoading }) {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 36.7496,
    longitude: 10.2126,
    isFetched: false,
  });

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude, isFetched: true });
      },
      error => {
        console.error("Error fetching geolocation: ", error.message);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const closestBin = getClosestBin(currentLocation, binsPointsData);

  return (
    <div className="relative">
      <MapContainer center={[currentLocation.latitude, currentLocation.longitude]} zoom={13} style={{ height: "80vh", width: "100%" }}>
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <MarkerClusterGroup chunkedLoading>
          {!isBinsLoading && currentLocation.isFetched && (
            <Marker position={[currentLocation.latitude, currentLocation.longitude]} icon={myLocationIcon}>
              <Popup>Your Position</Popup>
            </Marker>
          )}
          {!isBinsLoading &&
            currentLocation.isFetched &&
            binsPointsData.map((binPoint, index) => {
              const icon = binsIsFilled(binPoint.bins) ? redBinIcon : blueBinIcon;
              return (
                <Marker key={index} position={[binPoint.lat, binPoint.long]} icon={icon}>
                  <Popup>
                    <div className="flex items-center gap-4">
                      {binPoint.bins.map((bin, index) => (
                        <CustomCircularProgress key={index} value={Number(bin.niv)} label={bin.type} />
                      ))}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
        {currentLocation.isFetched && closestBin && <Routing currentLocation={currentLocation} closestBin={closestBin} />}
      </MapContainer>
      {isBinsLoading || (!currentLocation.isFetched && <MapLoader />)}
    </div>
  );
}
