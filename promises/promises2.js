//=============================================================================
// Executor function is called right away when a promise is created
// Start async process here
// (HTTP requests, storing data to a database etc.)
// EXECUTOR 1------------------------------------------------------------------
const promiseExecutor1 = (resolve, reject) => {
    console.log('Starting 1st async operation (promiseExecutor1)')
    setTimeout( () => {                             // start 1st async task
        console.log('\n1st async operation DONE')
        if (1)  resolve('Promise 1 resolved')       // called if things went well
        else    reject('Promise 1 rejected')        // called if things went bad
    }, 1000)
}
// EXECUTOR 2------------------------------------------------------------------
const promiseExecutor2 = (resolve, reject) => {
    console.log('Strating 2nd async operation (promiseExecutor2)')
    setTimeout( () => {                             // start 2nd async task
        console.log('\n2nd async operation DONE')
        if (1)  resolve('Promise 2 resolved')
        else    reject('Promise 2 rejected')
    }, 1000)
}
//=============================================================================
// Then method is called when the Promise is resolved (fulfilled OR rejected)
// Handle async process response here
// THEN 1 ---------------------------------------------------------------------
const then1success = (fulfilledMessage) => {        // SUCCESS Handler
    let message1 = `Then1 <- ${fulfilledMessage}`   // form a message
    console.log(`\t${message1}`)
    if (1)  return new Promise(promiseExecutor2)    // return a new PENDING Promise
    else    throw Error('Then1 (success handler)')  // or a new REJECTED Promise with Error msg as value 
}
const then1failure = (rejectMessage) => {           // ERROR Handler
    let message1 = `Then1 error <- ${rejectMessage}`// form a message
    console.log(`\t${message1}`)
    if (1)  return message1                         // return a new RESOLVED Promise with message as value 
    else    throw Error('Then1 (error handler)')    // or a new REJECTED Promise with Error msg as value
}
// THEN 2 ---------------------------------------------------------------------
const then2success = (fulfilledMessage) => {        // SUCCESS Handler
    let message2 = `Then2 <- ${fulfilledMessage}`
    console.log(`\t${message2}`)
    console.log('Returning final resolved Promise')
    if (1)  return message2
    else    throw Error('Then2 (success handler)')
}
const then2failure = (rejectMessage) => {           // ERROR Handler
    let message2 = `Then2 error <- ${rejectMessage}`
    console.log(`\t${message2}`)
    if (1)  return message2
    else    throw Error('Then2 (error handler)')
}
// CATCH ---------------------------------------------------------------------
const commonErrorHandler = (reason) => {            // handle uncaught ERRORS
    console.log(`\nCatch <- ${reason}`)
    return reason
}
//=============================================================================
// USE ------------------------------------------------------------------------
// create a Promise
let finalPromise = new Promise( promiseExecutor1 )  // EXECUTOR
.then( then1success, then1failure )                 // THEN 1
.then( then2success, then2failure )                 // THEN 2
.catch( commonErrorHandler )                        // CATCH

// print finalPromise state right away
console.log('\nfinalPromise has just been created:')
console.log(finalPromise)
console.log('\n')

// print finalPromise state after a delay
setTimeout( () => {
    console.log('\n\nfinalPromise after some time:')
    console.log(finalPromise)
    console.log('\n')
}, 5000)


// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-catch-method
