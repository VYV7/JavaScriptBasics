//---------------------------------------------------------
// executor function for the promise object
// takes two functions as arguments (defined later on)
//      resolve - called with one argument if things go well
//      reject - called with ine argument if things go bad 
// It is called right away when a promise is created
// Start a long running process here
// (HTTP requests, storing data to a database etc.)

const promiseExecutor = (resolve, reject) => {
    setTimeout( () => {
        const result = 1 + 2            // CONTROL

        if (result === 2) {
            resolve('Promise resolved') // called if things went well
        } else {
            reject('Promise rejected')  // called if things went bad
        }
    }, 2000)
}

//---------------------------------------------------------
// creating a new promise
// promise states: pending, fulfilled, rejected

let myPromise = new Promise(promiseExecutor)
console.log(`A new Promise has just been created:`)
console.log(myPromise)

//---------------------------------------------------------
// define what to do when the promise is resolved/rejected
// Promise.then( onFulfilled(), onRejected() ).catch()

myPromise
.then( (resolveMessage) => {                // handle fulfilled promise 1
    console.log(`Then1: ${resolveMessage}`)
    console.log(myPromise)
}, (error) => {
    console.log(error)
    console.log(`Error: ${error}`)
    console.log(myPromise)
})
.catch( (reason) => {                     // handle any rejected promises
    console.log(`Catch: ${reason}`)
    console.log(myPromise)
})

// //---------------------------------------------------------
// //define what to do when the promise is resolved/rejected

// myPromise
// .then( (resolveMessage) => {                // handle fulfilled promise 1
//     console.log(`Then1: ${resolveMessage}`)
//     console.log(myPromise)
// }).catch( (reason) => {                     // handle any rejected promises
//     console.log(`Catch: ${reason}`)
//     console.log(myPromise)
// })

//---------------------------------------------------------
// promise chaining

// myPromise
// .then( (resolveMessage) => {
//     console.log(`Then1: ${resolveMessage}`)
//     return 'Then1 sent ' + resolveMessage 
// }).then( (fromThen1) => {
//     console.log(`Then2: ${fromThen1}`)
// }).catch( (reason) => {
//     console.log(`Catch: ${reason}`)
// })

//not pushed - errors - investigate

// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-catch-method