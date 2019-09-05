# intro_express

## Node, Express, Ajax

Node/Express setup
===

Step 1: setup
---
git init
npm init --yes
npm install express --save
create `server` folder
create `server.js` in `server` folder
create `server/public` folder
in 'public': create `index.html` `scripts` folder, `vendors`

Step 2: spinning up server
---
```
// requires
const express = require('express');
const app = express();

//globals
const port = 5000;

//uses
app.use(express.static(''));

// spin up server
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

//routes
app.get('/things', (req, res) => { // request, response
    console.log('in /things GET');
    res.send('meow')
})
```


