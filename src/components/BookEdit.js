import React, { useState } from "react";

export const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
};
