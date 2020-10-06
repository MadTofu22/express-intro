// require express - gives us a function
const express = require('express');

// create an instance of express by calling the function
// return above - gives us an object
const app = express();
const port = 5000;

const quotesData = require ('./modules/quotes');

// express static file serving - public is the folder name where our index.html file is
app.use(express.static('server/public'));

let index = 0;

app.get('/quotes', (req, res) => {
    
    console.log('hi from get request');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    
    let index = randomNumber(0, (quotesData.length-1));
    res.send(quotesData[index]);
});

//creates a random integer for selecting an array element
function randomNumber (min, max) {

    return Math.floor(Math.random() * (1 + max - min) + min);
}

app.listen(port, () => {
    console.log('Up and running on port', port);
});