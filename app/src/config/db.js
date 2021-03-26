//데이터베이스
const mysql = require("mysql");     //mysql을 사용함

const db = mysql.createConnection({
    host: process.env.DB_HOST,              //환경변수
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
});

db.connect();   //연결을 요청하는 매서드

module.exports = db;