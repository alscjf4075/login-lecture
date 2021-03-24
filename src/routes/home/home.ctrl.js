"use strict";

const home = (req, res) => {       // == function home(req, res) {}
    res.render("home/index");        
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {      // 밖에서 사용할수있도록 내보내줌
    home,
    login,
};