import React from "react";
import hero from "../../assets/images/landing_page.jpg" 

function LandingPage() {
    return(
        <section className="landingpage">
            <img className="landingpage__hero" src={hero} alt="Hero Image of a Library" />
            <div className="landingpage__container">
                <div className="landingpage__content">
                    <h1 className="landingpage__title">Welcome to BookHive🐝!</h1>
                    <p className="landingpage__text">Find your next favourite read without breaking the bank. Rent books from others in your area, or share your own collection and earn some extra cash. It's sustainable, affordable, and fun!</p>
                </div>
                <div className="landingpage__info">
                    <p className="landingpage__text">Discover new stories and connect with fellow bookworms in your community. Join the hive today!</p>
                    <div className="landingpage__buttons">
                        <button className="button button--login">LogIn</button>
                        <p className="landingpage__text">OR</p>
                        <button className="button button--signup">SignUp</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;