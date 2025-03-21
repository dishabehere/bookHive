import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import './HomePage.scss';

function HomePage() {
    return(
        <section className="home">
            <section className="home__header">
                <h1 className="home__title">Rent Books</h1>
                <div className="warehouse-list__search-bar">
                    <input
                    className="warehouse-list__search-text"
                    type="text"
                    placeholder="Search..."
                    />
                    <img
                    className="warehouse-list__search-icon"
                    src={searchIcon}
                    alt="Search"
                    />
                </div>
            </section>
            <section className="home__books">
                <h2 className="home__sub-heading">Available Books</h2>
            </section>
        </section>
    );
}

export default HomePage;