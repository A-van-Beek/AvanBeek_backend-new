import express from "express";
import getBooks from "./services/books/getBooks.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  try {
    const books = getBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of books!");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
