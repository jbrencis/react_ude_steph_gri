import { useSelector } from "react-redux";

export function CarValue() {
  // derived state
  const totalCost = useSelector(({ cars: { searchTerm, data } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">Total cost: ${totalCost}</div>;
}
