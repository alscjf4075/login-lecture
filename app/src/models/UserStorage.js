"use strict";

const fs = require("fs").promises;   //users.json에 접근을해서 읽어올 수 있도록해줌 파일시스템

class UserStorage {   
    static #getUserInfo(data, id){      //프라이빗한 변수나 메서드는 항상 최상단에 올려줌
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    } 

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
           return newUsers;
    }

    static getUserInfo(id){
            return fs
            .readFile("./src/databases/users.json")
            .then((data) => {   //해당로직이 성공했을때 실행
                return this.#getUserInfo(data, id);     //은닉화 된 메서드 호출 getUserInfo랑 다름
            })     
            .catch(console.error);   //실패
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return{ success: true};
    }
}

module.exports = UserStorage;

