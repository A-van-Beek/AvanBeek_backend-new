const sqlite3 = require("sqlite3").verbose();

// Verbinding maken met de database (vervang 'jouw_database.db' door de naam van je databasebestand)
const db = new sqlite3.Database("database.db");

// Voorbeeldquery uitvoeren
db.serialize(() => {
  db.each("SELECT * FROM jouw_tabel", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

// Databaseverbinding sluiten
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Databaseverbinding gesloten.");
});
