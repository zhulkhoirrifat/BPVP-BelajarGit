// Output awal
console.log("Hello!");

// Operasi penambahan string dan number
const tes = 1 + "1 tahun"; // number + string => hasil: string "11 tahun"
console.log("Hasil tes:", tes);

// =======================
// Menulis variabel utama
// =======================

const namaLengkap = "Zhulkhoir Rifat Rianda Raja Faqih";
const umur = 23;

// Template literal
const greet = `Halo, perkenalkan nama saya ${namaLengkap}, umur saya ${umur} tahun`;
const check = "halo apa kabar";

// =======================
// Operasi string pada greet
// =======================

console.log("Panjang string greet:", greet.length);                // Panjang total string
console.log("Karakter di index ke-2:", greet.charAt(2));          // Karakter ketiga (indeks mulai dari 0)
console.log("Slice dari index 1–4:", greet.slice(1, 5));           // Potong dari index 1 sampai sebelum 5
console.log("Substring dari index 1–4:", greet.substring(1, 5));   // Mirip slice, tapi tidak terima angka negatif
console.log("Huruf kapital semua:", greet.toUpperCase());          // Semua huruf jadi kapital
console.log("Huruf kecil semua:", greet.toLowerCase());            // Semua huruf jadi kecil

// =======================
// Operasi pada string 'check'
// =======================

console.log("Pisah berdasarkan spasi:", check.split(" "));         // Memecah string jadi array kata

// =======================
// Replace karakter
// =======================

const newText = greet.replace("a", "z"); // Ganti huruf pertama 'a' dengan 'z'
console.log("Setelah replace 'a' jadi 'z':", newText);

// =======================
// Operasi Aritmatika
// =======================

// Deklarasi angka
const angka1 = 2;
const angka2 = 3;

// Penjumlahan
let hasilPenjumlahan = angka1 + angka2;
console.log("Penjumlahan:", hasilPenjumlahan);

// Pengurangan
let hasilPengurangan = angka1 - angka2;
console.log("Pengurangan:", hasilPengurangan);

// Perkalian
let hasilPerkalian = angka1 * angka2;
console.log("Perkalian:", hasilPerkalian);

// Pembagian
let hasilPembagian = angka1 / angka2;
console.log("Pembagian:", hasilPembagian);

// Modulo
let hasilModulo = angka1 % angka2;
console.log("Modulo:", hasilModulo);

// Pangkat
let hasilPangkat = angka1 ** angka2;
console.log("Pangkat:", hasilPangkat);

// =======================
// Operasi Perbandingan
// =======================

// Deklarasi nilai perbandingan
const nilai1 = 15;
const nilai2 = 16;

// Menampilkan hasil perbandingan dengan penjelasan
console.log(`Apakah ${nilai1} == ${nilai2}?`, nilai1 == nilai2);   // Loose equality (nilai saja): false
console.log(`Apakah ${nilai1} === ${nilai2}?`, nilai1 === nilai2); // Strict equality (nilai dan tipe): false
console.log(`Apakah ${nilai1} != ${nilai2}?`, nilai1 != nilai2);   // Loose inequality (nilai saja): true
console.log(`Apakah ${nilai1} !== ${nilai2}?`, nilai1 !== nilai2); // Strict inequality (nilai dan tipe): true
console.log(`Apakah ${nilai1} > ${nilai2}?`, nilai1 > nilai2);     // Apakah nilai1 lebih besar dari nilai2: false
console.log(`Apakah ${nilai1} >= ${nilai2}?`, nilai1 >= nilai2);   // Apakah nilai1 lebih besar atau sama dengan nilai2: false
console.log(`Apakah ${nilai1} <= ${nilai2}?`, nilai1 <= nilai2);   // Apakah nilai1 lebih kecil atau sama dengan nilai2: true
