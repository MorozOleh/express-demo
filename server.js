const express = require('express')
const app = express()
const port = 5000;

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({wife: 'Tania'})})
    
app.use(express.static('build'))

app.listen(port, () => {console.log('Example app listening at:', port)})

