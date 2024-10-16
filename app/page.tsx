"use client";
import { useEffect, useState } from "react";
import RestaurantList from "./_components/card";
import Map from "./_components/map";
import axios from "axios";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Fetch all restaurant data on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/restaurants");
        setRestaurants(response.data);
        setFilteredRestaurants(response.data); // Initially show all restaurants
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filterRestaurantsByBounds = (bounds: any) => {
    const { _southWest, _northEast } = bounds;
    const filtered = restaurants.filter(
      (restaurant: { lat: number; lng: number }) =>
        restaurant.lat >= _southWest.lat &&
        restaurant.lat <= _northEast.lat &&
        restaurant.lng >= _southWest.lng &&
        restaurant.lng <= _northEast.lng
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 overflow-auto h-full">
        <RestaurantList restaurants={filteredRestaurants} />
      </div>
      <div className="w-1/2">
        <Map
          restaurants={restaurants}
          setFilteredRestaurants={filterRestaurantsByBounds} // Pass the filter function
        />
      </div>
    </div>
  );
};

export default Home;
