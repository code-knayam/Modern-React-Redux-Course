import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);

	const fetchBooks = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/books");

		setBooks(response.data);
	}, []);

	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books", {
			title,
		});

		setBooks([...books, response.data]);
		// setBooks([...books, { id: Math.round(Math.random() * 1000), title }]);
	};

	const deleteBookById = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);

		const newBooks = books.filter((book) => {
			return book.id !== id;
		});

		setBooks(newBooks);
	};

	const editBookById = async (id, title) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title,
		});

		const newBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}
			return book;
		});

		setBooks(newBooks);
	};

	const valueToShare = {
		books,
		deleteBookById,
		editBookById,
		fetchBooks,
		createBook,
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;
