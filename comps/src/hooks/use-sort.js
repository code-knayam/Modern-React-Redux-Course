import { useState } from "react";

function useSort(data, config) {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const setSortColumn = (label) => {
		if (sortBy && label !== sortBy) {
			setSortOrder("asc");
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortOrder("asc");
			setSortBy(label);
		} else if (sortOrder === "asc") {
			setSortOrder("desc");
			setSortBy(label);
		} else {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find((col) => col.label === sortBy);

		sortedData = [...data].sort((a, b) => {
			const valA = sortValue(a);
			const valB = sortValue(b);

			const reverseOrder = sortOrder === "asc" ? 1 : -1;

			if (typeof valA === "string") {
				return valA.localeCompare(valB) * reverseOrder;
			} else {
				return (valA - valB) * reverseOrder;
			}
		});
	}

	return {
		sortBy,
		sortOrder,
		sortedData,
		setSortColumn,
	};
}

export default useSort;
