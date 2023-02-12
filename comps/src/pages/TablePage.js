import SortableTable from "../components/SortableTable";

function TablePage() {
	const data = [
		{
			name: "Orange",
			color: "bg-orange-500",
			score: 5,
		},
		{
			name: "Apple",
			color: "bg-red-500",
			score: 3,
		},
		{
			name: "Banana",
			color: "bg-yellow-500",
			score: 10,
		},
	];

	const config = [
		{
			label: "Name",
			render: (item) => item.name,
			sortValue: (item) => item.name,
		},
		{
			label: "Color",
			render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>,
		},
		{
			label: "Score",
			render: (item) => item.score,
			sortValue: (item) => item.score,
		},
	];

	const keyFn = (item) => {
		return item.name;
	};

	return (
		<div>
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	);
}

export default TablePage;
