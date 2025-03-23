import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBook } from "../../utils/apiUtils";
import arrow from "../../assets/icons/arrow_back-24px.svg"
import "./BookDetailsPage.scss";

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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
        <Link to="/Home" className="book-details__back">
          <img src={arrow} className="book-details__arrow" alt="Back Arrow" />
        </Link>
        <h1 className="book-details__title">{book.title}</h1>
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
            <button className="book-details__rent">Rent Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetailsPage;
