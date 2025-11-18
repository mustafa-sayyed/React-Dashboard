import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const login = (data: { email: string; password: string }) => {
  return api.post("/users/login", data);
};

export const signup = (data: { name: string; email: string; password: stirng }) => {
  return api.post("/users/signup", data);
};

export const getBooks = () => {
  return axios.get(
    `https://api.bigbookapi.com/search-books?query=philosophy&number=100&api-key=${
      import.meta.env.VITE_BOOK_API_KEY
    }`
  );
};
