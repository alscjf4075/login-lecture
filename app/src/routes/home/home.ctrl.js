"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
        home : (req, res) => {       // == function home(req, res) {}
        logger.info(`GET /200 "홈 화면으로 이동"`);
        res.render("home/index");        
    },
        login : (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
        register: (req,res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`); 
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {  //로그인 함수
        const user = new User(req.body);    //유저인스턴스를 만들어서
        const response = await user.login();      //유저에 로그인 매서드를 실행 
        if(response.err)
            logger.error(
                `POST/login 200 Response: "success: ${response.success}, ${response.error}"`
                );
        else               
        logger.info(
            `POST/login 200 Response: "success: ${response.success}, msg: ${response.msg}"`   
        );
        return res.json(response);
    },
    register: async (req, res) => {   //회원가입
        const user = new User(req.body);
        const response = await user.register();
        if(response.err)
        logger.error(
            `POST/login 200 Response: "success: ${response.success}, ${response.error}"`
            );
    else       
        logger.info(
            `POST/register 200 Response: "success: ${response.success}, msg: ${response.msg}"`   
        );
        return res.json(response);
    },
};

module.exports = {      // 밖에서 사용할수있도록 내보내줌
    output,
    process,
};