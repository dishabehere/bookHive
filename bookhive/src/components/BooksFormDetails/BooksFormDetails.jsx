import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BooksFormDetails.scss";

function BooksFormDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    edition: "",
    synopsis: "",
    cost: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.edition.trim()) newErrors.edition = "Edition is required";
    if (!formData.synopsis.trim()) newErrors.synopsis = "Synopsis is required";
    if (!formData.cost.trim() || isNaN(formData.cost))
      newErrors.cost = "Valid cost is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      console.log("Book Data:", formData);
      navigate("/");
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      edition: "",
      synopsis: "",
      cost: "",
    });
    setErrors({});
    setSubmitted(false);
    navigate("/");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit} noValidate className="form__container">
        <div className="form__details">
          <div className="form__field">
            <h3 className="form__label">Title</h3>
            <input
              className={`form__input ${
                submitted && errors.title ? "form__input--error" : ""
              }`}
              placeholder="Enter book title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {submitted && errors.title && <span className="form__error">{errors.title}</span>}
          </div>

          <div className="form__field">
            <h3 className="form__label">Edition</h3>
            <input
              className={`form__input ${
                submitted && errors.edition ? "form__input--error" : ""
              }`}
              placeholder="Enter book edition"
              type="text"
              name="edition"
              value={formData.edition}
              onChange={handleChange}
            />
            {submitted && errors.edition && <span className="form__error">{errors.edition}</span>}
          </div>

          <div className="form__field">
            <h3 className="form__label">Synopsis</h3>
            <textarea
              className={`form__input ${
                submitted && errors.synopsis ? "form__input--error" : ""
              }`}
              placeholder="Enter book synopsis"
              name="synopsis"
              value={formData.synopsis}
              onChange={handleChange}
            />
            {submitted && errors.synopsis && <span className="form__error">{errors.synopsis}</span>}
          </div>

          <div className="form__field">
            <h3 className="form__label">Cost</h3>
            <input
              className={`form__input ${
                submitted && errors.cost ? "form__input--error" : ""
              }`}
              placeholder="Enter book cost"
              type="text"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
            {submitted && errors.cost && <span className="form__error">{errors.cost}</span>}
          </div>
        </div>

        <div className="form__buttons">
          <button type="button" className="form__button form__button--cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="form__button form__button--submit">
            + Add Book
          </button>
        </div>
      </form>
    </section>
  );
}

export default BooksFormDetails;
