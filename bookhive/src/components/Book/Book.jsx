import React from "react";
import './Book.scss';

function Book({ book }) {
    return (
        <div className="book">
            <div className="book__hexagon">
                <img src={book.cover} alt={book.title} className="book__cover" />
            </div>
            <div className="book__details">
                <h3 className="book__title">{book.title}</h3>
                <p className="book__status">Status: {book.status}</p>
                <p className="book__address">{book.address}, {book.city}</p>
            </div>
        </div>
    );
}

export default Book;
