import React, { useState } from "react";
import { fetchBooks } from "./booksService";

function Books() {
    const [bookName, setBookName] = useState("");
    const [books, setBooks] = useState([]);


    const handleChange = (event) => {
        setBookName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const books = await fetchBooks(bookName);
        setBooks(books)
    };

    const onBookSelect = (index) => {
        setBooks(prevBooks => {
            const updatedBooks = prevBooks.map((book, i) => 
                i === index ? { ...book, selected: !book.selected } : book
            );
            return updatedBooks;
        });
    }

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={bookName}
            onChange={handleChange}
            placeholder="Enter something..."
        />
        <button type="submit">Submit</button>

        <ul>
            {books.map((book, index) => (
            <li key={index} onClick={() => onBookSelect(index)}>
                <span>{book.title}</span>
                {book.selected && <span>{book.publishedYear}</span>}
            </li>
        ))}
      </ul>
    </form>)
}

export default Books;