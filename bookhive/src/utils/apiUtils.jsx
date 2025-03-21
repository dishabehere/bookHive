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