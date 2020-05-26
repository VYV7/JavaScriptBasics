//---------------------------------------------------------
// Executor function for the promise object
// takes two functions as arguments (defined later on)
//      resolve() - called with one argument if things go well
//      reject() - called with one argument if things go bad 
// Executor function is called right away when a promise is created
// Start a long running process here
// (HTTP requests, storing data to a database etc.)

const promiseExecutor = (resolve, reject) => {
    setTimeout( () => {
        if (1) {
            resolve('Promise resolved') // called if things went well
        } else {
            reject('Promise rejected')  // called if things went bad
        }
    }, 3000)
}

//---------------------------------------------------------
// creating a new promise
// promise states: pending, fulfilled, rejected

const myPromise = new Promise(promiseExecutor)
console.log(`A new Promise has just been created:`)
console.log(myPromise)

//---------------------------------------------------------
// define what to do when the promise is resolved/rejected
// Promise.then( onFulfilled(), onRejected() ).catch()
let message


myPromise
.then( (resolveMessage) => { 
    message = `Then1: ${resolveMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    // if (1)  return message
    // else    throw Error('Then1 error from resolved')
}, (rejectMessage) => {
    message = `Then1 error ${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    // if (1)  return message
    // else    throw Error('Then1 error from rejected')
})


.then( (resolveMessage) => { 
    message = `Then2: ${resolveMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 error from resolved')
}, (rejectMessage) => {
    message = `Then2 error${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 error from rejected')
})


.then( (resolveMessage) => { 
    message = `Then3: ${resolveMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 error from resolved')
}, (rejectMessage) => {
    message = `Then3 error${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 error from rejected')
})


.catch( (reason) => {                       // handle any rejected promises
    console.log(`\nCatch: ${reason}`)
    console.log(myPromise)
})

// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-catch-method
