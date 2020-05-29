// making an HTTP request


// create instance of the request and initialise it
const myRequest = new XMLHttpRequest()
console.log('New XMLHttpRequest object:')                   // DEBUG
console.log(myRequest)                            // DEBUG (comment out sent())

// onload event (handles the response if readyState is DONE)
myRequest.onload = () => {
    console.log('\n---------- Response received ---------- \n')
    // if and status code is OK
    if (myRequest.status === 200) {
        console.log('\nRaw: ')                              // DEBUG
        console.log(myRequest.responseText)                 // DEBUG
        const data = JSON.parse(myRequest.responseText)     // convert to obj.
        console.log('\nConverted:')                         // DEBUG
        console.log(data)                                   // DEBUG
    // if status code is not OK
    } else {
        console.log('Something went wrong')
    }
}

// open (initialize/prepair the request)
myRequest.open('GET', 'http://restcountries.eu/rest/v2/all')

// send the new request (asynchronous by default)
// returns as soon as the request is sent
myRequest.send()
console.log('\n------------- Request sent ------------ \n')








// // making an HTTP request
// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


// // create instance of the request and initialise it
// const myRequest = new XMLHttpRequest()
// console.log('New XMLHttpRequest object created:')           // DEBUG
// console.log(myRequest)                            // DEBUG (comment out sent())

// // onload event (handles the response if readyState is DONE)
// // may not be compatible with Safari-iOS
// myRequest.onload = () => {
//     console.log('\n---------- Response received ---------- \n')
//     // if and status code is OK
//     if (myRequest.status === 200) {
//         console.log('\nRaw: ')                              // DEBUG
//         console.log(myRequest.responseText)                 // DEBUG
//         const data = JSON.parse(myRequest.responseText)     // convert to obj.
//         console.log('\nConverted:')                         // DEBUG
//         console.log(data)                                   // DEBUG
//     // if status code is not OK
//     } else {
//         console.log(`Something went wrong: ${myRequest.status}`)
//     }
// }

// // // alternatively, using an event listener
// // myRequest.addEventListener('readystatechange', (e) => {
// //     // if readyState is DONE and status code is OK
// //     if (e.target.readyState === 4 && e.target.status === 200) {
// //         console.log('\nRaw: ')                              // DEBUG
// //         console.log(e.target.response)                      // DEBUG
// //         const data = JSON.parse(e.target.responseText)      // convert to obj.
// //         console.log('\nConverted:')                         // DEBUG
// //         console.log(data)                                   // DEBUG
// //     // if readyState is DONE and status code is not OK
// //     } else if (e.target.readyState === 4) {
// //         console.log('Something went wrong')                 // DEBUG
// //     }
// // })

// // open (initialize/prepair the request)
// myRequest.open('GET', 'http://restcountries.eu/rest/v2/all')

// // send the new request (asynchronous by default)
// // returns as soon as the request is sent
// myRequest.send()
// console.log('\n------------- Request sent ------------ \n')
