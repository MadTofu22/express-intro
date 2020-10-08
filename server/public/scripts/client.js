console.log('hello from client.js');

$(onReady);

function onReady () {

    getRandomQuote();
}

function getRandomQuote () {
    
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(response => {
        console.log('response', response);
        appendToDom(response);
    });
}

function appendToDom (data) {

    $('#quote').append(`<p>${data.quote}<br>- ${data.author}</p>`);
}