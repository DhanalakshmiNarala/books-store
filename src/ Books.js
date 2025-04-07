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
        console.log('----Books: ', books)
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={bookName}
        onChange={handleChange}
        placeholder="Enter something..."
      />
      <button type="submit">Submit</button>
    </form>)
}

export default Books;