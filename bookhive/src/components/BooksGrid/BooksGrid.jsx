import React from "react";
import Book from "../Book/Book.jsx";
import "./BooksGrid.scss";

function BooksGrid({ books, isMyBooksPage, isMyRentalsPage, showEditOptions }) {
  return (
    <div className={`books-grid ${isMyBooksPage || isMyRentalsPage ? "books-grid--mybooks" : ""} `}>
      {books.map((book) => {
        return (
          <div key={book.id} className={`book-container`}>
            <Book
              book={book}
              showEditOptions={showEditOptions}
              fromMyBooksPage={isMyBooksPage}
              fromMyRentalsPage={isMyRentalsPage}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BooksGrid;
