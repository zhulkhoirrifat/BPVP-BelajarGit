// =======================
// Asynchronous Example
// =======================

// setTimeout adalah cara untuk menjalankan kode setelah beberapa waktu tertentu (3000ms = 3 detik).
setTimeout(function() {
    console.log("Saya dijalankan belakangan"); // Ini akan muncul setelah 3 detik.
}, 3000);

// Ini akan langsung dijalankan pertama kali karena tidak ada penundaan.
console.log("Saya dijalankan pertama");


// =======================
// Callback Example
// =======================

// Fungsi ini akan memeriksa nomor antrian dokter dan memanggil callback untuk memberi informasi apakah bisa langsung masuk atau harus menunggu.
function periksaDokter(nomorAntri, callback) {
    if (nomorAntri > 50) {
        // Jika nomor antri lebih dari 50, maka callback menerima nilai false
        callback(false);
    } else if (nomorAntri < 10) {
        // Jika nomor antri kurang dari 10, berarti bisa segera masuk, callback menerima nilai true
        callback(true);
    }
}

// Menjalankan periksaDokter dengan nomor antri 65, lalu mengeksekusi callback berdasarkan kondisi yang ada.
periksaDokter(65, function(check) {
    if (check) {
        console.log("sebentar lagi giliran saya"); // Kalau check true, berarti sebentar lagi giliran kita
    } else {
        console.log("saya jalan jalan dulu"); // Kalau check false, berarti harus menunggu lebih lama
    }
});


// =======================
// Asynchronous with Callback (Queue Check)
// =======================

// Fungsi ini akan mengecek nomor antrian dokter, setiap 1 detik, dan memperbarui antrian hingga mencapai 10.
function periksaAntrianDokter(nomorAntri, callback) {
    console.log("Sekarang antrian ke-" + nomorAntri); // Menampilkan nomor antrian saat ini
    setTimeout(function () {
        if (nomorAntri === 10) {
            // Jika nomor antri mencapai 10, berarti sudah masuk ke dokter
            console.log("saya masuk ke ruangan dokter");
            callback(0); // Callback menerima 0 sebagai tanda selesai
        } else {
            // Jika nomor antri belum 10, menunggu dulu
            console.log("saya masih menunggu");
            callback(nomorAntri + 1); // Memanggil kembali dengan nomor antri bertambah 1
        }
    }, 1000); // Menunggu 1 detik sebelum mengecek kembali
}

// Menjalankan periksaAntrianDokter dengan nomor antri 7 dan menggunakan callback untuk memperbarui nomor antrian
periksaAntrianDokter(7, function(nomorAntriBaru) {
    console.log("Nomor antrian baru:", nomorAntriBaru); // Menampilkan nomor antri baru yang diperbarui
    return nomorAntriBaru; // Mengembalikan nomor antri yang baru
});

// =======================
// Nested Callback (Callback Hell)
// =======================

// Di bawah ini kita mencoba untuk memanggil periksaAntrianDokter beberapa kali dengan callback yang saling bertumpuk (nested callback).
// Ini biasa disebut "Callback Hell", yang sulit dibaca dan dikelola karena semakin banyak callback yang harus ditangani.
periksaAntrianDokter(7, function(nomorAntriBaru) {
    // Panggilan berikutnya, periksaAntrianDokter dengan nomor antri yang sudah diperbarui
    periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1) {
        periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2) {
            periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3) {
                console.log("Nomor antrian akhir:", nomorAntriBaru3); // Menampilkan nomor antri akhir
                return nomorAntriBaru3; // Kita terus berlanjut sampai nomor antri mencapai 0
            });
        });
    });
});

// =======================
// Callback with Recursive Function (Improved)
// =======================

// Di sini kita menggunakan rekursi untuk menggantikan callback hell, agar lebih bersih dan mudah dibaca.
function execute(nomorAntri) {
    periksaAntrianDokter(nomorAntri, function(nomorAntriBaru) {
        if (nomorAntriBaru !== 0) {
            // Jika nomor antri belum 0, panggil execute lagi untuk memeriksa nomor antri berikutnya
            execute(nomorAntriBaru);
        }
    });
}

execute(7); // Mulai dengan nomor antri 7


// =======================
// Promise Example
// =======================

let isMomHappy = false; // Misalnya, kondisi apakah ibu senang atau tidak

// Promise adalah cara untuk menangani operasi asynchronous yang lebih mudah dibaca
let willIGetNewPhone = new Promise(function(resolve, reject) {
    if (isMomHappy) {
        let phone = {
            brand: "Samsung",
            color: "black"
        };
        resolve(phone); // Jika ibu senang, kembalikan objek ponsel
    } else {
        let reason = new Error("mom is not happy");
        reject(reason); // Jika ibu tidak senang, beri alasan mengapa
    }
});

function askMom() {
    willIGetNewPhone
        .then(function(fulfilled) {
            // Jika promise resolve (ibu senang), tampilkan objek ponsel
            console.log(fulfilled);
        })
        .catch(function(error) {
            // Jika promise reject (ibu tidak senang), tampilkan error
            console.log(error.message);
        });
}

askMom(); // Menjalankan fungsi askMom()


// =======================
// Promise with Data Lookup Example
// =======================

function periksaDataPasien(nomorIdPasien) {
    let dataPasien = [
        { id: 1, nama: "John", jenisKelamin: "Laki-laki" },
        { id: 2, nama: "Michael", jenisKelamin: "Laki-laki" },
        { id: 3, nama: "Sarah", jenisKelamin: "Perempuan" },
        { id: 4, nama: "Frank", jenisKelamin: "Laki-laki" },
    ];

    return new Promise(function(resolve, reject) {
        let pasien = dataPasien.find(x => x.id === nomorIdPasien); // Mencari pasien berdasarkan id
        if (pasien === undefined) {
            // Jika pasien tidak ditemukan
            reject("Data pasien tidak ada");
        } else {
            // Jika pasien ditemukan
            resolve(pasien);
        }
    });
}

// Menjalankan periksaDataPasien dengan nomor ID 5 (yang tidak ada di data)
periksaDataPasien(5)
    .then(function(data) {
        console.log(data); // Jika pasien ditemukan, tampilkan data pasien
    })
    .catch(function(err) {
        console.log(err); // Jika pasien tidak ditemukan, tampilkan pesan error
    });

// =======================
// Async
// =======================

// Fungsi doAsync() mengembalikan sebuah Promise
function doAsync(){
    return new Promise(function(resolve, reject){
        let check = true; // Variabel check yang bernilai true atau false untuk menentukan hasil
        if (check) {
            resolve("berhasil"); // Jika check true, promise berhasil dan mengembalikan "berhasil"
        } else {
            reject("gagal"); // Jika check false, promise gagal dan mengembalikan "gagal"
        }
    });
}

// Fungsi hello() menggunakan async/await untuk menunggu hasil Promise dari doAsync
async function hello(){
    try {
        let result = await doAsync(); // Menunggu hingga doAsync() selesai dan hasilnya disimpan di 'result'
        console.log(result); // Menampilkan hasil yang berhasil ("berhasil")
    } catch (error) {
        console.log(error); // Jika terjadi error (misalnya reject), tampilkan pesan error
    }
}

// Menjalankan fungsi hello()
hello();

// Error handling

// Mendeklarasikan fungsi async 'hello' yang akan menangani operasi asynchronous
async function hello(){
    try {
        // 'await' digunakan untuk menunggu hasil dari Promise yang dikembalikan oleh 'doAsync'
        let result = await doAsync(); // Program menunggu hingga Promise selesai, lalu menyimpan hasilnya di 'result'
        
        // Jika Promise berhasil (resolved), hasilnya akan dicetak ke console
        console.log(result); // Menampilkan hasil yang berhasil, misalnya "berhasil"
    } catch (err) {
        // Jika Promise gagal (rejected), eksekusi berlanjut ke sini dan 'err' akan berisi pesan error
        console.log(err); // Menampilkan pesan error, misalnya "gagal"
    }
}

// Menjalankan fungsi 'hello' yang sudah didefinisikan di atas
hello();

