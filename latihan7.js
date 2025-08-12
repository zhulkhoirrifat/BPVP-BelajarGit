// =======================
// Class dasar mobil
// =======================
class MobilDasar {
  constructor(merk, pabrik) {
    // Property mobil
    this.merk = merk; // merek mobil
    this.pabrik = pabrik; // pabrik pembuat mobil
    this.suara = "honk! honk! vroomvroom"; // suara mobil
  }
}
new MobilDasar("Innova", "Toyota");
console.log(mobilBrand)

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

// Membuat objek dari class yang sesuai
let mobilBaru = new InfoMobilDenganSalam("Honda");
console.log(mobilBaru.present("Halo")); // Output: Halo , saya punya mobil Honda

// =======================
// Contoh Class dengan Getter & Setter
// =======================
class MobilGetterSetter {
  constructor(merk) {
    this._namaMobil = merk; // Property internal
  }

  // Getter → mengambil nilai
  get namaMobil() {
    return this._namaMobil;
  }

  // Setter → mengubah nilai
  set namaMobil(namaBaru) {
    this._namaMobil = namaBaru;
  }
}

let mobilSayaGetSet = new MobilGetterSetter("Tesla");
mobilSayaGetSet.namaMobil = "Hyundai"; // Tesla diganti jadi Hyundai
console.log(mobilSayaGetSet.namaMobil); // Output: Hyundai

// =======================
// Contoh Static Method
// =======================
class MobilStatic {
  constructor(merk) {
    this.carName = merk;
  }

  static halo() {
    return "Halo dari static method!";
  }
}

let mobilStaticObj = new MobilStatic("Lexus");
console.log(MobilStatic.halo()); // Output: Halo dari static method!

// =======================
// Class Parent (Inheritance)
// =======================
class MobilParent {
  constructor(merk, pabrik) {
    this.merk = merk;
    this.pabrik = pabrik;
  }

  infoMobil() {
    return `${this.merk} buatan ${this.pabrik}`;
  }
}

// =======================
// Class Child (warisan dari MobilParent)
// =======================
class MobilBalap extends MobilParent {
  constructor(merk, pabrik, topSpeed) {
    super(merk, pabrik); // memanggil constructor parent
    this.topSpeed = topSpeed;
  }

  // Method tambahan (tidak mengganti parent)
  infoBalap() {
    return `${this.infoMobil()} dengan top speed ${this.topSpeed} km/jam`;
  }
}

let ferrari = new MobilBalap("Ferrari", "Italia", 350);
console.log(ferrari.infoMobil()); // Ferrari buatan Italia
console.log(ferrari.infoBalap()); // Ferrari buatan Italia dengan top speed 350 km/jam

// =======================
// Override Method
// =======================
class MobilListrik extends MobilParent {
  constructor(merk, pabrik, baterai) {
    super(merk, pabrik);
    this.baterai = baterai;
  }

  // Override method parent
  infoMobil() {
    return `${this.merk} buatan ${this.pabrik} dengan baterai ${this.baterai} kWh`;
  }
}

let tesla = new MobilListrik("Tesla", "Tesla, Inc.", 100);
console.log(tesla.infoMobil()); // Tesla buatan Tesla, Inc. dengan baterai 100 kWh
