const sqlite3 = require("sqlite3").verbose();

// Verbinding maken met de database (vervang 'jouw_database.db' door de naam van je databasebestand)
const db = new sqlite3.Database("database.db");

// SQL-statement voor het selecteren van alle gebruikers
const selectQuery = `
  SELECT * FROM gebruikers
`;

// Voer het SQL-statement uit om alle gebruikers te selecteren
db.all(selectQuery, [], (err, rows) => {
  if (err) {
    throw err;
  }

  // Toon de geselecteerde gebruikers
  rows.forEach((row) => {
    console.log(
      `Gebruiker ID: ${row.id}, Naam: ${row.naam}, Leeftijd: ${row.leeftijd}`
    );
  });
});

// Databaseverbinding sluiten
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Databaseverbinding gesloten.");
});

// run code in console: node selectGebruikers.js
