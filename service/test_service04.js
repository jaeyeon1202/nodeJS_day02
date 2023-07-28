const member = require("../db/memberDAO");

const index = () => {
    console.log("service index 연결");
    return member;
}
module.exports={index};