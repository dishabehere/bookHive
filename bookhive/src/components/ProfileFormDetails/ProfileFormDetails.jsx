import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, createUser, updateUser } from "../../utils/apiUtils";
import "./ProfileFormDetails.scss";

function ProfileFormDetails({ isAddPage }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        country: "",
    });

    useEffect(() => {
        if (!isAddPage && id) {
            const fetchUser = async () => {
                try {
                    const userData = await getUser(id);
                    setUser(userData);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            };
            fetchUser();
        }
    }, [id, isAddPage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isAddPage) {
                await createUser(user);
            } else {
                await updateUser(id, user);
            }
            navigate("/Home");
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="profile-form__group">
                <label className="profile-form__label">Name:</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} required />
            </div>

            <div className="profile-form__group">
                <label className="profile-form__label">Email ID:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </div>

            {isAddPage && (
                <>
                    <div className="profile-form__group">
                        <label className="profile-form__label">Password:</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} required />
                    </div>

                    <div className="profile-form__group">
                        <label className="profile-form__label">Retype Password:</label>
                        <input type="password" name="retypePassword" onChange={handleChange} required />
                    </div>
                </>
            )}

            <div className="profile-form__group">
                <label className="profile-form__label">Phone:</label>
                <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
            </div>

            <div className="profile-form__group">
                <label className="profile-form__label">Address:</label>
                <input type="text" name="address" value={user.address} onChange={handleChange} required />
            </div>

            <div className="profile-form__group">
                <label className="profile-form__label">City:</label>
                <input type="text" name="city" value={user.city} onChange={handleChange} required />
            </div>

            <div className="profile-form__group">
                <label className="profile-form__label">Country:</label>
                <input type="text" name="country" value={user.country} onChange={handleChange} required />
            </div>

            <div className="profile-form__buttons">
                <button type="button" className="profile-form__button profile-form__button--cancel" onClick={() => navigate(isAddPage ? "/" : "/Home")}>Cancel</button>
                <button type="submit" className="profile-form__button profile-form__button--submit">Save</button>
            </div>
        </form>
    );
}

export default ProfileFormDetails;
