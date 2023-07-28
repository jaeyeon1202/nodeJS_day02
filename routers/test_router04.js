const express = require("express");
const ctrl = require("../controller/test_controller04");

const router = express.Router();

router.get("/", ctrl.index); //여러개를 보내면 .무엇 으로 표현

router.get("/test1", ctrl.t1);
router.get("/test2", ctrl.t2);


module.exports = router; //라우터 내보내기