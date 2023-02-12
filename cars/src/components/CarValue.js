import { useSelector } from "react-redux";

function CarValue() {
	const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
		const filteredCost = data
			.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
			.reduce((val, car) => {
				return val + car.cost;
			}, 0);

		return filteredCost;
	});

	return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
