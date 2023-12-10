const sqlite3 = require("sqlite3").verbose();

// Verbinding maken met de database
const db = new sqlite3.Database("database.db");

// Gebruiker om toe te voegen
const nieuweGebruiker = {
  naam: "Jantje Jansen",
  leeftijd: 40,
};

// SQL-statement om een gebruiker toe te voegen
const insertQuery = `
  INSERT INTO gebruikers (naam, leeftijd)
  VALUES ($naam, $leeftijd)
`;

// Voer het SQL-statement uit om de gebruiker toe te voegen
db.run(
  insertQuery,
  {
    $naam: nieuweGebruiker.naam,
    $leeftijd: nieuweGebruiker.leeftijd,
  },
  function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Gebruiker met ID ${this.lastID} toegevoegd.`);
  }
);

// Databaseverbinding sluiten
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Databaseverbinding gesloten.");
});

// uitvoeren van dit script door in terminal: node addGebruiker.js
