import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import Book from "../../components/Book/Book.jsx"
import './HomePage.scss';

function HomePage() {
    return(
        <section className="home">
            <section className="home__header">
                <h1 className="home__title">Rent Books</h1>
                <div className="home__search-bar">
                    <input
                    className="home__search-text"
                    type="text"
                    placeholder="Search..."
                    />
                    <img
                    className="home__search-icon"
                    src={searchIcon}
                    alt="Search"
                    />
                </div>
            </section>
            <section className="home__books">
                <h2 className="home__sub-heading">Available Books</h2>

                {/* For n number of books from the books list call the Book page for each book */}
                <Book />
            </section>
        </section>
    );
}

export default HomePage;