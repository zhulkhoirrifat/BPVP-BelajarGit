// =======================
// Menulis Function
// =======================

// Deklarasi function
function myFunction(a, b) {
    return a * b;
}

// Memanggil function dan menyimpan hasilnya
let hasil = myFunction(5, 3);

// Menampilkan hasil function
console.log("Hasil perkalian:", hasil);


// =======================
// Membuat Array
// =======================

// Deklarasi array
const peserta = ["Tirta", "Ragil", "Deni", "Serly"];

// Menampilkan data berdasarkan index
console.log("Peserta ke-3:", peserta[2]);
console.log("Peserta ke-4:", peserta[3]);

// length -> Menghitung panjang array
console.log("Panjang array:", peserta.length);

// push -> Menambahkan 1 data ke index paling akhir
peserta.push("Tri");
console.log("Setelah push:", peserta);

// pop -> Menghapus data dari index paling akhir
peserta.pop();
console.log("Setelah pop:", peserta);

// unshift -> Menambahkan 1 data ke index paling awal
console.log("Sebelum unshift:", peserta);
peserta.unshift("Sulis");
console.log("Setelah unshift:", peserta);

// shift -> Menghapus data dari index paling awal
console.log("Sebelum shift:", peserta);
peserta.shift();
console.log("Setelah shift:", peserta);

// join -> Menggabungkan 