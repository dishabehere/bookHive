import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../utils/apiUtils";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import "./MyProfilePage.scss";

function MyProfilePage() {
//   const { id } = useParams(); // Get user ID from the route
  const user_id = 20;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(user_id);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, [user_id]);

  if (!user) {
    return <div className="profile__loading">Loading...</div>;
  }

  return (
    <section className="profile">
      <header className="profile__header">
        <div className="profile__container">
          <Link to="/Home" className="profile__back">
            <img src={arrow} className="profile__arrow" alt="Back Arrow" />
          </Link>
          <h1 className="profile__title">{user.name}</h1>
        </div>

        <div className="profile__actions">
          <Link to={`/profile/${user_id}/edit`} className="profile__edit-link">
            <img className="profile__edit-icon" src={editIcon} alt="Edit Profile" />
          </Link>
          <img className="profile__delete-icon" src={deleteIcon} alt="Delete Profile" />
        </div>
      </header>

      <div className="profile__content">
        <div className="profile__info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Country:</strong> {user.country}</p>
        </div>
      </div>
    </section>
  );
}

export default MyProfilePage;
