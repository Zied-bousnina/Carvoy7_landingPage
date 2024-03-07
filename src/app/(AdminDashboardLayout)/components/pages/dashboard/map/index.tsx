import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapLoader from "@/app/component/ui/loaders/mapLoader";
import { binsIsFilled } from "@/utils/methods/bins";
import CustomCircularProgress from "@/app/component/ui/progress";

// my location marker
const myLocationIcon = new L.Icon({
  iconUrl: "/images/markers/my-location-marker.png",
  iconSize: [38, 38],
});
// Unfilled bin Icon
const blueBinIcon = new L.Icon({
  iconUrl: "/images/markers/blue-bin-marker.png",
  iconSize: [30, 38],
});

// Fulled bin Icon
const redBinIcon = new L.Icon({
  iconUrl: "/images/markers/red-bin-marker.png",
  iconSize: [30, 38],
});

export default function AdminDashboardMap({ binsPointsData, isBinsLoading }) {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
    isFetched: boolean;
  }>({ latitude: 36.7496, longitude: 10.2126, isFetched: false });

  // get current location
  const getCurrentLocation = () => {
    // Check if Geolocation is supported
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }
    // Use the Geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // console.log("navigator current location: ", { latitude, longitude });
        setCurrentLocation({ latitude, longitude, isFetched: true });
      },
      (error) => {
        console.error("Error fetching geolocation: ", error.message);
        // Optionally, handle errors or set a fallback location
      }
    );
  };
  useEffect(() => {
    getCurrentLocation();

  }, []);

  return (
    <div className="relative">
      <MapContainer
        center={[currentLocation.latitude, currentLocation.longitude]}
        zoom={5}
        style={{ height: "80vh", width: "100%" }}
      >
        {/*OPEN STREET MAPS TILES */}
        {/*    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      /> */}
        {/* GOOGLE MAPS TILES */}
        <TileLayer
          attribution={"Google Maps"}
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <MarkerClusterGroup chunkedLoading>
          {!isBinsLoading && currentLocation.isFetched && (
            <Marker
              position={[currentLocation.latitude, currentLocation.longitude]}
              icon={myLocationIcon}
            >
              <Popup className="text-md font-bold">Your Position</Popup>
            </Marker>
          )}

          {!isBinsLoading &&
            currentLocation.isFetched &&
            binsPointsData?.map((binPoint, index) => {
              if (binsIsFilled(binPoint.bins)) {
                return (
                  <Marker
                    key={index}
                    position={[binPoint.lat, binPoint.long]}
                    icon={redBinIcon}
                  >
                    <Popup>
                      <div className="flex items-center gap-4 ">
                        {binPoint?.bins?.map((bin, index) => (
                          <CustomCircularProgress
                            key={index}
                            value={Number(bin.niv)}
                            label={bin.type}
                          />
                        ))}
                      </div>
                    </Popup>
                  </Marker>
                );
              } else {
                return (
                  <Marker
                    key={index}
                    position={[binPoint.lat, binPoint.long]}
                    icon={blueBinIcon}
                  >
                    <Popup>
                      <div className="flex items-center gap-4 ">
                        {binPoint?.bins?.map((bin, index) => (
                          <CustomCircularProgress
                            key={index}
                            value={Number(bin.niv)}
                            label={bin.type}
                          />
                        ))}
                      </div>
                    </Popup>
                  </Marker>
                );
              }
            })}
        </MarkerClusterGroup>
      </MapContainer>
      {isBinsLoading || (!currentLocation.isFetched && <MapLoader />)}
    </div>
  );
}
