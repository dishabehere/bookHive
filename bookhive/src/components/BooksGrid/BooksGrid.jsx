import React from "react";
import Book from "../Book/Book.jsx";
import "./BooksGrid.scss";

function BooksGrid({ books, isMyBooksPage, isMyRentalsPage, showEditOptions }) {
  return (
    <div className={`books-grid ${isMyBooksPage ? "books-grid--mybooks" : ""} ${isMyRentalsPage ? "books-grid--mybooks" : ""}`}>
      {books.map((book, index) => (
        <div key={book.id} className={`book-container ${index % 2 !== 0 ? "shifted" : ""} ${index % 3 !== 0 ? "shift" : ""}`}>
          <Book book={book} showEditOptions={showEditOptions} fromMyBooksPage={isMyBooksPage} fromMyRentalsPage={isMyRentalsPage}/>
        </div>
      ))}
    </div>
  );
}

export default BooksGrid;
