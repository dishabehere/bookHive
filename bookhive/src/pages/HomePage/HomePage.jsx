// HomePage.jsx
import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import BooksGrid from "../../components/BooksGrid/BooksGrid";
import { getAllBooks } from "../../utils/apiUtils.jsx";
import "./HomePage.scss";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getAllBooks();
        if (data && typeof data === "object") {
          const booksArray = Object.values(data);
          setBooks(booksArray);
        } else {
          console.error("Error: Data is not a valid object", data);
        }
      } catch (error) {
        console.error("Error fetching books", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <section className="home">
      <section className="home__header">
        <h1 className="home__title">Rent Books</h1>
        <div className="home__search-bar">
          <input className="home__search-text" type="text" placeholder="Search..." />
          <img className="home__search-icon" src={searchIcon} alt="Search" />
        </div>
      </section>

      <section className="home__books">
        <h2 className="home__sub-heading">Available Books</h2>
        {books.length > 0 ? <BooksGrid books={books} /> : <p>No books available</p>}
      </section>
    </section>
  );
}

export default HomePage;
