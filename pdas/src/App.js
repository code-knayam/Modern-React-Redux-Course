import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Alexa"
								handle="@alexa99"
								image={AlexaImage}
								desc="Some dummy desc"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								image={CortanaImage}
								desc="Some dummy desc"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Siri"
								handle="@siri"
								image={SiriImage}
								desc="Some dummy desc"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
