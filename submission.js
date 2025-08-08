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

let nilai = 70;

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

// =======================
// Submission 4
// =======================

const tanggal = 17;
let bulan = 8;
const tahun = 1945;

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default:
        console.log("Out of bounds");
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`)

// =======================
// Submission 5
// =======================
for (let i = 1; i <= 10; i++) {
    console.log("Nomor urut ke-" + i);
}

console.log("\n")

for (let i = 10; i >= 1; i--) {
    console.log("Hitung mundur:", i);
}

console.log("\n")

for (let i = 2; i <= 20; i+=2) {
    console.log(i, "- I love coding"); 
}

console.log("\n")

for (let i = 20; i >= 2; i-=2) {
    console.log(i, "- I will become a developer"); 
}  

// =======================
// Submission 5
// =======================

i = 1
while (i <= 10) {
    console.log("Nomor urut ke-" + i);
    i++;
}

i = 10
while (i >= 1) {
    console.log("Hitung mundur:", i);
    i--;
}

i = 2
while (i <= 20) {
    console.log(i, "- I love coding"); 
    i += 2;
}

i = 20
while (i >= 2) {
    console.log(i, "- I will become a developer"); 
    i -= 2;
}

// =======================
// Submission 6
// =======================

console.log("\n")

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i, "- Angka Ganjil");
    } else if (i % 2 == 0) {
        console.log(i, "- Angka Genap");
    } else {
        console.log("Tidak Valid");
    }
}

// =======================
// Submission 7
// =======================

console.log("\n");

for (let i = 0; i < namaPeserta.length; i++) {
    console.log(`${i+1}:`, namaPeserta[i]);
}

// =======================
// Submission 8
// =======================
console.log("\n")

const fruits = [
    {
      nama: "Nanas",
      warna: "Kuning",
      "ada bijinya": "tidak",
      harga: 9000
    },
    {
      nama: "Jeruk",
      warna: "Oranye",
      "ada bijinya": "ada",
      harga: 8000
    },
    {
      nama: "Semangka",
      warna: ["Hijau", "Merah"],
      "ada bijinya": "ada",
      harga: 10000
    },
    {
      nama: "Pisang",
      warna: "Kuning",
      "ada bijinya": "tidak",
      harga: 5000
    }
  ];
  
let filterFruits = fruits.filter(function(item){
    return item["ada bijinya"] == "tidak"
})

console.log(filterFruits.sort())

// =======================
// Submission 9
// =======================

/*
   Tulis kode function di sini
*/

let dataFilm = [];

function tambahDataFilm(title, duration, genre, year) {
    let dataFilmObj = {
        nama: title,
        durasi: duration,
        genre: genre,
        tahun: year,
    };

    dataFilm.push(dataFilmObj)
    // return dataFilm.push({nama: title, durasi: duration, genre: genre, tahun: year})
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)



// =======================
// Submission 10
// =======================

let people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
  ]

const filteredPeople = people.filter(function(person){
    return person.gender == "male" && person.age >29
})

console.log(filteredPeople)

// =======================
// Submission 11
// =======================

let number = 0

for (let i = 0; i < people.length; i++) {
    number = number + people[i].age;
}

average = number / people.length

console.log("Rata-rata usia:", average)

// =======================
// Submission 12
// =======================

let sorted = people.sort(function(a, b) {
    return a.age - b.age
})

//versi arrow function
let sortedArrow = people.sort((a, b) => (a.age - b.age))

sortedArrow.forEach((people, index) => {
    console.log(index+1, "-", people.name)
});

// =======================
// Submission 13
// =======================

var phone = {
    name: "Samsung Galaxy Note 20",
    brand: "Samsung",
    colors: ["Black"],
    release: 2020
  }
  /*
   buatlah function anda disini
  */

function addColors(color) {
    phone.colors.push(color)
}

addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)


// =======================
// Submission 14
// =======================

function hitungBangunDatar(a, b) {
    if (arguments.length == 1) {
        function luasPersegi (a) {return a**2};
        console.log("Luas Persegi:", luasPersegi(a));
    } else{
        function luasPersegiPanjang (a, b) {return a * b}
        console.log("Luas Persegi Panjang:", luasPersegiPanjang(a, b));
    }
}

hitungBangunDatar(8)
hitungBangunDatar(12, 7)

// =======================
// Submission 15
// =======================

function hitungBangunRuang(a, b, c) {
    if (arguments.length == 1){
        function volumeKubik (a) {return a**3};
        console.log("Volume Kubik:", volumeKubik(a));
    } else{
        function volumeBalok (a, b, c) {return a * b * c}
        console.log("Volume Balok:", volumeBalok(a, b, c));
    }
}

hitungBangunRuang(8)
hitungBangunRuang(12, 7, 5)

// =======================
// Submission 16
// =======================

let sortPeople = people.sort((a, b) => (a.age - b.age));

function sortPeopleFunction(person, index=0) {
    // let sortPerson = person;
    if (index < person.length){
        newIndex = index+1
        console.log(newIndex +". " + person[index].name)
        sortPeopleFunction(person, newIndex);
    }
}
sortPeopleFunction(sortPeople)

// =======================
// Submission 17
// =======================

var phones=[
    {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
    {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
    {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
    {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
    {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
  ]

let filteredPhones = phones.filter(phone => phone.colors.includes('black'))

let sortSmartphone = filteredPhones.sort((a, b) => (a.year - b.year))

console.log(sortSmartphone)

function recursiveSmartphone(phone, index=0) {
    if (index < phone.length) {
        i = index+1
        const phoneName = phone[index].name
        const phoneColors = phone[index].colors.join(", ");
        console.log(`${i}. ${phoneName}, colors available: ${phoneColors}`);
        recursiveSmartphone(phone, i)
    }
}

recursiveSmartphone(sortSmartphone)


// =======================
// Submission 18
// =======================


const PI = 3.1415926535897932384626433832795028841971693993751058806613001927876611195909216420198


const areaCircle = (r) => {
    return PI * r**2
} 

const circumferenceCircle = (r) => {
    return 2 * PI * r
}

console.log(areaCircle(77))
console.log(circumferenceCircle(77))

// =======================
// Submission 19
// =======================

/* 
Tulis kode function di sini
*/

const introduce = (...args) => {
    const [nama, umur, gender, pekerjaan] = args;
    if (gender == "Perempuan") {
        return `Bu ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
    }
    else{
        return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
    }
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn) // Menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

//kode di bawah ini jangan dirubah atau dihapus
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah) // Menampilkan "bu sarah adalah seorang penulis yang berusia 30 tahun"


// =======================
// Submission 20
// =======================

const newFunction = (firstName, lastName) =>{
    return {
        firstName,
        lastName,
        fullName(){
          console.log(`${firstName} ${lastName}`)
        }
    }
    };
    
// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()
