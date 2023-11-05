import express from "express";
import booksRouter from "./books.js";
import recordsRouter from "./routes/records.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/books", booksRouter);
app.use("/records", recordsRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/about", (req, res) => {
  const html = "<h1>About Us</h1><p>Welcome to our website!</p>";
  res.send(html);
});

const logStuff = (req, res, next) => {
  console.log(
    `Protocol: ${req.protocol} \nHost: ${req.get("host")} \nURL: ${
      req.originalUrl
    }`
  );
  next();
};

app.use(logStuff);

const checkHeader = (req, res, next) => {
  // console.log("vanuit checkHeader");
  if (req.get("X-Auth") === undefined) {
    res.status(400).send("Missing header X-Auth");
  } else {
    next();
  }
};

const checkQuery = (req, res, next) => {
  // console.log("vanuit checkQuery");
  if (req.query.name === undefined) {
    res.status(400).send("Missing query name");
  } else {
    next();
  }
};

app.get("/", logStuff, checkHeader, checkQuery, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
