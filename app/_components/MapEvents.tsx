import { useMap, useMapEvent } from "react-leaflet";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilteredRestaurants: (filtered: any) => void;
}

function MapEvents({ setFilteredRestaurants }: Props) {
  const map = useMap();

  // Listen for map move or zoom events
  useMapEvent("moveend", () => {
    const bounds = map.getBounds();
    setFilteredRestaurants(bounds); // Call the filtering function with the new bounds
  });

  return null;
}

export default MapEvents;
