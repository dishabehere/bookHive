import React from "react";
import coverPlaceholder from "../../assets/images/cover.jpg"; // Fallback cover
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import "./Book.scss";

function Book({ book, showEditOptions, fromMyBooksPage, fromMyRentalsPage }) {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`} className="book__link" state={{ fromMyListings: showEditOptions, fromMyBooksPage, fromMyRentalsPage }}>
        <div className="book__hexagon">
          <img className="book__cover" src={book.cover || coverPlaceholder} alt={`${book.title} cover`} />
          <div className="hexagon__content">
            <h3 className="hexagon__title">{book.title}</h3>
            <p className="hexagon__author">by {book.author}</p>
            <p className="hexagon__status">Status: {book.status}</p>
            <p className="hexagon__address">{book.address}, {book.city}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Book;
