import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { getBook, deleteBook } from "../../utils/apiUtils";
import ModalDelete from "../../components/ModalDelete/DeleteModal.jsx";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import "./BookDetailsPage.scss";

function BookDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fromMyListings = location.state?.fromMyListings || false;

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookData = await getBook(id);
      if (bookData) {
        setBook(bookData);
      }
    };
    fetchBookDetails();
  }, [id]);

  const openDeleteModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      navigate("/Home");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) return <div className="book-details__loading">Loading...</div>;

  return (
    <section className="book-details">
      <header className="book-details__header">
        <div className="book-details__container">
          <Link to="/Home" className="book-details__back">
            <img src={arrow} className="book-details__arrow" alt="Back Arrow" />
          </Link>
          <h1 className="book-details__title">{book.title}</h1>
        </div>

        {fromMyListings && (
          <div className="book-details__actions">
            <Link to={`/books/${id}/edit`} className="book-details__link">
              <img className="book-details__edit-icon" src={editIcon} alt="Edit" />
            </Link>
            <img
              className="book-details__delete-icon"
              src={deleteIcon}
              alt="Delete"
              onClick={openDeleteModal}
            />
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
        </div>
      </div>

      <ModalDelete
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleDelete={handleDelete}
        itemName={book.title}
        itemType="book"
      />
    </section>
  );
}

export default BookDetailsPage;
