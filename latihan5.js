// =======================
// Recursive Function
// =======================


//program untuk menghitung mundur hingga 1
function countDown(number) {
    //menampilkan number
    console.log(number);

    //mengurangi nilai number
    let newNumber = number - 1;

    // kondisi jika nomor masih diatas 0
    if (newNumber > 0) {
        countDown(newNumber)
    }
}

countDown(4)

// =======================
// First-class Function
// =======================

function hitungLingkaran(radius) {
    const PI = 1.14195;
    
    function luas(r){return PI * r**2};
    function keliling(r){return 2 * PI * r};
    console.log("Luas:", luas(radius));
    console.log("Keliling:", keliling(radius));
}

hitungLingkaran(7)

// =======================
// First-class Function
// =======================


function tambah(a, b) {
    return a+b;
}

console.log(tambah(2, 5))

// =======================
// Currying Function
// =======================
let users = ["Fuad", "Hasan", "Ismi", "Budi", "Azhar"];

function tambahCurrying(a) {
    return function(b) {
        return a + b;
    }
}

console.log(tambahCurrying(2)(5))

// // Tanpa currying function
// function getGreeting(){
//     let x = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         x += i;
//     };
//     return "Selamat pagi";
// }

// function say(callback, name) {
//     let greeting = callback();
//     console.log(greeting, name);
// }

// users.map(function(user){
//     return say(getGreeting, user)
// })
    
// Pakai Currying function
function getGreeting() {
    let x = 0;
    for (let i = 0; i < 1000000000; i++) {
        x += i;
    }
    return "Selamat pagi";
}

function say(callback) {
    const greeting = callback();
    return function(name){
        console.log(greeting, name);   
    }
}

let sayGreeting = say(getGreeting);

users.map(function(user){
    sayGreeting(user)
})



// =======================
// Enhanced Object Literals (ES6)
// =======================

let nama = "John"

let orang = {
    nama, //: nama, //hapus key nama karena sama
    umur: 20
}

console.log(orang)



