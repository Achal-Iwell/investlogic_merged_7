const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(express.json())
app.use(bodyparser.json()) 

app.use('/portfolioCorrelation', require('./routes/portfolioCorrelation'))    
app.use('/invoiceGenerator', require('./routes/invoiceGenerator'))
app.use('/portfolioOverlap', require('./routes/portfolioOverlap'))
app.use('/sipStepUpCalculator', require('./routes/sipStepUpCalculator'))
app.use('/sipDelayCalculator',require('./routes/sipDelay'))
app.use('/sipCalculator',require('./routes/sipCalculator'))
app.use('/riskProfile',require('./routes/riskProfile'))
app.all('/*', (req, res) => {
  res.status(404).send('API Not Found')
})

//running the server
app.listen(3000, () => { console.log(`Express server listening on port 3000`) }) 