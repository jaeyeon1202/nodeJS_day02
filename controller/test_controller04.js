const service = require("../service/test_service04"); //서비스 인폴트

const index = (req,res)=>{
    const mem = service.index(); //serivce04에서 index내보낸거 받아오기
    res.render("index", {member:mem}); //member, mem으로 받기
}//라우터내용->컨트롤러로

const test1 = (req, res)=>{
    console.log("===test1 컨트롤러 연결===")
    //res.render("test1")
    res.redirect("/"); //해당하는 url로 다시 연결(localhost:3000/test1/) -> index페이지가 나온다.
}//리다이렉트: 다시 경로 요청, 렌더: 설정된 경로로 간다.(괄호안에쓴곳으로)

const test2 = (req, res)=>{
    res.render("test2")
}

module.exports = {index:index, t1:test1, t2:test2};