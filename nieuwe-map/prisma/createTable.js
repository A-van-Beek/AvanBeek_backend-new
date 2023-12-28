const sqlite3 = require("sqlite3").verbose();

// Verbinding maken met de database
const db = new sqlite3.Database("database.db");

// SQL-statement om een tabel te maken
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS gebruikers (
    id INTEGER PRIMARY KEY,
    naam TEXT NOT NULL,
    leeftijd INTEGER
  )
`;

// Voer het SQL-statement uit om de tabel te maken
db.run(createTableQuery, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Tabel succesvol gemaakt.");
});

// Databaseverbinding sluiten
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Databaseverbinding gesloten.");
});

// uitvoeren van dit script door in terminal: node createTable.js
