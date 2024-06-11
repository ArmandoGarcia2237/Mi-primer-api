const db = require('../../DB/mysql')

const TABLA = 'weather';

function todos () {
    return db.todos(TABLA)
}

module.exports ={
    todos,
}