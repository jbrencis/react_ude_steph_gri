import React, { useState } from "react";

export const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          placeholder="New book"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};
