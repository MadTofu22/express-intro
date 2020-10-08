console.log('hello from client.js');

$(onReady);

function onReady () {

    getRandomQuote();

    $('#submitButton').on('click', submitQuote);
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

    $('#quote').empty();
    data.forEach(element => {
        $('#quote').append(`<p>${element.quote}<br>- ${element.author}</p>`);        
    });

}

function submitQuote () {
    
    let quote = $('#quoteInput').val();
    let author = $('#authorInput').val();
    console.log('quote', quote, 'author', author);
    //send data to server
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: {
            quote,
            author
        }
    }).then(response => {
        console.log('response:', response);
        $('#quoteInput').val('');
        $('#authorInput').val('');
        getRandomQuote();
    }).catch(error => {
        alert(error);
    });
}