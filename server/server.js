// require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express by calling the function
// return above - gives us an object
const app = express();
const port = 5000;

const quotesData = require ('./modules/quotes');

// express static file serving - public is the folder name where our index.html file is
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let index = 0;

app.get('/quotes', (req, res) => {
    
    console.log('hi from get request');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    
    let index = randomNumber(0, (quotesData.list.length-1));
    res.send(quotesData.list);
    
});

//creates a random integer for selecting an array element
function randomNumber (min, max) {

    return Math.floor(Math.random() * (1 + max - min) + min);
}

app.post('/quotes', (req, res) => {
    
    console.log('hello from post', req.body);
    quotesData.list.push(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Up and running on port', port);
});