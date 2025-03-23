import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getBook } from "../../utils/apiUtils";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import "./BookDetailsPage.scss";

function BookDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const [book, setBook] = useState(null);

  // Check if the book was accessed from My Listings
  const fromMyListings = location.state?.fromMyListings || false;
  const fromMyBooksPage = location.state?.fromMyBooksPage || false;
  const fromMyRentalsPage = location.state?.fromMyRentalsPage || false;

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookData = await getBook(id);
      if (bookData) {
        setBook(bookData);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div className="book-details__loading">Loading...</div>;
  }

  return (
    <section className="book-details">
      <header className="book-details__header">
        <div className="book-details__container">
          <Link to="/Home" className="book-details__back">
            <img src={arrow} className="book-details__arrow" alt="Back Arrow" />
          </Link>
          <h1 className="book-details__title">{book.title}</h1>
        </div>
        
        {/* Show Edit & Delete icons if accessed from My Listings */}
          {fromMyListings && (
            <div className="book-details__actions">
              <Link to={`/books/${id}/edit`} className="book-details__link">
                <img className="book-details__edit-icon" src={editIcon} alt="Edit" />
              </Link>
              <img className="book-details__delete-icon" src={deleteIcon} alt="Delete" />
            </div>
        )}
      </header>

      <div className="book-details__content">
        <img className="book-details__cover" src={book.cover} alt={book.title} />

        <div className="book-details__wrapper">
          <div className="book-details__info">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Edition:</strong> {book.edition}</p>
            <p><strong>Status:</strong> {book.status}</p>
            <p><strong>Rating:</strong> ⭐ {book.rating}</p>
            <p><strong>Cost:</strong> ${book.cost}</p>
            <p><strong>Synopsis:</strong> {book.synopsis}</p>
          </div>

          <div className="book-details__owner">
            <h2 className="book-details__owner-title">Owner Details</h2>
            <div className="book-details__owner-info">
              <div className="book-details__owner-avatar">DB</div>
              <div>
                <p><strong>Name:</strong> {book.owner_name}</p>
                <p><strong>Location:</strong> {book.address}, {book.city}</p>
              </div>
            </div>
            {/* Hide Rent Button if accessed from My Listings or My Rentals */}
            {!fromMyBooksPage && !fromMyRentalsPage && (
              <button className="book-details__rent">Rent Now</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetailsPage;
