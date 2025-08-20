const express = require('express')
const app = express();
const port = 3000;

const getTabung = (req, res) =>{
    const pi = 3.14195;
    const jari = parseFloat(req.params.jari);
    const tinggi = parseFloat(req.params.tinggi);

    if (isNaN(jari) || isNaN(tinggi)) {
        return res.status(404).json({error: "parameter harus berupa angka!"})
    }

    const luasAlasTabung = pi * jari ** 2; 
    const kelilingAlasTabung = 2 * pi * jari;
    const volumeTabung = luasAlasTabung * tinggi;

    res.send(`Jari Jari : ${jari}, tinggi: ${tinggi}, volume tabung : ${volumeTabung}, luas alas tabung : ${luasAlasTabung}, keliling alas tabung : ${kelilingAlasTabung}`);

}

app.get('/lingkaran-tabung/:jari/:tinggi', getTabung);


let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
];

const routeDataOrang = (req, res) => {
    let result = []
    let { umur, jenisKelamin } = req.query;
    
    let umurNumber = Number(umur);
    if (isNaN(umurNumber)) {
        res.send("Bukan Umur!")
    }
    
    dataOrang.forEach((people, i) => {
        if ((!umur || people.umur >= umurNumber) &&(!jenisKelamin || people.jenisKelamin === jenisKelamin))           {
            result += `${i + 1}. ${dataOrang[i].name} - Pekerjaan: ${dataOrang[i].pekerjaan} - Umur: ${dataOrang[i].umur}</br>`;
        }
    });
    res.send(result)
}

const routeDataOrangId = (req, res) => {
    let { id } = req.params;

    let orang = dataOrang.find((person) => person.id === Number(id));

    if (!orang) {
        return res.send("Maaf data tidak ditemukan");
    }

    // res.send(result)
    if (orang.jenisKelamin == 'L') {
        res.send(`Pak ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`);
    } else {
        res.send(`Bu ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`);
    }
}

// routenya: http://localhost:3000/data-orang?umur=30&jenisKelamin=L
app.get('/data-orang', routeDataOrang)
app.get('/data-orang/:id', routeDataOrangId)



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
    