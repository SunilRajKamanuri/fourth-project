import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import BookList from "./BookList";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      setBooks(response.data.docs); // Extract book data from the response
    } catch (err) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default App;
