// di index.js
import readBooks from "./callback.js";

let books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const bacaBuku = (index, waktu) => {
  if (index >= books.length) {
    return;
  }
  readBooks(waktu, books[index], (sisaWaktu) => {
    if (sisaWaktu > 0) {
      bacaBuku(index + 1, sisaWaktu);
    }
  });
};

bacaBuku(0, 10000);
