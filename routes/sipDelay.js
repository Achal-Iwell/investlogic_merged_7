const express = require('express')
const router = express.Router()

const {getSipDelayCalculatedData} = require('../controllers/sipDelay')

//setting routes
router.get('/getSipDelayCalculator', getSipDelayCalculatedData)

module.exports = router