const express = require("express");
const router = express.Router();

const cntrl = require('../controllers/index');

router.get("/",cntrl );
router.get("/compiler", cntrl.compiler);


router.post("/send/request", cntrl.output);

module.exports = router