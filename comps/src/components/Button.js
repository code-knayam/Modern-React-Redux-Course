// import PropTypes from "prop-types";
import classNames from "classnames";

function Button({
	children,
	primary,
	secondary,
	success,
	danger,
	warning,
	outline,
	rounded,
	...rest
}) {
	const classes = classNames(
		rest.className,
		"px-3 py-1.5 border flex items-center",
		{
			"border-blue-500 bg-blue-500 text-white": primary,
			"border-gray-900 bg-gray-900 text-white": secondary,
			"border-green-500 bg-green-500 text-white": success,
			"border-yellow-500 bg-yellow-500 text-white": warning,
			"border-red-500 bg-red-500 text-white": danger,
			"rounded-full": rounded,
			"bg-white": outline,
			"text-blue-500": outline && primary,
			"text-gray-500": outline && secondary,
			"text-green-500": outline && success,
			"text-yellow-500": outline && warning,
			"text-red-500": outline && danger,
		}
	);

	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}

// Button.propTypes = {
// 	checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
// 		const count =
// 			Number(!!primary) +
// 			Number(!!secondary) +
// 			Number(!!success) +
// 			Number(!!warning) +
// 			Number(!!danger);

// 		if (count > 1) {
// 			return new Error("Multiple props true");
// 		}
// 	},
// };

export default Button;
