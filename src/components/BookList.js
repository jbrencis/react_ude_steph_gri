import React from "react";
import { BookShow } from "./BookShow";

export const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books?.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));
  return <div>{renderedBooks}</div>;
};
