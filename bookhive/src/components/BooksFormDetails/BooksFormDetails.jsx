import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBook, createBook, updateBook } from "../../utils/apiUtils.jsx";
import "./BooksFormDetails.scss";

function BooksFormDetails() {
  const location = useLocation();
  const { id } = useParams(); 
  const navigate = useNavigate();
  const isAddPage = location.pathname.includes("/add");

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    edition: "",
    synopsis: "",
    cost: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isAddPage) {
      fetchBookDetails();
    }
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const bookData = await getBook(id);
      setFormData(bookData);
    } catch (error) {
      console.error("Failed to fetch book details:", error);
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      const formattedData = {
        owner_id: 20, // Fixed value
        title: formData.title.trim(),
        author: formData.author.trim(),
        synopsis: formData.synopsis.trim(),
        status: "available", // Fixed value
        renter_id: null, // Fixed value
        cost: parseFloat(formData.cost.trim()) || 0,
        rating: 4.6, // Fixed value
        edition: formData.edition.trim(),
        checkout_date: null, // Fixed value
        due_date: null, // Fixed value
      };

      console.log("Submitting Data:", formattedData);

      try {
        if (!isAddPage) {
          await updateBook(id, formattedData);
          alert("Book updated successfully!");
        } else {
          await createBook(formattedData);
          alert("Book added successfully!");
        }

        // Reset form
        setFormData({
          title: "",
          author: "",
          edition: "",
          synopsis: "",
          cost: "",
        });
        setSubmitted(false);

        navigate("/Home");
      } catch (error) {
        console.error("Error submitting form:", error?.response?.data || error.message);
        alert("Failed to submit the book details.");
      }
    }
  };

  const handleCancel = () => {
    navigate("/Home");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit} noValidate className="form__container">
        <div className="form__details">
          <div className="form__field">
            <h3 className="form__label">Title</h3>
            <input
              className={`form__input ${submitted && errors.title ? "form__input--error" : ""}`}
              placeholder="Enter book title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {submitted && errors.title && <span className="form__error">{errors.title}</span>}
          </div>

          <div className="form__field">
            <h3 className="form__label">Author</h3>
            <input
              className={`form__input ${submitted && errors.author ? "form__input--error" : ""}`}
              placeholder="Enter author name"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            {submitted && errors.author && <span className="form__error">{errors.author}</span>}
          </div>

          <div className="form__field">
            <h3 className="form__label">Edition</h3>
            <input
              className={`form__input ${submitted && errors.edition ? "form__input--error" : ""}`}
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
              className={`form__input ${submitted && errors.synopsis ? "form__input--error" : ""}`}
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
              className={`form__input ${submitted && errors.cost ? "form__input--error" : ""}`}
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
            {!isAddPage ? "Update Book" : "+ Add Book"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default BooksFormDetails;
