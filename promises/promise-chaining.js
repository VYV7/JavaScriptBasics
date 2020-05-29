//---------------------------------------------------------
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
    }, 2000)
}

const myPromise = new Promise(promiseExecutor)

console.log('A new Promise has just been created:')
console.log(myPromise)

//---------------------------------------------------------
// define what to do when the promise is resolved/rejected
// Promise.then( onFulfilled(), onRejected() ).catch()
let message

myPromise
// THEN 1
.then( (resolveMessage) => { 
    setTimeout( () => {
        message = `Then1 <- ${resolveMessage}`
        console.log('\n' + message)
        console.log(myPromise)
        if (1)  return message
        else    throw Error('Then1 (from resolved)')
    }, 2000)
}, (rejectMessage) => {
    message = `Then1 error <- ${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then1 (from rejected)')
})

// THEN 2
.then( (resolveMessage) => { 
    message = `Then2 <- ${resolveMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (0)  return message
    else    throw Error('Then2 (from resolved)')
}, (rejectMessage) => {
    message = `Then2 error <- ${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 (from rejected)')
})

// THEN 3
.then( (resolveMessage) => { 
    message = `Then3 <- ${resolveMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then3 (from resolved)')
}, (rejectMessage) => {
    message = `Then3 error <- ${rejectMessage}`
    console.log('\n' + message)
    console.log(myPromise)
    if (1)  return message
    else    throw Error('Then2 (from rejected)')
})

// CATCH
.catch( (reason) => {                       // handle any rejected promises
    console.log(`\nCatch <- ${reason}`)
    console.log(myPromise)
})

// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-catch-method
