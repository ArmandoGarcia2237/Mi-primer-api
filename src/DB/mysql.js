const mysql = require('mysql');
const config = require('../config');
const { resolve } = require('path');
const { rejects } = require('assert');

const dbconfig = {
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('el error db: ', err);
            setTimeout(conMysql, 200);
        } else {
            console.log('estas conectado a tu base de datos')
        }
    })

    conexion.on('error', erro => {
        console.log('tienes un error: ', erro);
        if(erro.code === 'PROTOCOL_CONECTION_LOST'){
            conMysql();
        }else{
            throw erro;
        }
    })
}

conMysql();

function todos(tabla){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function uno(tabla, id){

}

function agregar(tabla, data){

}
 function eliminar(tabla, id){

 }

 module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
 }