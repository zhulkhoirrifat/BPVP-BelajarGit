// =======================
// Conditional
// =======================

let hour = 10
if (hour < 18) {
    hello = "G'day";
    console.log(hello);
} else {
    hello = "G'night";
    console.log(hello);
}

let mood = "buruk"

if (mood == "baik"){
    console.log("Hari ini saya bahagia");
}
else if (mood == "buruk"){
    console.log("Hari ini saya bete")
}



const minimarket = "open";
const telur = "sold";
const buah = "sold";

if (minimarket == "open") {
    console.log("Minimarket sedang buka!");
    if (telur == "sold" && buah == "sold") {
        console.log("Belanja tidak lengkap")
    } else if (buah == "sold") {
        console.log("buah sedang sold telur ready")
    } else if (telur == "sold") {
        console.log("telur sedang sold buah ready")
    } else if (telur == "ready" && buah == "ready") {
        console.log("belanja lengkap")
    } else {
        console.log("input salah")
    }
    
} else {
    console.log("Minimarket tutup")
}


let nomor = 4;

switch (nomor) {
    case 1:
        console.log("Senin")
        break;
    case 2:
        console.log("Selasa")
        break;
    case 3:
        console.log("Rabu")
        break;
    case 4:
        console.log("Kamis")
        break;
    case 5:
        console.log("Jumat")
        break;
    case 6:
        console.log("Sabtu")
        break;
    case 7:
        console.log("Minggu")
        break;
    default:
        console.log("Out of bounds")
}


for (let i = 10; i > 1; i--) {
    console.log('nomor urut ke', i);
};
console.log("Keluar dari loop")


i = 0;
while (i < 20) {
  console.log(i);
  i+=2;
};
console.log("Keluar dari loop");



console.log("If Else")

const bilangan = 10;

if (bilangan % 2 == 0) {
    console.log("Bilangan Genap!");
} else if (bilangan % 2 == 1) {
    console.log("Bilangan Ganjil");
} else {
    console.log("Tidak valid!");
}
