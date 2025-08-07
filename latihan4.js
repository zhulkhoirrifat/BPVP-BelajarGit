// =======================
// Object Tunggal (Satu Orang)
// =======================

let person = {
    firstName: "Jane",
    lastName: "Doe", // Gunakan penamaan tanpa spasi agar konsisten
    age: 25,         // Gunakan tipe data number untuk umur
    job: "Programmer",
    hobby: ["coding", "netflix", ["gaming", "learning"]],
};

// Akses properti dari object
console.log("First Name:", person.firstName);
console.log("Job:", person.job);
console.log("Last Name:", person.lastName);
console.log("Hobi Belajar:", person.hobby[2][1]); // Mengakses 'learning'


// =======================
// Array of Object (Beberapa Orang)
// =======================

let people = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        job: "Programmer",
        hobby: ["coding", "netflix", ["gaming", "learning"]],
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 23,
        job: "Project Manager",
        hobby: ["coding", "netflix", ["gaming", "learning"]],
    },
    {
        firstName: "Fulan",
        lastName: "Doe",
        age: 44,
        job: "CEO",
        hobby: ["coding", "netflix", ["gaming", "learning"]],
    },
    {
        firstName: "Fulana",
        lastName: "Doe",
        age: 17,
        job: "Programmer",
        hobby: ["coding", "netflix", ["gaming", "learning"]],
    }
];

// Akses properti dari array of object
console.log("Pekerjaan orang pertama:", people[0].job);

// Looping dengan for
console.log("Daftar nama (for loop):");
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}

// Menggunakan forEach
console.log("Daftar nama (dengan forEach):");
people.forEach((person) => {
  console.log("Nama:", person.firstName);
});

// forEach dengan index
console.log("Daftar nama dengan indeks:");
people.forEach((person, index) => {
  console.log(`${index}: ${person.firstName}`);
});

// Looping dengan forEach (cocok untuk iterasi data)
console.log("Daftar nama (forEach):");
people.forEach(function(person) {
    console.log("Nama:", person.firstName); 
});

// Looping dengan forEach + index
console.log("Daftar nama dengan indeks:");
people.forEach(function(person, index) {
    console.log(index + ":", person.firstName);
});


// =======================
// Menggunakan map untuk membuat array nama
// =======================

let names = people.map(function(person) {
    return person.firstName;
});

console.log("Array nama:", names);


// =======================
// Filter
// =======================

let filterPerson = people.filter(function(item){
    return item.age < 30; //filter dengan umur dibawah 30
})

console.log(filterPerson)


// =======================
// Object Baru
// =======================

let student = [];

// Membuat object baru
const studentObject = {
    id: 1,
    name: "Rifat",
  };

// Cara alternatif membuat object baru
let studentObjectAlt = {};
studentObject.id = 1;
studentObject.name = "Rifat";

console.log(studentObject);

// Menambahkan student baru ke array
student.push(studentObject);
console.log(student)


let angka = [10, 25, 16, 7]

console.log(angka)

let jumlah = 0

for (let i = 0; i < angka.length; i++) {
    jumlah = jumlah + angka[i];
}

console.log(jumlah)