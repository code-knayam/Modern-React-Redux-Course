import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<Button primary onClick={handleClose}>
			I Accept
		</Button>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Some text</p>
		</Modal>
	);

	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	);
}

export default ModalPage;
