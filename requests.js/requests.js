// making an HTTP request
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


// create instance of a request and initialise it
const myRequest = new XMLHttpRequest()

// set event listener (will handle the response)
myRequest.addEventListener('readystatechange', (e) => {
    // if readyState is DONE and status code is OK
    if (e.target.readyState === 4 && e.target.status === 200) {
        console.log(e.target)                           // print target
        const data = JSON.parse(e.target.responseText)  // extract data obj.
        console.log(data)                               // print extracted data
    // if readyState is DONE and status code is not OK
    } else if (e.target.readyState === 4) {
        console.log('Something went wrong')
    }
})

// open (initialize the request)
myRequest.open('GET', 'http://restcountries.eu/rest/v2/all')

// send the new request (asynchronous by default)
// returns as soon as the request is sent
myRequest.send()
