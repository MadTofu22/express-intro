// require express - gives us a function
const express = require('express');

// create an instance of express by calling the function
// return above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name where our index.html file is
app.use(express.static('server/public'));


app.listen(port, () => {
    console.log('Up and running on port', port);
});