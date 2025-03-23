import React from "react";
import hero from "../../assets/images/landing_page.jpg";
import "./LandingPage.scss";

function LandingPage({ handleLogin }) {
  return (
    <section className="landingpage">
      <img className="landingpage__hero" src={hero} alt="Hero Image of a Library" />
      <h1 className="landingpage__title">Welcome to BookHive🐝!</h1>
      <div className="landingpage__container">
        <div className="landingpage__content">
          <p className="landingpage__text">
            Find your next favourite read without breaking the bank. Rent books from others in your area, or share your own collection and earn some extra cash. It's sustainable, affordable, and fun!
          </p>
        </div>
        <div className="landingpage__info">
          <p className="landingpage__text">Discover new stories and connect with fellow bookworms in your community. Join the hive today!</p>
          <div className="landingpage__buttons">
            <button className="landingpage__button landingpage__button--login" onClick={handleLogin}>
              <h3>LogIn</h3>
            </button>
            <p className="landingpage__text landingpage__text--buttons">OR</p>
            <button className="landingpage__button landingpage__button--signup">
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
