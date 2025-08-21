const { request, response } = require("express");
const { connectionPool } = require("../config/database");

const proficient_index = (grade) => {
    let proficient_index;

    if (grade <= 100 && grade >= 80) {
        proficient_index = 'A';
    } else if (grade < 80 && grade >= 70) {
        proficient_index = 'B';
    } else if (grade < 70 && grade >= 60) {
        proficient_index = 'C';
    } else if (grade < 60 && grade >= 50) {
        proficient_index = 'D';
    } else if (grade < 50 && grade >= 0) {
        proficient_index = 'E';
    } else {
        return null;
    }

    return proficient_index;
}

const createGrade = (request, response) => {
  let { nama, mata_kuliah, nilai } = request.body;

  epi = proficient_index(nilai);
  
  queryText = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) VALUES('${nama}', '${mata_kuliah}', ${nilai}, '${epi}', NOW(), NOW())`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    response.json("Student grades were successfully added");
  });
}

const readGrade = (request, response) => {
    let queryText = `SELECT * FROM nilai_mahasiswa`;
    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
        }
        let students = data.map(element => {
            let {id, nama, mata_kuliah, indeks_nilai, created_at, updated_at} = element;
            let student = {};
            student.id = id;
            student.nama = nama;
            student.mata_kuliah = mata_kuliah;
            student.indeks_nilai = indeks_nilai;
            student.created_at = created_at;
            student.updated_at = updated_at;

            return student;
        });
        response.json(students);
    });
}

const updateGrade = (request, response) => {
    const {nama, mata_kuliah, nilai} = request.body;
    let { id } = request.params;
    epi = proficient_index(nilai);
    let queryText = `UPDATE nilai_mahasiswa SET nama='${nama}', mata_kuliah='${ mata_kuliah }', nilai=${ nilai }, indeks_nilai='${ epi }', updated_at=NOW() WHERE id=${ id }`;
    connectionPool.query(queryText, (err, data) =>{
        if (err) {
            console.error(err);
            return;
        }
        response.json("Student grade were successfully updated!");
    });
}

const deleteGrade = (request, response) => {
    let { id } = request.params;
    let queryText = `DELETE FROM nilai_mahasiswa WHERE id=${ id }`;
    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        response.json("Student grade were successfully deleted!");
    });
}


module.exports = { createGrade, readGrade, updateGrade, deleteGrade }