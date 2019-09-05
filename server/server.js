// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//globals
const port = 5000;
let employees = [];
//test data

//uses
app.use(express.static('server/public')); // telling it where to find index.html
app.use(bodyParser.urlencoded({ extended: true }))

// spin up server
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

//routes
    //get request
app.get('/employees', (req, res) => { // request, response
    console.log('in /employees GET');
    res.send(employees)
})
    //post request
app.post('/employees', (req, res) => {
    console.log('in /employees POST:', req.body) //body undefined if you haven't installed body-parser
    employees.push(req.body)
    res.send('woof')
})