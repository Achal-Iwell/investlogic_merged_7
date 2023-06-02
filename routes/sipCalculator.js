const express = require("express")
const router = express.Router()

const { inputValidator } = require("../controllers/sipCalculator")

router.get("/getSipCalculator", inputValidator)

module.exports = router