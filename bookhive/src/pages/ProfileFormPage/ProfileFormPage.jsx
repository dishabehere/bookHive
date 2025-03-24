import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import ProfileFormDetails from "../../components/ProfileFormDetails/ProfileFormDetails";
import "./ProfileFormPage.scss";

function ProfileFormPage() {
    const location = useLocation();
    const isAddPage = location.pathname.includes("/add");

    return (
        <section className="form-page">
            <section className="form-page__header">
                <Link to={`/Home`} className="form-page__header-link">
                    <img className="form-page__arrow-icon" src={arrow} alt="Backwards Arrow" />
                </Link>
                {isAddPage ? (
                    <h1 className="form-page__add-user">SignUp</h1>
                ) : (
                    <h1 className="form-page__edit-user">Edit Profile</h1>
                )}
            </section>

            <section className="form-page__container">
                <h2 className="form-page__title">User Details</h2>
                <ProfileFormDetails isAddPage={isAddPage} />
            </section>
        </section>
    );
}

export default ProfileFormPage;
