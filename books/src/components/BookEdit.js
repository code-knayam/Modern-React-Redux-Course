import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onEdit }) {
	const { editBookById } = useBooksContext();

	const [title, setTitle] = useState(book.title);

	const handleOnChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onEdit();
		editBookById(book.id, title);
	};

	return (
		<div className="BookEdit">
			<form className="form-edit" onSubmit={handleSubmit}>
				<label>Title</label>
				<input className="input" value={title} onChange={handleOnChange} />
				<button className="button is-primary">Save</button>
			</form>
		</div>
	);
}

export default BookEdit;
