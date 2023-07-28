const express = require("express");
const member = require("./db/memberDAO");

const app = express();
const router = express.Router(); //페이지를 여러개 만들어서 사용할때 유용, 라우터를 통해서 경로를 변경, 미들웨어-대신처리

app.set("views","./views");
app.set("view engine","ejs");

const router2 = express.Router();
app.use("/board", router2); //라우터2를 만들어서 board로 들어가면 자동으로 라우터2 연결

app.use("/", router); //app으로 하던거를 라우터한테 위임 - 미들웨어

//test1 url 요청시 test1.ejs 연결
router.get("/test1", (req,res)=>{
    console.log(member);
    res.render("test1");
});
//test2 url 요청시 test1.ejs 연결
router.get("/test2", (req,res)=>{
    res.render("test2");
});

router2.get("/index", (req,res)=>{ 
    res.send("/board/index 연결되었습니다!!");
});

router.get("/member/index", (req,res)=>{ 
    res.render("index");
});

/*
app.get("/", (req,res)=>{ //app을 통해서 연결해주겠다.
    res.render("index");
});
*/

app.listen(3000, ()=>{console.log("3000서버 연동 성공")});