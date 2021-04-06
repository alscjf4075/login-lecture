"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);      
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);


router.post("/login", ctrl.process.login);  //로그인 버튼을 누를시 서버에 포스트로 로그인 경로 요청 컨트롤러에 프로세스안에있는 로그인 함수가 실행
router.post("/register", ctrl.process.register);

module.exports = router;    //라우터를 사용할수있게 외부로 내보내줌

//get 주소창에 모든 정보를 담아 정보를 전달하는 방식
//post 내부적으로 정보를 전송하는 방식