const member = require("../db/memberDAO"); //DB내용 가져오기
const index = (req,res)=>{
    console.log("===index 컨트롤러 연결===");
    console.log(member);
    res.render("index");
}//라우터내용->컨트롤러로

const test1 = (req, res)=>{
    res.render("test1")
}
const test2 = (req, res)=>{
    res.render("test2")
}

module.exports = {index:index, t1:test1, t2:test2}; //인덱스 내보내기
//여러가지 값을 내보낼때는 중괄호롤 묶어준다.{index, test1, test2}
//그냥 {index, test1, test2}로 쓰면 key,value를 둘다 같은 이름을 쓰겠다.
//만약 키를 변경하면 라우터에서 이름 변경해줘야 함.
//router.get("/test1", ctrl.t1); 이런식으로 이름 변경