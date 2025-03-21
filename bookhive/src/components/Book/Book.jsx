import React from "react";
import coverPlaceholder from "../../assets/images/cover.jpg"; // Fallback cover
import "./Book.scss";

function Book({ book }) {
  return (
    <div className="book">
      <div className="book__hexagon">
        <img className="book__cover" src={book.cover || coverPlaceholder} alt={`${book.title} cover`} />
        <div className="hexagon__content">
          <h3 className="hexagon__title">{book.title}</h3>
          <p className="hexagon__author">by {book.author}</p>
          <p className="hexagon__status">Status: {book.status}</p>
          <p className="hexagon__address">{book.address}, {book.city}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
