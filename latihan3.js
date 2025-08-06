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