import Link from "./Link";

function SideBar() {
	const links = [
		{ label: "Dropdown", path: "/" },
		{ label: "Accordion", path: "/accordion" },
		{ label: "Button", path: "/buttons" },
		{ label: "Modal", path: "/modal" },
		{ label: "Table", path: "/table" },
		{ label: "Counter", path: "/counter" },
	];

	const renderedLinks = links.map((link) => {
		return (
			<Link
				className="mb-3"
				key={link.label}
				to={link.path}
				activeClassName="font-bold border-l-4 border-blue-400 pl-2"
			>
				{link.label}
			</Link>
		);
	});

	return (
		<div className="sticky top-0 flex flex-col items-start">
			{renderedLinks}
		</div>
	);
}

export default SideBar;
