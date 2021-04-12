'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan", res)
};

exports.allMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if(error){
            connection.log(error)
        } else {
            response.ok(rows, res, rows.length === 0 ? 'Data Mahasiswa Not Found!' : `Success Get All Data Mahasiswa`)
        }
    })
}

exports.idMahasiswa = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id],
        function (error, rows, fields) {
            if(error){
                connection.log(error)
            } else {
                response.ok(rows, res, rows.length !== 0 ? `Success get data mahasiswa with id = ${id}` : `Id Mahasiswa Not Found!`)
            }
        }
    )
}