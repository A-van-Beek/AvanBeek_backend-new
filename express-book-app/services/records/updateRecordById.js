import recordData from "../../data/records.json" assert { type: "json" };

const updateRecordById = (id, title, author, isbn, pages, available, genre) => {
  const record = recordData.records.find((record) => record.id === id);

  if (!record) {
    throw new Error(`Record with id ${id} was not found!`);
  }

  record.title = title ?? record.title;
  record.author = author ?? record.author;
  record.year = year ?? record.year;
  record.available = available ?? record.available;
  record.genre = genre ?? record.genre;

  return record;
};
// vraagtekens geven aan optioneel:
// als geen nieuwe titel gegeven, dan book.titel gebruiken

export default updateRecordById;
