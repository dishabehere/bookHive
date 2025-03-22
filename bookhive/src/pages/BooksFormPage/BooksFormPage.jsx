import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import BooksFormDetails from "../../components/BooksFormDetails/BooksFormDetails";
import "./BooksFormPage.scss";

function BooksFormPage() {
    const location = useLocation();
    const isAddPage = location.pathname.includes("/add");

    return(
        <section className="form-page">
            <section className="form-page__header">
                <Link to={`/Home`} className="form-page__header-link">
                    <img className="form-page__arrow-icon" src={arrow} alt="Backwards Arrow" />
                </Link>
                {isAddPage ? (
                    <h1 className="form-page__add-book">Add New Book</h1>
                ) : (
                    <h1 className="form-page__edit-book">Edit Book</h1>
                )}
            </section>
            
            <section className="form-page__container">
                <h2 className="form-page__title">Book Details</h2>
                <BooksFormDetails />
            </section>

        </section>
    );
}

export default BooksFormPage;