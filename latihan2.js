// =======================
// Function (Fungsi)
// =======================

// Membuat function dengan 2 parameter (a dan b)
function myFunction(a, b) {
    return a * b; // Mengembalikan hasil perkalian a dan b
}

// Memanggil function dan menyimpan hasilnya ke dalam variabel 'hasil'
let hasil = myFunction(5, 3);

// Menampilkan hasil perkalian
console.log("Hasil perkalian:", hasil);


// =======================
// Array
// =======================

// Membuat array bernama 'peserta'
const peserta = ["Zhulkhoir", "Rifat", "Rianda", "Raja", "Faqih"];

// Menampilkan peserta berdasarkan indeks (dimulai dari 0)
console.log("Peserta ke-3:", peserta[2]); // Rianda
console.log("Peserta ke-4:", peserta[3]); // Raja

// Menampilkan panjang (jumlah elemen) array
console.log("Jumlah peserta:", peserta.length);


// -----------------------
// Manipulasi Array
// -----------------------

// push() = Menambahkan data ke akhir array
peserta.push("Tri");
console.log("Setelah push (tambah di akhir):", peserta);

// pop() = Menghapus data dari akhir array
peserta.pop();
console.log("Setelah pop (hapus dari akhir):", peserta);

// unshift() = Menambahkan data ke awal array
console.log("Sebelum unshift:", peserta);
peserta.unshift("Rif");
console.log("Setelah unshift (tambah di awal):", peserta);

// shift() = Menghapus data dari awal array
console.log("Sebelum shift:", peserta);
peserta.shift();
console.log("Setelah shift (hapus dari awal):", peserta);


// -----------------------
// Operasi Lain pada Array
// -----------------------

// join() = Menggabungkan semua elemen menjadi string
console.log("Gabungan semua peserta:", peserta.join(' '));

// sort() = Mengurutkan array secara alfabet (A-Z)
console.log("--SORT--");
console.log("Sebelum sort:", peserta);
let sortPeserta = peserta.sort();
console.log("Setelah sort (A-Z):", sortPeserta);

// reverse() = Membalik urutan array (Z-A)
console.log("--REVERSE--");
console.log("Sebelum reverse:", peserta);
let reversePeserta = peserta.reverse();
console.log("Setelah reverse (Z-A):", reversePeserta);

// slice() = Mengambil sebagian data dari array tanpa mengubah aslinya
console.log('--SLICE--');
console.log("Ambil elemen indeks 1 sampai 2:", peserta.slice(1, 3)); // indeks 1 dan 2 saja

// splice() = menyisipkan elemen dalam array
console.log('--SPLICE--');
// Contoh: Hapus 1 elemen di index-2 dan menambahkan Andi dan Budi
console.log("Sebelum splice:", peserta);
peserta.splice(2, 1, "Andi", "Budi");
console.log("Setelah splice:", peserta);

// Mengubah elemen array
console.log("--EDIT ELEMEN--");
peserta[2] = 'Iya';
console.log(peserta);

//