import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMyBooks, getRentalBooks } from "../../utils/apiUtils.jsx";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import BooksGrid from "../../components/BooksGrid/BooksGrid";
import "./MyBooksPage.scss";

function MyBooksPage() {
    const { id } = useParams(); // Get user ID from the route
    const location = useLocation();
    const [books, setBooks] = useState([]);

    const user_id = 20; // Temporary hardcoded user ID

    // State to check if user is on "My Listings" or "My Rentals" page
    const isMyBooksPage = location.pathname.includes("/myBooks");
    const showEditOptions = isMyBooksPage; // Show edit/delete buttons for "My Listings" only

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let booksData;
                if (isMyBooksPage) {
                    booksData = await getMyBooks(user_id);
                } else {
                    booksData = await getRentalBooks(user_id);
                }
                setBooks(booksData || []);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };

        fetchBooks();
    }, [location.pathname]);

    return (
        <section className="mybooks">
            <section className="mybooks__header">
                <Link to={`/Home`} className="mybooks__header-link">
                    <img className="mybooks__arrow-icon" src={arrow} alt="Backwards Arrow" />
                </Link>
                {isMyBooksPage ? (
                    <h1 className="mybooks__my-books">My Listings</h1>
                ) : (
                    <h1 className="mybooks__rental-books">My Rentals</h1>
                )}
            </section>
            <BooksGrid books={books} isMyBooksPage={isMyBooksPage} showEditOptions={showEditOptions} />
        </section>
    );
}

export default MyBooksPage;
