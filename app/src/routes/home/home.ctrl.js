"use strict";

const User = require("../../models/User");

const output = {
        home : (req, res) => {       // == function home(req, res) {}
        res.render("home/index");        
    },
        login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {      // 밖에서 사용할수있도록 내보내줌
    output,
    process,
};