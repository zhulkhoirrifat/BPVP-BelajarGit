import readBooksPromise from './promise.js';
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
const bacaBuku = (index, waktu) => {
     readBooksPromise(waktu, books[index])
        .then(sisaWaktu => readBooksPromise(sisaWaktu, books[index+1]))
        .then(sisaWaktu => readBooksPromise(sisaWaktu, books[index+2]))
        .catch(error => console.error(error))
}

bacaBuku(0, 10000)