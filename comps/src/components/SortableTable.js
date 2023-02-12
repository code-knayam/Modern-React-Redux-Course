import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
	const { config, data } = props;

	const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
		data,
		config
	);

	const updateConfig = config.map((col) => {
		if (!col.sortValue) return col;

		return {
			...col,
			header: () => (
				<th
					className="cursor-pointer hover:bg-gray-100"
					onClick={() => setSortColumn(col.label)}
				>
					<div className="flex item-center">
						{getIcons(col.label, sortBy, sortOrder)}
						{col.label}
					</div>
				</th>
			),
		};
	});

	return <Table {...props} config={updateConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
	if (label !== sortBy) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}

	if (sortOrder == null) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	} else if (sortOrder === "asc") {
		return (
			<div>
				<GoArrowSmallUp />
			</div>
		);
	} else if (sortOrder === "desc") {
		return (
			<div>
				<GoArrowSmallDown />
			</div>
		);
	}
}

export default SortableTable;
