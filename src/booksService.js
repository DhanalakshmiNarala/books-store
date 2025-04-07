const BOOKS_API_URL = 'https://openlibrary.org/search.json?q=';

export const fetchBooks = (bookName) => {
    console.log('Fetching books with name:', bookName);
    
    return fetch(`${BOOKS_API_URL}${bookName}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

export const getBookTitles = (books) => {
    return books.map(book => book.title);
}