"use strict";

const User = require("../../models/User");

const output = {
        home : (req, res) => {       // == function home(req, res) {}
        res.render("home/index");        
    },
        login : (req, res) => {
        res.render("home/login");
    },
        register: (req,res) => {
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {  //로그인 함수
        const user = new User(req.body);    //유저인스턴스를 만들어서
        const response = await user.login();      //유저에 로그인 매서드를 실행
        return res.json(response);
    },
    register: async (req, res) => {   //회원가입
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {      // 밖에서 사용할수있도록 내보내줌
    output,
    process,
};