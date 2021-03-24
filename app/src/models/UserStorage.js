"use strict";

class UserStorage {
     static #users = {
        id: ["alscjf4075", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["함민철", "나개발", "김팀장"],
    };

    static getUser(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
           return newUsers;
    }
}

module.exports = UserStorage;