import Button from "./../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
	const handleClick = () => {
		console.log("Click");
	};
	return (
		<div>
			<div>
				<Button onClick={handleClick}>
					<GoBell />
					Hi
				</Button>
				<Button primary>Hi</Button>
				<Button secondary>Hi</Button>
				<Button success>Hi</Button>
				<Button warning>Hi</Button>
				<Button danger>Hi</Button>
				<Button primary rounded>
					Hi
				</Button>
				<Button secondary rounded>
					Hi
				</Button>
				<Button success rounded outline>
					Hi
				</Button>
				<Button danger outline>
					Hi
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
