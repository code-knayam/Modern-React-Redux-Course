import { useState } from "react";
import Dropdown from "./../components/Dropdown";

function DropdownPage() {
	const [selection, setSelection] = useState(null);

	const handleSelect = (option) => {
		setSelection(option);
	};

	const options = [
		{
			label: "Red",
			value: "red",
		},
		{
			label: "Blue",
			value: "blue",
		},
		{
			label: "Yellow",
			value: "yellow",
		},
	];

	return (
		<div>
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	);
}

export default DropdownPage;
