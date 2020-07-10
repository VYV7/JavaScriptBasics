// functions ------------------------------------------------------------------
function func1(num1, num2, operationCb) {
    let result = 0

    console.log(`\nPerforming operation on ${num1} and ${num2}`)
    result = operationCb(num1, num2)
    console.log(result)
}

// operations - callbacks -----------------------------------------------------
function add(a, b) {
    let result = 0
    console.log(`Adding ${a} and ${b}`)
    result = a + b

    return result
}

function sub(a, b) {
    let result = 0
    console.log(`Subtracting ${b} from ${a}`)
    result = a - b

    return result
}

// use - lvl. 1----------------------------------------------------------------
let result

result = func1(10, 3, add)
result = func1(10, 3, sub)

result = func1(10, 3, function(a, b) {
    console.log(`Multiplying ${a} by ${b}`)
    
    return a * b
})
