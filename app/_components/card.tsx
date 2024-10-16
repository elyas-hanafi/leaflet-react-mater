interface Restaurant {
  id: number;
  name: string;
  description: string;
}

interface Props {
  restaurants: Restaurant[];
}

export default function RestaurantList({ restaurants }: Props) {
  return (
    <div className="p-4">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="card">
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
        </div>
      ))}
    </div>
  );
}
