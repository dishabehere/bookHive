import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, deleteUser } from "../../utils/apiUtils";
import ModalDelete from "../../components/ModalDelete/DeleteModal.jsx";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import "./MyProfilePage.scss";

function MyProfilePage() {
  const user_id = 20;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const openDeleteModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDelete = async () => {
    try {
      await deleteUser(user_id);
      navigate("/Home");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (!user) return <div className="profile__loading">Loading...</div>;

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
          <img
            className="profile__delete-icon"
            src={deleteIcon}
            alt="Delete Profile"
            onClick={openDeleteModal}
          />
        </div>
      </header>

      <div className="profile__content">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>

      <ModalDelete
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleDelete={handleDelete}
        itemName={user.name}
        itemType="user"
      />
    </section>
  );
}

export default MyProfilePage;
