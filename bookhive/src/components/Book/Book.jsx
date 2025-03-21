import React from "react";
import cover from "../../assets/images/cover.jpg"
import './Book.scss';

function Book({ book }) {
  return (
    <div className="hexagon-wrapper">
      <div className="hexagon">
      {cover ? (
        <img className="book__cover" src={book.cover} alt={`${book.title} cover`} />
      ) : (
        <img className="book__cover" src={cover} alt={`${book.title} cover`} />
         // Fallback if cover is missing
      )}
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
