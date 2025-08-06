// =======================
// Submission 1
// =======================

const pi = 3.14159;
const nilai1 = 5;
const nilai2 = 7;
const bentuk = "lingkaran"; 

function hitungLuas(a, b, jenis) {
    let hasil;

    switch (jenis.toLowerCase()) {
        case "persegi panjang":
            // panjang = a, lebar = b
            hasil = a * b;
            break;
        case "segitiga":
            // alas = a, tinggi = b
            hasil = 0.5 * a * b;
            break;
        case "lingkaran":
            // jari-jari = a
            hasil = pi * a ** 2;
            break;
        default:
            hasil = "Jenis bangun datar tidak dikenali.";
    }
    return hasil;
}

const hasilLuas = hitungLuas(nilai1, nilai2, bentuk);
console.log(`Luas ${bentuk}:`, hasilLuas);

// =======================
// Submission 2
// =======================

const dataPeserta = ["Zhulkhoir Rifat Rianda Raja Faqih", "Laki-laki", "Programmer", "23"];

word = `Halo, nama saya ${dataPeserta[0]}. Saya ${dataPeserta[1]} berusia ${dataPeserta[3]} tahun. Pekerjaan saya adalah ${dataPeserta[2]}`;

console.log(word)

// =======================
// Submission 3
// =======================

let namaPeserta = []

// let peserta = ['Febri', 'Bagus', 'Tirta', 'Azra', 'Surya', 'Ragil', 'Norpa', 'Nanto', 'Ariq', 'Irpan', 'Deni', 'Rifat', 'Sulis', 'Sindi', 'Serly', 'Tita']

namaPeserta.push('Febri', 'Bagus', 'Tirta', 'Azra', 'Surya', 'Ragil', 'Norpa', 'Nanto', 'Ariq', 'Irpan', 'Deni', 'Rifat', 'Sulis', 'Sindi', 'Serly', 'Tita')

console.log(namaPeserta)

// =======================
// Submission 4
// =======================

let nilai = 8;

if (nilai <= 100 && nilai >= 80) {
    console.log(`Nilai ${nilai}: A`);
} else if (nilai < 80 && nilai >=70) {
    console.log(`Nilai ${nilai}: B`);
} else if (nilai < 70 && nilai >= 60) {
    console.log(`Nilai ${nilai}: C`);
} else if (nilai < 60 && nilai >= 50) {
    console.log(`Nilai ${nilai}: D`);
} else if (nilai < 50 && nilai >= 0) {
    console.log(`Nilai ${nilai}: E`);
} else {
    console.log("Input salah")
}