// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//globals
const port = 5000;
let things = [];
//test data
things.push( { name: 'bottle' } );

//uses
app.use(express.static('server/public')); // telling it where to find index.html
app.use(bodyParser.urlencoded({ extended: true }))

// spin up server
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

//routes
    //get request
app.get('/things', (req, res) => { // request, response
    console.log('in /things GET');
    res.send(things)
})
    //post request
app.post('/things', (req, res) => {
    console.log('in /things POST:', req.body) //body undefined if you haven't installed body-parser
    things.push(req.body)
    res.send('woof')
})