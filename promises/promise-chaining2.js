// This corresponds to promiseExecutor
// promExec = function ( successCb, failureCb ) {
//     setTimeout( () => {                                         // run when stack is clear
//         if (1)  successCb('Promise resolved', then2successCb)   // called if things went well
//         else    failureCb('Promise rejected')                   // called if things went bad
//     }, 0)
// }

// // THEN 1
// const then1successCb = function ( resolveMessage, successCb ) {  // SUCCESS Handler

//     let then1Msg = `Then1 <- ${resolveMessage}`                 // form a message
//     console.log('\n' + then1Msg)

//     setTimeout( () => {
//         if (1)  successCb(then1Msg, then3successCb, failureCb)  // called if things went well 
//         else    failureCb('Error: Then1 (from resolved)')       // called if things went bad
//     }, 0)
// }

// // THEN 2
// const then2successCb = function ( resolveMessage, successCb, failureCb ) {

//     let then2Msg = `Then2 <- ${resolveMessage}`                 // form a message
//     console.log('\n' + then2Msg)

//     setTimeout( () => {
//         if (0)  successCb(then2Msg)                             // called if things went well 
//         else    failureCb('Error: Then2 (from resolved)')       // called if things went bad
//     }, 0)
// }

// // THEN 3
// const then3successCb = function ( resolveMessage ) {

//     let then3Msg = `Then3 <- ${resolveMessage}`                 // form a message
//     console.log('\n' + then3Msg)

//     setTimeout( () => {
//         if (1)  console.log('\nDONE!')                          // print final result
//         else    failureCb('Error: Then3 (from resolved)')       // called if things went bad
//     }, 0)
// }
// EXECUTOR -------------------------------------------------------------------
promExec = function ( successCb, failureCb ) {
    console.log('Strating 1st async operation (promExec)')
    setTimeout( () => {                                         // run when stack is clear
        console.log('\n1st async operation DONE')
        if (1)  successCb('Promise resolved')   // called if things went well
        else    failureCb('Promise rejected')                   // called if things went bad
    }, 1000)
}

// THEN 1
const then1successCb = function ( resolveMessage, successCb, failureCb ) {  // SUCCESS Handler
    console.log('Strating 2nd async operation (then1)')
    setTimeout( () => {
        console.log('\n2nd async operation DONE')
        if (1)  successCb(resolveMessage)  // called if things went well 
        else    failureCb('Error: Then1 (from resolved)')       // called if things went bad
    }, 0)
}

// THEN 2
const then2successCb = function ( resolveMessage, successCb, failureCb ) {
    console.log('Strating 3rd async operation (then2)')
    setTimeout( () => {
        console.log('\n3rd async operation DONE')
        if (1)  successCb(resolveMessage)                             // called if things went well 
        else    failureCb('Error: Then2 (from resolved)')       // called if things went bad
    }, 0)
}

// THEN 3
const then3successCb = function ( resolveMessage, successCb, failureCb  ) {
    console.log('Strating 4th async operation (then3)')
    setTimeout( () => {
        console.log('\n4th async operation DONE')
        if (1)  successCb(resolveMessage)                           // print final result
        else    failureCb('Error: Then3 (from resolved)')       // called if things went bad
    }, 0)
}

// CATCH
const failureCb = function ( reason, nextThen ) {                         // ERROR Handler
    console.log('\nERROR: ' + reason)
    nextThen(reason)
}
//-----------------------------------------------------------------------------

// promExec(then1successCb, failureCb);
console.log('A new Promise has just been created:')

promExec(function ( resolveMessage ) {                          // SUCCESS Handler

    let then1message = 'Then 1 <- ' + resolveMessage
    console.log(then1message)


    console.log('Strating 2nd async operation (then1)')
    setTimeout( () => {
        console.log('\n2nd async operation DONE')
        if (1)  successCb(resolveMessage)  // called if things went well 
        else    failureCb('Error: Then1 (from resolved)')       // called if things went bad
    }, 1000)


    
    console.log('Strating 2nd async operation (then1)')
    setTimeout( () => {
        if (1) {
            then2successCb(then1message, function ( msgFromThen2 ) {    // SUCCESS Handler

                let then2message = 'Then 2 <- ' + msgFromThen2
                console.log(then2message)
            
                then3successCb(then2message, function ( then2message ) {// SUCCESS Handler
        
                    let then3message = 'Then 3 <-' + then2message
                    console.log(then3message)
                  
                }, failureCb)                           // ERROR Handler
                
            }, failureCb)                               // ERROR Handler
        }
        else failureCb('Error: Then1 (from resolved)')       // called if things went bad
    }, 1000)

    
}, failureCb);                                  // ERROR Handler

