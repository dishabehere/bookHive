import React from "react";
import Book from "../Book/Book"; // Ensure correct import
import "./BooksGrid.scss";

function BooksGrid({ books }) {
  return (
    <div className="books-grid">
      {books.map((book, index) => (
        <div key={book.id} className={`book-container ${index % 2 !== 0 ? "shifted" : ""}`}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
}

export default BooksGrid;
