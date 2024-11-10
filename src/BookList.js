import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p>No books found. Try a different search.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
