//라이브러리 가져오기
const express = require("express");
const member = require("../db/memberDAO");
//test_touter:현재, db폴더는 한단계 전에 있어서 ../
const router = express.Router();

router.get("/", (req,res)=>{
    console.log("DBMember: ", member);
    res.render("index");
});

router.get("/test1", (req,res)=>{
    res.render("test1");
});
router.get("/test2", (req,res)=>{
    res.render("test2");
});

module.exports = router;
//라우터를 내보내겠다.