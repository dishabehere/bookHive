import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMyBooks, getRentalBooks } from "../../utils/apiUtils.jsx";
import BooksGrid from "../../components/BooksGrid/BooksGrid";
import "./MyBooksPage.scss";

function MyBooksPage() {
    // const {user_id} = useParams(); // Ideally it should get user ID from the route
    const location = useLocation();
    const [books, setBooks] = useState([]);
    
    const user_id = 20; // Temporary hardcoded user ID

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let booksData;
                if (location.pathname.includes("/myBooks")) {
                    booksData = await getMyBooks(user_id);
                } else if (location.pathname.includes("/rentalBooks")) {
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
                
            </section>
            <BooksGrid books={books} />
        </section>
    );
}

export default MyBooksPage;
