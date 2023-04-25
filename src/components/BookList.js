import React from "react";
import { BookShow } from "./BookShow";
import { useBooksContext } from "../hooks/use-books-context";

export const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div>{renderedBooks}</div>;
};
