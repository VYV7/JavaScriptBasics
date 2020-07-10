// making an HTTP request using Fetch API

const aThing = fetch('http://restcountries.eu/rest/v2/all', {})
.then( (response) => {                              // THEN 1
    // fetch returns fulfilled Promise even if 
    // the server responds with an error - check the status
    if (response.status === 200) {
        return response.json()
    } else {
        throw Error('Something went wrong ;(')
    }
})
.then( (data) => {                                  // THEN 2
    console.log(data)
    return data
})
.catch( (error) => {                                // CATCH
    // this will be executed in case of network error or 
    // if the server address can't be found
    console.log(`Catch: ${error}`)
})

console.log(aThing)

setTimeout( () => {
    console.log(aThing)
}, 1000)
