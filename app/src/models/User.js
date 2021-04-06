"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }
    
    async login(){    //로그인 매서드 실행 , await을 사용하기위해 async사용
        const client = this.body;
        try{
            const {id,psword} = await UserStorage.getUserInfo(client.id);

            if(id){
                if(id === client.id && psword === client.psword) {
                    return { success: true};
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return { success: false, msg: "존재하지 않는 아이디입니다."};
        } catch(err){
            return{success: false, err};    //에러 잡았을때
        }
    }

    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save(client);  //유저스토리지에 세이브메서드를 호출
        return response;
        } catch(err) {       
          return {success: false, err};
        }
    }
}

module.exports = User;