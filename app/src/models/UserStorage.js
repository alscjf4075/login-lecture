"use strict";

const db = require("../config/db");     //상위폴더 안에 config안에 db모듈을 불러옴

class UserStorage {   
  
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
            if(err) reject(`${err}`);
            else resolve(data[0]);            
        });        
      });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(
                query,
            [userInfo.id, userInfo.name, userInfo.psword],
            (err) => {
            if(err) reject(`${err}`);        //에러가 있을시 reject로 에러를 던짐
            else resolve({success:true});            //없을시 오브젝트를 던짐
        });        
      });
       
    }
}       //JSON.stringify = 문자열 형태로 바꿔줌

module.exports = UserStorage;

