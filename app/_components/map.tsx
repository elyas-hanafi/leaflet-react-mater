import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import MapEvents from "./MapEvents";
import Image from "next/image";

interface Restaurant {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

interface Props {
  restaurants: Restaurant[];
  setFilteredRestaurants: (filtered: Restaurant[]) => void;
}

export default function Map({ restaurants, setFilteredRestaurants }: Props) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {restaurants.map((restaurant) => (
        <Marker key={restaurant.id} position={[restaurant.lat, restaurant.lng]}>
          <Popup className="request-popup">
            <div>
              <Image
                src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
                width="150"
                height="150"
                alt="success"
              />
              <div className="m-2">Success!</div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <div className="m-2">Okay</div>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapEvents setFilteredRestaurants={setFilteredRestaurants} />
    </MapContainer>
  );
}
