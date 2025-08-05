const pi = 3.14159;
const nilai1 = 5;
const nilai2 = 5;
const bentuk = "Lingkaran"; 

function hitungLuas(a, b, jenis) {
    let hasil;

    switch (jenis) {
        case "Persegi Panjang":
            // panjang = a, lebar = b
            hasil = a * b;
            break;
        case "Segitiga":
            // alas = a, tinggi = b
            hasil = 0.5 * a * b;
            break;
        case "Lingkaran":
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

