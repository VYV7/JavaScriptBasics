//=============================================================================
// EXECUTOR -------------------------------------------------------------------
// Executor function is called right away when a promise is created
// Start a long running process here
// (HTTP requests, storing data to a database etc.)
const promiseExecutor = (resolve, reject) => {
    console.log('Strating 1st async operation (promExec)')
    setTimeout( () => {                         // start 1st async task
        console.log('\n1st async operation DONE')
        if (1)  resolve('Promise resolved')     // called if things went well
        else    reject('Promise rejected')      // called if things went bad
    }, 1000)
}
// THEN 1 ---------------------------------------------------------------------
const then1success = (resolveMessage) => {      // SUCCESS Handler
    let message1 = `Then1 <- ${resolveMessage}` // form a message
    console.log('\n' + message1)
    console.log(myPromise)
    if (1)  return message1                     // return a new RESOLVED Promise with message as value 
    else    throw Error('Then1 (from resolved)')// ...or a new REJECTED Promise with Error msg as value 
}
const then1failure = (rejectMessage) => {       // ERROR Handler
    let message1 = `Then1 error <- ${rejectMessage}` // form a message
    console.log('\n' + message1)
    console.log(myPromise)
    if (0)  return message1                     // return a new RESOLVED Promise with message as value 
    else    throw Error('Then1 (from rejected)')// ...or a new REJECTED Promise with Error msg as value
}
// THEN 2 ---------------------------------------------------------------------
const then2success = (resolveMessage) => {      // SUCCESS Handler
    let message2 = `Then2 <- ${resolveMessage}`
    console.log('\n' + message2)
    if (0)  return message2
    else    throw Error('Then2 (from resolved)')
}
const then2failure = (rejectMessage) => {       // ERROR Handler
    let message2 = `Then2 error <- ${rejectMessage}`
    console.log('\n' + message2)
    if (1)  return message2
    else    throw Error('Then2 (from rejected)')
}
// THEN 3 ---------------------------------------------------------------------
const then3success = (resolveMessage) => {      // SUCCESS Handler
    let message3 = `Then3 <- ${resolveMessage}`
    console.log('\n' + message3)
    if (1)  return message3
    else    throw Error('Then3 (from resolved)')
}
const then3failure = (rejectMessage) => {       // ERROR Handler
    let message3 = `Then3 error <- ${rejectMessage}`
    console.log('\n' + message3)
    if (1)  return message3
    else    throw Error('Then3 (from rejected)')
}
// CATCH ---------------------------------------------------------------------
const commonErrorHandler = (reason) => {       // handle uncaught ERRORS
    console.log(`\nCatch <- ${reason}`)
    return(reason)
}
//=============================================================================
// create a Promise and
// define what to do when the promise is resolved/rejected
const myPromise = new Promise( promiseExecutor )    // EXECUTOR
.then( then1success, then1failure )                 // THEN 1
.then( then2success, then2failure )                 // THEN 2
.then( then3success, then3failure )                 // THEN 3
.catch( commonErrorHandler )                        // CATCH

// print myPromise right away
console.log('A new Promise has just been created:')
console.log(myPromise)




// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-catch-method
