import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getAllBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/books/find?`);
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
};

// Get a book
export const getBook = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/books/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
};
  
// Create a new book
export const createBook = async (bookData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/books`, bookData);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
};
  
// Update an existing book
export const updateBook = async (id, bookData) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/books/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error("Error updating book:", error);
      throw error;
    }
};
  
// Delete a book by ID
export const deleteBook = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/books/${id}`);
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
};

// Get the user's books
export const getMyBooks = async (id) => {
  try {
      const response = await axios.get(`${BASE_URL}/api/users/${id}/myBooks`);
      return response.data;
  } catch (error) {
      console.error("Error fetching user's books:", error);
      throw error;
  }
};

// Get the books rented by the user
export const getRentalBooks = async (id) => {
  try {
      const response = await axios.get(`${BASE_URL}/api/users/${id}/rentalBooks`);
      return response.data;
  } catch (error) {
      console.error("Error fetching rental books:", error);
      throw error;
  }
};

// Get a user
export const getUser = async (user_id) => {
  try {
      const response = await axios.get(`${BASE_URL}/api/users/${user_id}`);
      return response.data;
  } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
  }
};