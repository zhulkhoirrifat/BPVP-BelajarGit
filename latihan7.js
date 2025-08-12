// =======================
// Class dasar mobil
// =======================
class Mobil {
    constructor(merk, pabrik) {
        // Property mobil
        this.merk = merk;        // merek mobil
        this.pabrik = pabrik;    // pabrik pembuat mobil
        this.suara = "honk! honk! vroomvroom"; // suara mobil
    }
}

// =======================
// Class mobil dengan method sederhana
// =======================
class InfoMobil {
    constructor(merk) {
        // Simpan merek mobil di property carName
        this.carName = merk;
    }

    // Method untuk menampilkan info
    present() {
        return "Saya punya mobil " + this.carName;
    }
}

// Membuat objek dari class InfoMobil
let mobilSaya = new InfoMobil("Toyota");
console.log(mobilSaya.present()); // Output: Saya punya mobil Toyota


// =======================
// Class mobil dengan parameter tambahan di method
// =======================
class InfoMobilDenganSalam {
    constructor(merk) {
        this.carName = merk;
    }

    // Method bisa menerima parameter tambahan 'salam'
    present(salam) {
        return salam + " , saya punya mobil " + this.carName;
    }
}

// Membuat objek dari class Mobil (bukan InfoMobil)
// Perhatian: Harus pakai class yang punya method 'present'
let mobilBaru = new InfoMobilDenganSalam("Honda");
console.log(mobilBaru.present("Halo")); // Output: Halo , saya punya mobil Honda


// =======================
// Contoh Class dengan Getter & Setter
// =======================
class MobilGetterSetter {
    constructor(merk) {
        // Property dengan tanda _ (underscore) biasanya dipakai
        // untuk menandakan "property internal"
        this._namaMobil = merk;
    }

    // Getter → digunakan untuk mengambil nilai property
    get namaMobil() {
        return this._namaMobil;
    }

    // Setter → digunakan untuk mengubah nilai property
    set namaMobil(namaBaru) {
        this._namaMobil = namaBaru;
    }
}

// Membuat objek baru
let mobilSayaGetSet = new MobilGetterSetter("Tesla");

// Mengubah nilai property lewat setter
mobilSayaGetSet.namaMobil = "Hyundai"; // Tesla diganti jadi Hyundai

// Mengambil nilai property lewat getter
console.log(mobilSayaGetSet.namaMobil); // Output: Hyundai
