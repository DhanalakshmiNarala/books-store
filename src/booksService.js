const BOOKS_API_URL = 'https://openlibrary.org/search.json?q=';

export const fetchBooks = async (bookName) => {
    console.log('Fetching books with name:', bookName);

    try {
        const response = await fetch(`${BOOKS_API_URL}${bookName}`)
        const json = await response.json();
        return parseBooksResponse(json);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const parseBooksResponse = (jsonResp) => {
    return jsonResp.docs.map((book) => ({
        bookTitle: book.title,
        publishedYear: book.first_publish_year
    }));
}