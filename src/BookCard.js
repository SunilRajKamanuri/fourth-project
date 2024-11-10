import React from "react";

const BookCard = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year } = book;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://via.placeholder.com/128x192?text=No+Image";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} className="book-cover" />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author_name ? author_name.join(", ") : "Unknown Author"}</p>
        <p>First Published: {first_publish_year || "N/A"}</p>
      </div>
    </div>
  );
};

export default BookCard;
