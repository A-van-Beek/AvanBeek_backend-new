import bookData from "../../data/books.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const getBookById = (id) => {
  // if (index === -1) {
  if (!book) {
    throw new NotFoundError("Book", id);
  }
  return bookData.books.find((book) => book.id === id);
};

export default getBookById;
